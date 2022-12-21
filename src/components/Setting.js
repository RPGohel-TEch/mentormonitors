import React, { useEffect } from "react";
import profileImage from "../images/profile-dash.png";
import $ from "jquery";

const Setting = () => {
  const getuser = localStorage.getItem("user");
  const user = JSON.parse(getuser);
  
  

  useEffect(() => {
    const userTheme = localStorage.getItem("Theme");
   
    let changeThemeJs = document.getElementById('changeTheme')
  
    console.log(userTheme)
    if (userTheme === "dark-theme") {
      // console.log(changeThemeJs)
      changeThemeJs.checked =true;
      
      
    }
    
   
    
    getTheme()
      
  }, [])
 

  function getTheme() {
    if ($("#changeTheme").prop("checked")) {
      $(".light-theme").addClass("dark-theme");
      $(".dark-theme").removeClass("light-theme");
      localStorage.setItem("Theme", "dark-theme");
      

    } else {
      $(".dark-theme").addClass("light-theme");
      $(".light-theme").removeClass("dark-theme");
      localStorage.setItem("Theme", "light-theme");
 

    }
  }
  
  return (
    <div>
      <div className="setting-content d-flex main-setting-content">
        <div className="left-setting-content light-theme">
          <div className="left-top-setting-area light-theme">
            <div className="setting-profile-image">
              <img src={profileImage} alt="" />
            </div>
            <div className="setting-profile-name ">{user?.name || " Unknown "}</div>
            <div className="edit-icon" data-toggle="modal"
                data-target="#editProfile">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.474 3.40783L15.592 5.52483M14.836 1.54283L9.109 7.26983C8.81309 7.56533 8.61128 7.94181 8.529 8.35183L8 10.9998L10.648 10.4698C11.058 10.3878 11.434 10.1868 11.73 9.89083L17.457 4.16383C17.6291 3.99173 17.7656 3.78742 17.8588 3.56256C17.9519 3.33771 17.9998 3.09671 17.9998 2.85333C17.9998 2.60994 17.9519 2.36895 17.8588 2.14409C17.7656 1.91923 17.6291 1.71492 17.457 1.54283C17.2849 1.37073 17.0806 1.23421 16.8557 1.14108C16.6309 1.04794 16.3899 1 16.1465 1C15.9031 1 15.6621 1.04794 15.4373 1.14108C15.2124 1.23421 15.0081 1.37073 14.836 1.54283V1.54283Z"
                  stroke="#005173"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 12.9998V15.9998C16 16.5302 15.7893 17.039 15.4142 17.414C15.0391 17.7891 14.5304 17.9998 14 17.9998H3C2.46957 17.9998 1.96086 17.7891 1.58579 17.414C1.21071 17.039 1 16.5302 1 15.9998V4.99982C1 4.46938 1.21071 3.96068 1.58579 3.5856C1.96086 3.21053 2.46957 2.99982 3 2.99982H6"
                  stroke="#005173"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="left-bottom-setting-area">
            <div className="setting-basic-detail-head light-theme">
              Basic Detail
            </div>
            <div className="users-basic-details">
              <ul>
                <li>
                  {" "}
                  <b>Date:</b>{user?.birthdate || " - " }{" "}
                </li>
                <li>
                  {" "}
                  <b>Phone no:</b> {user?.mobile || " - "}{" "}
                </li>
                <li>
                  {" "}
                  <b>Email:</b> {user?.email || " - " }{" "}
                </li>
                <li>
                  {" "}
                  <b>Address:</b> {user?.address || " - "}
                </li>
              </ul>
            </div>
            <div className="setting-basic-detail-head light-theme">
              Educational Joruney
            </div>
            <div className="users-basic-details educational-journey-details">
              <ul>
                <li>
                  {" "}
                  <b>SSC Marks:</b> {user?.ssc_marks || " - "}{" "}
                </li>
                <li>
                  {" "}
                  <b>HSC Marks:</b> {user?.hsc_marks}{" - "}
                </li>
                <li>
                  {" "}
                  <b>Graduation</b> {user?.graduation || " - "}{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-setting-content">
          <div className="sun-moon-illustration light-theme"></div>
          <div className="right-head-setting light-theme">
            Modify your software here - setting
          </div>
          <div className="right-setting-contents">
            <div className="dark-mode-setting light-theme d-flex justify-content-between align-items-center">
              <div className="dark-mode-text">Dark Mode</div>
              <div className="dark-mode-label">
                <div className="change-theme-container ">
                  <input
                    className="d-none"
                    type="checkbox"
                    id="changeTheme"
                    onInput={getTheme}
                    
                  />
                  <label
                    htmlFor="changeTheme"
                    className="custom-radio light-theme"
                  >
                    <div className="round"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* all modals starts from here  */}
       {/* this modal edit profile */}
       <div
        className="modal fade"
        id="editProfile"
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
                Edit Profile
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
                <label htmlFor="profilePicture">Profile Picture :</label>
                <input type="file" name="" id="profilePicture" />
                <br />
                <br />

                <label htmlFor="dob-profile">DOB : </label>
                <input type="date" id="dob-profile" />
                <br />
                <br />
                <label htmlFor="phone-no">Phone no :</label>
                <input type="text" id="phone-no" />
                <br />
                <br />
                <label htmlFor="email-profile">Email :</label>
                <input type="text" id="email-profile" />
                <br />
                <br />
                <label htmlFor="addressprofile">Address :</label>
                <textarea name="" id="addressprofile"></textarea>
                <br />
                <br />
                <label htmlFor="sscmarks">SSC Marks :</label>
                <input type="text" id="sscmarks" />
                <br />
                <br />
                <label htmlFor="hscmarks">HSC Marks :</label>
                <input type="text" id="hscmarks" />
                <br />
                <br />
                <label htmlFor="graduation">Graduation :</label>
                <input type="text" id="graduation" />
                <br />
                <br />

                <input
                  type="submit"
                  className="course-submit"
                  data-dismiss="modal"
                  aria-label="Close"
                  value="Edit Profile"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Setting;
