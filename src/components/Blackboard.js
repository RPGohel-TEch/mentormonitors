import axios from "axios";
import React, { useEffect, useState } from "react";
// import profileImage from "../images/profile-dash.png";
import $ from "jquery";

const Blackboard = () => {
  const [courseData, setcourseData] = useState([]);
  const getcourseData = async () => {
    const { data } = await axios.get(`http://localhost:8000/course/`);
    setcourseData(data?.data?.users);
  };
  
  useEffect(() => {
    getcourseData();
  }, []);

  function selectedCourse(){
    console.log($('#selectcourse-blackboard').val())
  }
  return (
    <div className="Blackboard">
      
      <div className="black-board-head d-flex justify-content-between align-items-center">
        <div className="course-selection">
          <select name="" id="selectcourse-blackboard" onChange={selectedCourse}>
          {courseData && courseData?.map((d)=>(

            <option value={d?.course_name} >{d?.course_name}</option>
           
            ))}
          </select>
        </div>
        <div className="semester-selection">
          <select name="" id="">
            <option value="">sem 1</option>
            <option value="">sem 2</option>
            <option value="">sem 3</option>
            
          </select>
        </div>
        <div className="batch-selection">
          <select name="" id="">
            <option value="">Batch A</option>
            <option value="">Batch B</option>
            <option value="">Batch c</option>
          </select>
        </div>
      </div>
      
      <div className="black-board-content p-2">
        <div className="black-board-content-top-section d-flex align-items-center justify-content-between ">
          <div className="add-students">+ Add student</div>
          <div className="search-students d-flex">
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
              placeholder="search students"
            />
          </div>
        </div>
        <div className="black-board-content-main">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item student-card">
              <h2 className="accordion-header d-flex" id="headingOne">
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
                        <circle cx="10.0006" cy="6.6" r="6.4" fill="#005173" />
                        <path
                          d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                      <div className="student-name">Gohel Rahul Pareshbhai</div>
                      <div className="student-enrollment">200405021019</div>
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
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#openstudentmodification">
                        edit
                      </a>
                      <a className="dropdown-item" href="#">
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
                      <div className="basic-detail-head">Basic Details</div>
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
                        <b>Address:</b> A/41 ramrajya nagar, nr. ayodhya park,
                        nikol, Ahmedabad.
                      </div>
                    </div>
                    <div className="education-detail-blackboard mt-3">
                      <div className="basic-detail-head">Education Details</div>
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
                        <li className="nav-item" role="presentation">
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
                            Attendance
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
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
                            Result
                          </button>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
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
            {/* <div className="accordion-item student-card">
              <h2 className="accordion-header d-flex" id="headingOne">
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
                        <circle cx="10.0006" cy="6.6" r="6.4" fill="#005173" />
                        <path
                          d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                      <div className="student-name">Gohel Rahul Pareshbhai</div>
                      <div className="student-enrollment">200405021019</div>
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
                      <a className="dropdown-item" href="#">
                        edit
                      </a>
                      <a className="dropdown-item" href="#">
                        delete
                      </a>
                    </li>
                  </ul>
                </div>
              </h2>
              <div
                id="student1"
                className="accordion-collapse collapse  accordion-student-collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <div className="student-details-section">
                    <div className="basic-detail-blackboard">
                      <div className="basic-detail-head">Basic Details</div>
                      <div className="student-info-card">
                        <b>Date:</b> 17/04/2003
                      </div>
                      <div className="student-info-card">
                        <b>Phone no:</b> 9989784565
                      </div>
                      <div className="student-info-card">
                        <b>Email:</b> rahul123@gmail.com
                      </div>
                      <div className="student-info-card">
                        <b>Address:</b> A/41 ramrajya nagar, nr. ayodhya park,
                        nikol, Ahmedabad.
                      </div>
                    </div>
                    <div className="education-detail-blackboard mt-3">
                      <div className="basic-detail-head">Education Details</div>
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
                        <li className="nav-item" role="presentation">
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
                            Attendance
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
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
                            Result
                          </button>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
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
            <div className="accordion-item student-card">
              <h2 className="accordion-header d-flex" id="headingOne">
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
                        <circle cx="10.0006" cy="6.6" r="6.4" fill="#005173" />
                        <path
                          d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                      <div className="student-name">Gohel Rahul Pareshbhai</div>
                      <div className="student-enrollment">200405021019</div>
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
                      <a className="dropdown-item" href="#">
                        edit
                      </a>
                      <a className="dropdown-item" href="#">
                        delete
                      </a>
                    </li>
                  </ul>
                </div>
              </h2>
              <div
                id="student1"
                className="accordion-collapse collapse  accordion-student-collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <div className="student-details-section">
                    <div className="basic-detail-blackboard">
                      <div className="basic-detail-head">Basic Details</div>
                      <div className="student-info-card">
                        <b>Date:</b> 17/04/2003
                      </div>
                      <div className="student-info-card">
                        <b>Phone no:</b> 9989784565
                      </div>
                      <div className="student-info-card">
                        <b>Email:</b> rahul123@gmail.com
                      </div>
                      <div className="student-info-card">
                        <b>Address:</b> A/41 ramrajya nagar, nr. ayodhya park,
                        nikol, Ahmedabad.
                      </div>
                    </div>
                    <div className="education-detail-blackboard mt-3">
                      <div className="basic-detail-head">Education Details</div>
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
                        <li className="nav-item" role="presentation">
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
                            Attendance
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
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
                            Result
                          </button>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
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
            <div className="accordion-item student-card">
              <h2 className="accordion-header d-flex" id="headingOne">
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
                        <circle cx="10.0006" cy="6.6" r="6.4" fill="#005173" />
                        <path
                          d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                      <div className="student-name">Gohel Rahul Pareshbhai</div>
                      <div className="student-enrollment">200405021019</div>
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
                      <a className="dropdown-item" href="#">
                        edit
                      </a>
                      <a className="dropdown-item" href="#">
                        delete
                      </a>
                    </li>
                  </ul>
                </div>
              </h2>
              <div
                id="student1"
                className="accordion-collapse collapse  accordion-student-collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <div className="student-details-section">
                    <div className="basic-detail-blackboard">
                      <div className="basic-detail-head">Basic Details</div>
                      <div className="student-info-card">
                        <b>Date:</b> 17/04/2003
                      </div>
                      <div className="student-info-card">
                        <b>Phone no:</b> 9989784565
                      </div>
                      <div className="student-info-card">
                        <b>Email:</b> rahul123@gmail.com
                      </div>
                      <div className="student-info-card">
                        <b>Address:</b> A/41 ramrajya nagar, nr. ayodhya park,
                        nikol, Ahmedabad.
                      </div>
                    </div>
                    <div className="education-detail-blackboard mt-3">
                      <div className="basic-detail-head">Education Details</div>
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
                        <li className="nav-item" role="presentation">
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
                            Attendance
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
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
                            Result
                          </button>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
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
            <div className="accordion-item student-card">
              <h2 className="accordion-header d-flex" id="headingOne">
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
                        <circle cx="10.0006" cy="6.6" r="6.4" fill="#005173" />
                        <path
                          d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                      <div className="student-name">Gohel Rahul Pareshbhai</div>
                      <div className="student-enrollment">200405021019</div>
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
                      <a className="dropdown-item" href="#">
                        edit
                      </a>
                      <a className="dropdown-item" href="#">
                        delete
                      </a>
                    </li>
                  </ul>
                </div>
              </h2>
              <div
                id="student1"
                className="accordion-collapse collapse  accordion-student-collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <div className="student-details-section">
                    <div className="basic-detail-blackboard">
                      <div className="basic-detail-head">Basic Details</div>
                      <div className="student-info-card">
                        <b>Date:</b> 17/04/2003
                      </div>
                      <div className="student-info-card">
                        <b>Phone no:</b> 9989784565
                      </div>
                      <div className="student-info-card">
                        <b>Email:</b> rahul123@gmail.com
                      </div>
                      <div className="student-info-card">
                        <b>Address:</b> A/41 ramrajya nagar, nr. ayodhya park,
                        nikol, Ahmedabad.
                      </div>
                    </div>
                    <div className="education-detail-blackboard mt-3">
                      <div className="basic-detail-head">Education Details</div>
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
                        <li className="nav-item" role="presentation">
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
                            Attendance
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
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
                            Result
                          </button>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
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
            <div className="accordion-item student-card">
              <h2 className="accordion-header d-flex" id="headingOne">
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
                        <circle cx="10.0006" cy="6.6" r="6.4" fill="#005173" />
                        <path
                          d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                      <div className="student-name">Gohel Rahul Pareshbhai</div>
                      <div className="student-enrollment">200405021019</div>
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
                      <a className="dropdown-item" href="#">
                        edit
                      </a>
                      <a className="dropdown-item" href="#">
                        delete
                      </a>
                    </li>
                  </ul>
                </div>
              </h2>
              <div
                id="student1"
                className="accordion-collapse collapse  accordion-student-collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <div className="student-details-section">
                    <div className="basic-detail-blackboard">
                      <div className="basic-detail-head">Basic Details</div>
                      <div className="student-info-card">
                        <b>Date:</b> 17/04/2003
                      </div>
                      <div className="student-info-card">
                        <b>Phone no:</b> 9989784565
                      </div>
                      <div className="student-info-card">
                        <b>Email:</b> rahul123@gmail.com
                      </div>
                      <div className="student-info-card">
                        <b>Address:</b> A/41 ramrajya nagar, nr. ayodhya park,
                        nikol, Ahmedabad.
                      </div>
                    </div>
                    <div className="education-detail-blackboard mt-3">
                      <div className="basic-detail-head">Education Details</div>
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
                        <li className="nav-item" role="presentation">
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
                            Attendance
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
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
                            Result
                          </button>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
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
            <div className="accordion-item student-card">
              <h2 className="accordion-header d-flex" id="headingOne">
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
                        <circle cx="10.0006" cy="6.6" r="6.4" fill="#005173" />
                        <path
                          d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                      <div className="student-name">Gohel Rahul Pareshbhai</div>
                      <div className="student-enrollment">200405021019</div>
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
                      <a className="dropdown-item" href="#">
                        edit
                      </a>
                      <a className="dropdown-item" href="#">
                        delete
                      </a>
                    </li>
                  </ul>
                </div>
              </h2>
              <div
                id="student1"
                className="accordion-collapse collapse  accordion-student-collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <div className="student-details-section">
                    <div className="basic-detail-blackboard">
                      <div className="basic-detail-head">Basic Details</div>
                      <div className="student-info-card">
                        <b>Date:</b> 17/04/2003
                      </div>
                      <div className="student-info-card">
                        <b>Phone no:</b> 9989784565
                      </div>
                      <div className="student-info-card">
                        <b>Email:</b> rahul123@gmail.com
                      </div>
                      <div className="student-info-card">
                        <b>Address:</b> A/41 ramrajya nagar, nr. ayodhya park,
                        nikol, Ahmedabad.
                      </div>
                    </div>
                    <div className="education-detail-blackboard mt-3">
                      <div className="basic-detail-head">Education Details</div>
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
                        <li className="nav-item" role="presentation">
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
                            Attendance
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
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
                            Result
                          </button>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
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
            <div className="accordion-item student-card">
              <h2 className="accordion-header d-flex" id="headingOne">
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
                        <circle cx="10.0006" cy="6.6" r="6.4" fill="#005173" />
                        <path
                          d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                      <div className="student-name">Gohel Rahul Pareshbhai</div>
                      <div className="student-enrollment">200405021019</div>
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
                      <a className="dropdown-item" href="#">
                        edit
                      </a>
                      <a className="dropdown-item" href="#">
                        delete
                      </a>
                    </li>
                  </ul>
                </div>
              </h2>
              <div
                id="student1"
                className="accordion-collapse collapse  accordion-student-collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <div className="student-details-section">
                    <div className="basic-detail-blackboard">
                      <div className="basic-detail-head">Basic Details</div>
                      <div className="student-info-card">
                        <b>Date:</b> 17/04/2003
                      </div>
                      <div className="student-info-card">
                        <b>Phone no:</b> 9989784565
                      </div>
                      <div className="student-info-card">
                        <b>Email:</b> rahul123@gmail.com
                      </div>
                      <div className="student-info-card">
                        <b>Address:</b> A/41 ramrajya nagar, nr. ayodhya park,
                        nikol, Ahmedabad.
                      </div>
                    </div>
                    <div className="education-detail-blackboard mt-3">
                      <div className="basic-detail-head">Education Details</div>
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
                        <li className="nav-item" role="presentation">
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
                            Attendance
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
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
                            Result
                          </button>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
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
            <div className="accordion-item student-card">
              <h2 className="accordion-header d-flex" id="headingOne">
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
                        <circle cx="10.0006" cy="6.6" r="6.4" fill="#005173" />
                        <path
                          d="M0.400391 20.6C0.400391 17.2863 3.08668 14.6 6.40039 14.6H12.8004C16.1141 14.6 18.8004 17.2863 18.8004 20.6V22.2C18.8004 23.3046 17.905 24.2 16.8004 24.2H2.40039C1.29582 24.2 0.400391 23.3046 0.400391 22.2V20.6Z"
                          fill="#005173"
                        />
                      </svg>
                    </div>
                    <div className="name-and-enrollment d-flex align-items-center justify-content-between">
                      <div className="student-name">Gohel Rahul Pareshbhai</div>
                      <div className="student-enrollment">200405021019</div>
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
                      <a className="dropdown-item" href="#">
                        edit
                      </a>
                      <a className="dropdown-item" href="#">
                        delete
                      </a>
                    </li>
                  </ul>
                </div>
              </h2>
              <div
                id="student1"
                className="accordion-collapse collapse  accordion-student-collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex">
                  <div className="student-details-section">
                    <div className="basic-detail-blackboard">
                      <div className="basic-detail-head">Basic Details</div>
                      <div className="student-info-card">
                        <b>Date:</b> 17/04/2003
                      </div>
                      <div className="student-info-card">
                        <b>Phone no:</b> 9989784565
                      </div>
                      <div className="student-info-card">
                        <b>Email:</b> rahul123@gmail.com
                      </div>
                      <div className="student-info-card">
                        <b>Address:</b> A/41 ramrajya nagar, nr. ayodhya park,
                        nikol, Ahmedabad.
                      </div>
                    </div>
                    <div className="education-detail-blackboard mt-3">
                      <div className="basic-detail-head">Education Details</div>
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
                        <li className="nav-item" role="presentation">
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
                            Attendance
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
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
                            Result
                          </button>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
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
            </div> */}
           
           


<div className="modal fade" id="openstudentmodification" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content custom-modal-content">
      <div className="modal-header custom-modal-header">
        <h5 className="modal-title custom-modal-title" id="exampleModalLabel">Edit Student</h5>
        <button type="button" className="close model-close-custom" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body custom-modal-body">
        <form className="student-detail-edit-form" action="">
          <div className="form-heading">
            Basic details 
          </div>
          <label htmlFor="">DOB</label>
          <input type="date" max="current"/>
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
          <div className="form-heading">
            Education details 
          </div>
          <label htmlFor="">SSC</label>
          <input type="number" max="100" min="0"step="5" />
          <br />
          <label htmlFor=""> HSC </label>
          <input type="text" max="100" min="0"step="5" />
          <br />
          <label htmlFor="">Graduation </label>
          <input type="text" max="10" min="0"step="1" />
          <br />
          <input type="submit" className="course-submit" value="Edit" />

        </form>
      </div>
      
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blackboard;
