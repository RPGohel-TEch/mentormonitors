import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";

const Database = () => {
  const [courseName, setCourseName] = useState("");
  const [courseSem, setCourseSem] = useState("");
  const [courseBatch, setCourseBatch] = useState("");
  const [courseData, setcourseData] = useState([]);
  const [courseEditId, setCourseEditId] = useState("");
  const [courseEditName, setcourseEditName] = useState("");
  const [courseEditSem, setcourseEditSem] = useState("");
  const [subjectData, setsubjectData] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [subjectSem, setSubjectSem] = useState("1");
  const [subjectBranch, setSubjectBranch] = useState("it");
  const [subjectBatch, setSubjectBatch] = useState("a");
  const [subjectid, setSubjectid] = useState("");
  const [facultyName, setFacultyName] = useState("");
  const [facultyEmail, setFacultyEmail] = useState("");
  const [facultyEnrollNo, setFacultyEnrollNo] = useState("");
  const [facultyPassword, setFacultyPassword] = useState("");
  const [facultyData, setFacultyData] = useState([]);
  const [searchFaculty, setSearchFaculty] = useState("");

  const getcourseData = async () => {
    const { data } = await axios.get(`http://localhost:8000/course/`);
    setcourseData(data?.data?.users);
    // console.log("hellos"+ data.data.users[0].course_name)
  };

  const getsubjctData = async () => {
    const { data } = await axios.get(`http://localhost:8000/subject/`);
    setsubjectData(data?.data?.users);
  };

  const getfacultyData = async () => {
    const { data } = await axios.get(`http://localhost:8000/faculty/`);
    setFacultyData(data?.data?.users);
  };

  useEffect(() => {
    getcourseData();
    getsubjctData();
    getfacultyData();
  }, []);

  const searchData = useMemo(async () => {
    if (searchFaculty) {
      await axios
        .get(`http://localhost:8000/faculty?search=${searchFaculty}`)
        .then((response) => setFacultyData(response?.data?.data?.users));
    } else {
      return facultyData;
    }
  }, [searchFaculty]);

  const courseSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/course/add-course", {
        course_name: courseName,
        semester: courseSem,
        first_batch: courseBatch,
      })
      .then(function (response) {
        getcourseData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteFaculty = (id) => {
    axios
      .delete(`http://localhost:8000/faculty/${id}`)
      .then(function (response) {
        getfacultyData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteSubject = (id) => {
    axios
      .delete(`http://localhost:8000/subject/${id}`)
      .then(function (response) {
        getsubjctData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const facultyAddHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/faculty/add-faculty", {
        name: facultyName,
        email: facultyEmail,
        enrollment_no: facultyEnrollNo,
        password: facultyPassword,
      })
      .then(function (response) {
        getfacultyData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const courseEditData = async (id) => {
    setCourseEditId(id);
    const { data } = await axios.get(`http://localhost:8000/course/${id}`);
    setcourseEditName(data?.data?.course_name);
    setcourseEditSem(data?.data?.semester);
  };

  const courseEdit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/course/edit-course/${courseEditId}`, {
        course_name: courseEditName,
        semester: courseEditSem,
      })
      .then(function (response) {
        getcourseData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteCourse = (id) => {
    axios
      .delete(`http://localhost:8000/course/delete-course/${id}`)
      .then(function () {
        getcourseData();
      });
  };

  const handleSemChange = (e) => {
    setSubjectSem(e.target.value);
  };

  const handleBrachChange = (e) => {
    setSubjectBranch(e.target.value);
  };

  const handleBatchChange = (e) => {
    setSubjectBatch(e.target.value);
  };

  const semDropdown = useMemo(() => {
    if (subjectBranch) {
      const semester = courseData
        ?.filter((data) => data?.course_name === subjectBranch)
        .map((data) => {
          return data?.semester;
        });
      const semArray = Array.from(
        { length: semester.toString() },
        (_, i) => i + 1
      );
      return semArray;
    }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }, [subjectBranch]);

  const subjectSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/subject/add-subject", {
        subject_name: subjectName,
        semester: subjectSem,
        branch: subjectBranch,
        batch: subjectBatch,
      })
      .then(function (response) {
        getsubjctData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const editSubjectHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/subject/edit-subject/${subjectid}`, {
        subject_name: subjectName,
      })
      .then(function (response) {
        getsubjctData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Database">
      <div className="material-head">
        <ul
          className="nav nav-pills mb-3 material-ul"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="pills-course-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-course"
              type="button"
              role="tab"
              aria-controls="pills-course"
              aria-selected="true"
            >
              course
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-faculty-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-faculty"
              type="button"
              role="tab"
              aria-controls="pills-faculty"
              aria-selected="false"
            >
              faculty
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-subject-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-subject"
              type="button"
              role="tab"
              aria-controls="pills-subject"
              aria-selected="false"
            >
              subject
            </a>
          </li>
        </ul>
      </div>
      <div className="material-component-content">
        <div className="tab-content" id="pills-tabContent">
          {/* course tab content starts from here */}
          <div
            className="tab-pane fade show active"
            id="pills-course"
            role="tabpanel"
            aria-labelledby="pills-course-tab"
          >
            <div className="course-component">
              <div
                className="plus-icon"
                data-toggle="modal"
                data-target="#addCourse"
              ></div>
              <div className="subject-cards-main d-flex flex-wrap">
                {courseData &&
                  courseData?.map((d) => (
                    <div className="subject-card">
                      <div className="dropdown">
                        <div
                          className="dropdown-toggle student-three-dots"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <div className="three-dots-in-subjects">
                            <div className="dot-subject"></div>
                            <div className="dot-subject"></div>
                            <div className="dot-subject"></div>
                          </div>
                        </div>

                        <ul className="dropdown-menu ">
                          <li>
                            <a
                              className="dropdown-item"
                              onClick={() => courseEditData(d?._id)}
                              data-toggle="modal"
                              data-target="#editCourse"
                            >
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href=""
                              onClick={() => deleteCourse(d?._id)}
                            >
                              Delete
                            </a>
                            <a className="dropdown-item" href="#">
                              Move Sem forward
                            </a>
                            <a className="dropdown-item" href="#">
                              Move Sem backward
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#addBatch"
                            >
                              Add batch
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="subject-name">{d?.course_name}</div>
                      <div className="total-sem-show">
                        Total Sem: {d?.semester}
                        <br />
                        Total stu: 0
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/*faculty tab content starts from here  */}
          <div
            className="tab-pane fade"
            id="pills-faculty"
            role="tabpanel"
            aria-labelledby="pills-faculty-tab"
          >
            <div className="faculty-component">
              <div
                className="plus-icon"
                data-toggle="modal"
                data-target="#addFaculty"
              ></div>
              <div className="black-board-content p-2">
                <div className="black-board-content-top-section d-flex align-items-center justify-content-between ">
                  {/* <div className="add-students"></div> */}
                  <div className="search-students ml-auto d-flex">
                    <div className="search-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clipRule="evenodd"
                          d="M14.0341 12.8894L19.3046 18.1463C19.4898 18.3312 19.5938 18.5819 19.5938 18.8433C19.5937 19.1047 19.4895 19.3554 19.3041 19.5401C19.1187 19.7249 18.8673 19.8287 18.6053 19.8286C18.3432 19.8285 18.0919 19.7245 17.9066 19.5396L12.6362 14.2827C11.0606 15.4999 9.07934 16.0727 7.09542 15.8846C5.1115 15.6965 3.27394 14.7615 1.95657 13.2701C0.639193 11.7786 -0.0590382 9.84251 0.00391497 7.85576C0.0668681 5.86901 0.886277 3.9808 2.29545 2.57526C3.70462 1.16971 5.5977 0.352409 7.58957 0.289618C9.58144 0.226827 11.5225 0.923262 13.0178 2.23725C14.5132 3.55123 15.4505 5.38406 15.6391 7.36288C15.8277 9.3417 15.2534 11.3179 14.0331 12.8894H14.0341ZM7.83786 13.9652C9.39677 13.9652 10.8918 13.3475 11.9941 12.248C13.0964 11.1485 13.7157 9.65733 13.7157 8.10244C13.7157 6.54754 13.0964 5.05634 11.9941 3.95686C10.8918 2.85739 9.39677 2.23971 7.83786 2.23971C6.27896 2.23971 4.78391 2.85739 3.6816 3.95686C2.57929 5.05634 1.96001 6.54754 1.96001 8.10244C1.96001 9.65733 2.57929 11.1485 3.6816 12.248C4.78391 13.3475 6.27896 13.9652 7.83786 13.9652Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      className="pl-1"
                      placeholder="search faculties"
                      onChange={(e) => setSearchFaculty(e.target.value)}
                    />
                  </div>
                </div>
                <div className="black-board-content-main">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item student-card">
                      {facultyData?.map((faculty) => (
                        <div>
                          <h2
                            className="accordion-header d-flex"
                            id="headingOne"
                          >
                            <div
                              className="accordion-button student-head-in-black-board"
                              data-bs-toggle="collapse"
                              data-bs-target="#student1"
                              aria-expanded="true"
                              aria-controls="student1"
                            >
                              <div className="student-head-card d-flex w-100">
                                <div className="profile-in-student">
                                  <svg
                                    width="19"
                                    height="25"
                                    viewBox="0 0 19 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="10.0006"
                                      cy="6.6"
                                      r="6.4"
                                      fill="#005173"
                                    />
                                    <path
                                      d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                                      fill="#005173"
                                    />
                                  </svg>
                                </div>
                                <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                                  <div className="student-name">
                                    {faculty?.name}
                                  </div>
                                  <div className="student-enrollment">
                                    {faculty?.enrollment_no}
                                  </div>
                                </div>
                                <div className="downarrow-in-student"></div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <div
                                className="dropdown-toggle student-three-dots"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <div className="three-dots"></div>
                              </div>

                              <ul className="dropdown-menu ">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href=""
                                    data-toggle="modal"
                                    data-target="#openstudentmodification"
                                  >
                                    edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    onClick={() => deleteFaculty(faculty?._id)}
                                  >
                                    delete
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Move previous sem
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Move next sem
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Add Result
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </h2>
                          <div
                            id="student1"
                            className="accordion-collapse collapse show accordion-student-collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body d-flex">
                              <div className="student-details-section">
                                <div className="basic-detail-blackboard">
                                  <div className="basic-detail-head">
                                    Basic Details
                                  </div>
                                  <div className="student-info-card">
                                    <b>DOB:</b> 17/04/2003
                                  </div>
                                  <div className="student-info-card">
                                    <b>Phone no:</b> 9989784565
                                  </div>
                                  <div className="student-info-card">
                                    <b>Email:</b> rahul123@gmail.com
                                  </div>
                                  <div className="student-info-card">
                                    <b>Address:</b> A/41 ramrajya nagar, nr.
                                    ayodhya park, nikol, Ahmedabad.
                                  </div>
                                </div>
                                <div className="education-detail-blackboard mt-3">
                                  <div className="basic-detail-head">
                                    Education Details
                                  </div>
                                  <div className="student-info-card">
                                    <b>SSC:</b> 65%
                                  </div>
                                  <div className="student-info-card">
                                    <b>HSC:</b> 60%
                                  </div>
                                  <div className="student-info-card">
                                    <b>Graduation:</b> BscIt
                                  </div>
                                </div>
                              </div>
                              <div className="student-attendance-result-section">
                                <div>
                                  <ul
                                    className="nav nav-pills mb-3"
                                    id="pills-tab"
                                    role="tablist"
                                  >
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link active"
                                        id="pills-attendance-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-attendance"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-attendance"
                                        aria-selected="true"
                                      >
                                        Lectures
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-result-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-result"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-result"
                                        aria-selected="false"
                                      >
                                        Students
                                      </button>
                                    </li>
                                  </ul>
                                  <div
                                    className="tab-content"
                                    id="pills-tabContent"
                                  >
                                    <div
                                      className="tab-pane fade show active"
                                      id="pills-attendance"
                                      role="tabpanel"
                                      aria-labelledby="pills-attendance-tab"
                                    >
                                      Attendance
                                    </div>
                                    <div
                                      className="tab-pane fade"
                                      id="pills-result"
                                      role="tabpanel"
                                      aria-labelledby="pills-result-tab"
                                    >
                                      Result
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* subject tab content starts from here */}
          <div
            className="tab-pane fade"
            id="pills-subject"
            role="tabpanel"
            aria-labelledby="pills-subject-tab"
          >
            <div className="subject-component">
              <div className="black-board-head subject-handle-head d-flex justify-content-between align-items-center">
                <div className="course-selection">
                  <select
                    name="branch"
                    id="branch"
                    onChange={handleBrachChange}
                  >
                    {courseData &&
                      courseData?.map((d) => (
                        <option value={d?.course_name}>{d?.course_name}</option>
                      ))}
                  </select>
                </div>
                <div className="semester-selection">
                  <select name="semester" id="sem" onChange={handleSemChange}>
                    {semDropdown &&
                      semDropdown.length &&
                      semDropdown.map((data) => (
                        <option value={data}>Sem {data}</option>
                      ))}
                  </select>
                </div>
                <div className="batch-selection">
                  <select name="" id="" onChange={handleBatchChange}>
                    <option value="a">Batch A</option>
                    <option value="b">Batch B</option>
                    <option value="c">Batch c</option>
                  </select>
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="self-batch-rename self-batch-delete "
                  data-toggle="modal"
                  data-target="#deleteBatch"
                >
                  Delete Self batch
                </div>
                <div
                  className="self-batch-rename "
                  data-toggle="modal"
                  data-target="#editBatch"
                >
                  Edit Self batch
                </div>
              </div>
              <div className="subject-cards-main d-flex flex-wrap">
                {subjectData &&
                  subjectData
                    .filter(
                      (data) =>
                        data?.branch === subjectBranch &&
                        data?.semester === subjectSem &&
                        data?.batch === subjectBatch
                    )
                    .map((s) => {
                      return (
                        <>
                          <div className="subject-card">
                            <div className="dropdown">
                              <div
                                className="dropdown-toggle student-three-dots"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <div className="three-dots-in-subjects">
                                  <div className="dot-subject"></div>
                                  <div className="dot-subject"></div>
                                  <div className="dot-subject"></div>
                                </div>
                              </div>

                              <ul className="dropdown-menu ">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#editSubject"
                                    onClick={() => {
                                      setSubjectName(s.subject_name);
                                      setSubjectid(s?._id);
                                    }}
                                  >
                                    Edit
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#deleteConfirmation"
                                    onClick={() => setSubjectid(s?._id)}
                                  >
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="subject-name">
                              {s.subject_name}{" "}
                            </div>

                            <div className="faculty-assign-part">
                              <select name="" id="">
                                <option value="">Ramesh Vaghela</option>
                                <option value="">Ramika Sen</option>
                              </select>
                            </div>
                          </div>
                        </>
                      );
                    })}
              </div>
              <div
                className="plus-icon"
                data-toggle="modal"
                data-target="#addSubject"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* all modal starts from here */}
      {/* this model edit the faculty  */}
      <div
        className="modal fade"
        id="openfacultymodification"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5
                className="modal-title custom-modal-title"
                id="exampleModalLabel"
              >
                Edit Faculty
              </h5>
              <button
                type="button"
                className="close model-close-custom"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body custom-modal-body">
              <form className="student-detail-edit-form" action="">
                <div className="form-heading">Basic details</div>
                <label htmlFor="">DOB</label>
                <input type="date" max="current" />
                <br />
                <label htmlFor="">Phone no </label>
                <input type="text" />
                <br />
                <label htmlFor="">Email </label>
                <input type="text" />
                <br />
                <label htmlFor="">Address </label>
                <input type="text" />
                <br />
                <div className="form-heading">Education details</div>
                <label htmlFor="">SSC</label>
                <input type="number" max="100" min="0" step="5" />
                <br />
                <label htmlFor=""> HSC </label>
                <input type="text" max="100" min="0" step="5" />
                <br />
                <label htmlFor="">Graduation </label>
                <input type="text" max="10" min="0" step="1" />
                <br />
                <input type="submit" className="course-submit" value="Edit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* this modal add course */}
      <div
        className="modal fade"
        id="addCourse"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5
                className="modal-title custom-modal-title"
                id="exampleModalLabel"
              >
                Create Course
              </h5>
              <button
                type="button"
                className="close model-close-custom"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body custom-modal-body">
              <form className="student-detail-edit-form" action="">
                <label htmlFor="">Course Name:</label>
                <input
                  type="text"
                  onChange={(e) => setCourseName(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="">Semester: </label>
                <select
                  name="sem"
                  id="sem"
                  onChange={(e) => setCourseSem(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                </select>
                <br />
                <label htmlFor="">First Batch Name: </label>
                <input
                  type="text"
                  onChange={(e) => setCourseBatch(e.target.value)}
                />
                <br />
                <input
                  type="submit"
                  className="course-submit"
                  data-dismiss="modal"
                  aria-label="Close"
                  value="Add Course"
                  onClick={(e) => courseSubmit(e)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* this modal edit course */}
      <div
        className="modal fade"
        id="editCourse"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5
                className="modal-title custom-modal-title"
                id="exampleModalLabel"
              >
                Edit Course
              </h5>
              <button
                type="button"
                className="close model-close-custom"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body custom-modal-body">
              <form className="student-detail-edit-form" action="">
                <label htmlFor="">Course Name:</label>
                <input
                  type="text"
                  value={courseEditName}
                  onChange={(e) => setcourseEditName(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="">Semester: </label>
                <select
                  name=""
                  id=""
                  value={courseEditSem}
                  onChange={(e) => setcourseEditSem(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                </select>
                <br />
                {/* <label htmlFor="">First Batch Name: </label>
                <input type="text" value="Batch A" />
                <br /> */}
                <input
                  type="submit"
                  className="course-submit"
                  data-dismiss="modal"
                  aria-label="Close"
                  value="Edit Course"
                  onClick={(e) => courseEdit(e)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* this modal add Batch to course */}
      <div
        className="modal fade"
        id="addBatch"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5
                className="modal-title custom-modal-title"
                id="exampleModalLabel"
              >
                Add Batch
              </h5>
              <button
                type="button"
                className="close model-close-custom"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body custom-modal-body">
              <form className="student-detail-edit-form" action="">
                <label htmlFor="">Batch Name:</label>
                <input type="text" />
                <br />
                <br />
                <input
                  type="submit"
                  className="course-submit"
                  value="Add Batch"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* this modal rename Batch  */}
      <div
        className="modal fade"
        id="editBatch"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5
                className="modal-title custom-modal-title"
                id="exampleModalLabel"
              >
                Edit Batch
              </h5>
              <button
                type="button"
                className="close model-close-custom"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body custom-modal-body">
              <form className="student-detail-edit-form" action="">
                <label htmlFor="">Batch Name:</label>
                <input type="text" value="Batch A" />
                <br />
                <br />
                <input
                  type="submit"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="course-submit"
                  value="Edit Batch"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* this modal add faculty */}
      <div
        className="modal fade"
        id="addFaculty"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5
                className="modal-title custom-modal-title"
                id="exampleModalLabel"
              >
                Add Faculty
              </h5>
              <button
                type="button"
                className="close model-close-custom"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body custom-modal-body">
              <form className="student-detail-edit-form" action="">
                <label htmlFor="">Faculty Name:</label>
                <input
                  type="text"
                  onChange={(e) => setFacultyName(e.target.value)}
                />
                <br />
                <label htmlFor="">Email Id: </label>
                <input
                  type="text"
                  onChange={(e) => setFacultyEmail(e.target.value)}
                />
                <br />
                <label htmlFor="">EnrollMent No: </label>
                <input
                  type="text"
                  onChange={(e) => setFacultyEnrollNo(e.target.value)}
                />
                <br />
                <label htmlFor="">Password: </label>
                <input
                  type="text"
                  onChange={(e) => setFacultyPassword(e.target.value)}
                />
                <br />
                <input
                  type="submit"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="course-submit"
                  value="Send Invitation"
                  onClick={(e) => facultyAddHandler(e)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* this modal add Subject */}
      <div
        className="modal fade"
        id="addSubject"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5
                className="modal-title custom-modal-title"
                id="exampleModalLabel"
              >
                Add Subject
              </h5>
              <button
                type="button"
                className="close model-close-custom"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body custom-modal-body">
              <form className="student-detail-edit-form" action="">
                <label htmlFor="">Subject Name:</label>
                <input
                  type="text"
                  onChange={(e) => setSubjectName(e.target.value)}
                />
                <br />

                <input
                  type="submit"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="course-submit"
                  value="Add Subject"
                  onClick={(e) => subjectSubmit(e)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* this modal Edit Subject */}
      <div
        className="modal fade"
        id="editSubject"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5
                className="modal-title custom-modal-title"
                id="exampleModalLabel"
              >
                Edit Subject
              </h5>
              <button
                type="button"
                className="close model-close-custom"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body custom-modal-body">
              <form className="student-detail-edit-form" action="">
                <label htmlFor="">Subject Name:</label>
                <input
                  type="text"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                />
                <br />

                <input
                  type="submit"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="course-submit"
                  value="Edit Subject"
                  onClick={(e) => editSubjectHandler(e)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* this modal for delete confirmation */}
      <div
        className="modal fade"
        id="deleteConfirmation"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h5
                className="modal-title custom-modal-title"
                id="exampleModalLabel"
              >
                Delete
              </h5>
              <button
                type="button"
                className="close model-close-custom"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body custom-modal-body">
              <div className="delete-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                </svg>
              </div>
              <div className="are-you-sure">
                Are you sure to delete this object?
              </div>
              <div className="confirmation-answer ">
                <div
                  className="cancel-object"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </div>
                <div
                  className="delete-object"
                  onClick={() => deleteSubject(subjectid)}
                >
                  {" "}
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
