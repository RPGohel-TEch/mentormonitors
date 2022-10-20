import React from 'react'
import profileImage from "../images/profile-dash.png"
import $ from "jquery";
const Setting = () => {
    function getTheme() {
        // console.log("get theme function is going to run")
        if ($("#changeTheme").prop("checked")) {
          $(".light-theme").addClass("dark-theme");
          $(".dark-theme").removeClass("light-theme");
        } else {
          $(".dark-theme").addClass("light-theme");
          $(".light-theme").removeClass("dark-theme");
        }
      }
  return (
    <div>
         <div className="setting-content d-flex">
                <div className="left-setting-content light-theme">
                  <div className="left-top-setting-area light-theme">
                    <div className="setting-profile-image">
                      <img src={profileImage} alt="" />
                    </div>
                    <div className="setting-profile-name ">Rahul P. Gohel</div>
                    <div className="edit-icon">
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
                        <li> <b>Date:</b> 17/04/2003 </li>
                        <li> <b>Phone no:</b> 9978457869 </li>
                        <li> <b>Email:</b> rahul123@gmail.com </li>
                        <li> <b>Address:</b> B/21 krishna park, nr gokul,nikol, ahmedabad.</li>
                      </ul>
                    </div>
                    <div className="setting-basic-detail-head light-theme">
                      Educational Joruney
                    </div>
                    <div className="users-basic-details educational-journey-details">
                      <ul>
                        <li> <b>SSC Marks:</b> 65% </li>
                        <li> <b>HSC Marks:</b> 60% </li>
                        <li> <b>Graduation</b> BSCIT </li>
                       
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
                     <div className="dark-mode-text">
                     Dark Mode
                     </div>
                      <div className="dark-mode-label">
                        <div className="change-theme-container ">
                          <input
                          className="d-none"
                            type="checkbox"
                            id="changeTheme"
                            onInput={getTheme}
                          />
                          <label htmlFor="changeTheme" className="custom-radio light-theme">
                            <div className="round"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Setting