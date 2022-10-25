import React from "react";

const Database = () => {
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
            </div>
          </div>
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
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-subject"
            role="tabpanel"
            aria-labelledby="pills-subject-tab"
          >
            <div className="subject-component">
              <div className="black-board-head subject-handle-head d-flex justify-content-between align-items-center">
                <div className="course-selection">
                  <select name="" id="">
                    <option value="">IMSCIT</option>
                    <option value="">BCA</option>
                    <option value="">B.TECH</option>
                  </select>
                </div>
                <div className="semester-selection">
                  <select name="" id="">
                    <option value="">Sem 1st</option>
                    <option value="">Sem 2nd</option>
                    <option value="">Sem 3rd</option>
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
              <div className="subject-cards-main">
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
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#openstudentmodification">
                        Rename
                      </a>
                      <a className="dropdown-item" href="#">
                        delete
                      </a>
                      
                    </li>
                  </ul>
                </div>
                    <div className="subject-name">
                        Digital fundamentals
                    </div>
                    <div className="faculty-assign-part">
                        
                      <select name="" id="">
                        <option value="">Ramesh Vaghela</option>
                        <option value="">Ramika Sen</option>
                      </select>
                    </div>
                </div>
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
                <input type="text" />
                <br />
                <br />
                <label htmlFor="">Semester: </label>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                </select>
                <br />
                <label htmlFor="">First Batch Name: </label>
                <input type="text" />
                <br />
                <input type="submit" className="course-submit" value="Go" />
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
                <input type="text" />
                <br />
                <label htmlFor="">Email Id: </label>
                <input type="text" />
                <br />
                <label htmlFor="">Contact No:</label>
                <input type="text" />
                <br />

                <input
                  type="submit"
                  className="course-submit"
                  value="Send Invitation"
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
                <input type="text" />
                <br />
                

                <input
                  type="submit"
                  className="course-submit"
                  value="Add Subject"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
