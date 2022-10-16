import React from "react";
import profileImage from "../images/profile-dash.png";
import $ from "jquery";
const Dashboard = () => {
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
    <div className="dashboard-body light-theme">
      <div className="dashboard-header d-flex justify-content-between">
        <a href="" className="logo-dashboard light-theme">
          Mentor Monitor
        </a>
        <div className="profile-dropdown">
          <div className="dropdown">
            <a
              className="dropdown-toggle profile-image light-theme"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={profileImage} alt="" />
            </a>

            <ul className="dropdown-menu profile-dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dashboard-content mt-4 d-flex">
        <div className="dashboard-left-navigation light-theme">
          <div
            className="nav flex-column nav-pills "
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {/* analysis button  */}
            <button
              className="nav-link active tab-button light-theme"
              id="v-pills-analysis-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-analysis"
              type="button"
              role="tab"
              aria-controls="v-pills-analysis"
              aria-selected="true"
            >
              <div className="navigation-btn">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_58_14)">
                    <path
                      d="M21.9375 10.9688C21.9375 13.3893 21.1518 15.6252 19.8281 17.4393L26.5043 24.1207C27.1635 24.7799 27.1635 25.8504 26.5043 26.5096C25.8451 27.1688 24.7746 27.1688 24.1154 26.5096L17.4393 19.8281C15.6252 21.157 13.3893 21.9375 10.9687 21.9375C4.90957 21.9375 0 17.0279 0 10.9688C0 4.90957 4.90957 0 10.9687 0C17.0279 0 21.9375 4.90957 21.9375 10.9688ZM5.48437 11.3906V14.7656C5.48437 15.467 6.04863 16.0312 6.75 16.0312C7.45137 16.0312 8.01562 15.467 8.01562 14.7656V11.3906C8.01562 10.6893 7.45137 10.125 6.75 10.125C6.04863 10.125 5.48437 10.6893 5.48437 11.3906ZM9.70312 6.32812V14.7656C9.70312 15.467 10.2674 16.0312 10.9687 16.0312C11.6701 16.0312 12.2344 15.467 12.2344 14.7656V6.32812C12.2344 5.62676 11.6701 5.0625 10.9687 5.0625C10.2674 5.0625 9.70312 5.62676 9.70312 6.32812ZM13.9219 9.70312V14.7656C13.9219 15.467 14.4861 16.0312 15.1875 16.0312C15.8889 16.0312 16.4531 15.467 16.4531 14.7656V9.70312C16.4531 9.00176 15.8889 8.4375 15.1875 8.4375C14.4861 8.4375 13.9219 9.00176 13.9219 9.70312Z"
                      fill="#005173"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_58_14">
                      <rect width="27" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
            {/* db button */}
            <button
              className="nav-link  tab-button light-theme"
              id="v-pills-db-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-db"
              type="button"
              role="tab"
              aria-controls="v-pills-db"
              aria-selected="true"
            >
              <div className="navigation-btn">
                <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3.75V6C19 8.07187 14.7462 9.75 9.5 9.75C4.25379 9.75 0 8.07187 0 6V3.75C0 1.67812 4.25379 0 9.5 0C14.7462 0 19 1.67812 19 3.75ZM16.6759 10.0641C17.558 9.71719 18.3681 9.27188 19 8.72344V13.5C19 15.5719 14.7462 17.25 9.5 17.25C4.25379 17.25 0 15.5719 0 13.5V8.72344C0.63192 9.27656 1.44196 9.71719 2.32411 10.0641C4.22835 10.8141 6.76451 11.25 9.5 11.25C12.2355 11.25 14.7717 10.8141 16.6759 10.0641ZM0 16.2234C0.63192 16.7766 1.44196 17.2172 2.32411 17.5641C4.22835 18.3141 6.76451 18.75 9.5 18.75C12.2355 18.75 14.7717 18.3141 16.6759 17.5641C17.558 17.2172 18.3681 16.7719 19 16.2234V20.25C19 22.3219 14.7462 24 9.5 24C4.25379 24 0 22.3219 0 20.25V16.2234Z"
                    fill="#005173"
                  />
                </svg>
              </div>
            </button>
            {/* blackboard button */}
            <button
              className="nav-link  tab-button light-theme"
              id="v-pills-blackboard-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-blackboard"
              type="button"
              role="tab"
              aria-controls="v-pills-blackboard"
              aria-selected="true"
            >
              <div className="navigation-btn">
                <svg
                  width="31"
                  height="26"
                  viewBox="0 0 31 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75 3.17045C7.75 1.42175 9.14016 0 10.85 0H27.9C29.6098 0 31 1.42175 31 3.17045V17.4375C31 19.1862 29.6098 20.608 27.9 20.608H16.3137C15.7422 19.3447 14.8655 18.2549 13.7756 17.4375H18.6V15.8523C18.6 14.9754 19.2927 14.267 20.15 14.267H23.25C24.1073 14.267 24.8 14.9754 24.8 15.8523V17.4375H27.9V3.17045H10.85V5.60279C9.93937 5.06282 8.87859 4.75568 7.75 4.75568V3.17045ZM7.75 15.8523C5.18281 15.8523 3.1 13.7221 3.1 11.0966C3.1 8.47106 5.18281 6.34091 7.75 6.34091C10.3172 6.34091 12.4 8.47106 12.4 11.0966C12.4 13.7221 10.3172 15.8523 7.75 15.8523ZM6.45672 17.4375H9.03844C12.6083 17.4375 15.5 20.3949 15.5 24.041C15.5 24.7692 14.9236 25.3636 14.2067 25.3636H1.29328C0.576406 25.3636 0 24.7741 0 24.041C0 20.3949 2.89172 17.4375 6.45672 17.4375Z"
                    fill="#005173"
                  />
                </svg>
              </div>
            </button>
            {/* material button */}
            <button
              className="nav-link  tab-button light-theme"
              id="v-pills-material-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-material"
              type="button"
              role="tab"
              aria-controls="v-pills-material"
              aria-selected="true"
            >
              <div className="navigation-btn">
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 0V20H13V0H8.66667ZM13 2.66667L18.7778 20L23.1111 18.6667L17.3333 1.33333L13 2.66667ZM2.88889 2.66667V20H7.22222V2.66667H2.88889ZM0 21.3333V24H26V21.3333H0Z"
                    fill="#005173"
                  />
                </svg>
              </div>
            </button>
            {/* attendance button */}
            <button
              className="nav-link  tab-button light-theme"
              id="v-pills-attendance-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-attendance"
              type="button"
              role="tab"
              aria-controls="v-pills-attendance"
              aria-selected="true"
            >
              <div className="navigation-btn">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.833 6.94442C20.833 6.39188 21.0525 5.86198 21.4432 5.47128C21.8339 5.08058 22.3638 4.86108 22.9163 4.86108C23.4689 4.86108 23.9988 5.08058 24.3895 5.47128C24.7802 5.86198 24.9997 6.39188 24.9997 6.94442V21.0437L22.9163 24.1687L20.833 21.0437V6.94442ZM22.9163 6.24997C22.7322 6.24997 22.5555 6.32314 22.4253 6.45337C22.2951 6.5836 22.2219 6.76024 22.2219 6.94442V20.6229L22.9163 21.6646L23.6108 20.6229V6.94442C23.6108 6.76024 23.5376 6.5836 23.4074 6.45337C23.2772 6.32314 23.1005 6.24997 22.9163 6.24997Z"
                    fill="#005173"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.3056 9.72222H21.5278V8.33333H24.3056V9.72222ZM2.77778 1.38889C2.40942 1.38889 2.05615 1.53522 1.79569 1.79569C1.53522 2.05615 1.38889 2.40942 1.38889 2.77778V22.2222C1.38889 22.5906 1.53522 22.9438 1.79569 23.2043C2.05615 23.4648 2.40942 23.6111 2.77778 23.6111H16.6667C17.035 23.6111 17.3883 23.4648 17.6488 23.2043C17.9092 22.9438 18.0556 22.5906 18.0556 22.2222V2.77778C18.0556 2.40942 17.9092 2.05615 17.6488 1.79569C17.3883 1.53522 17.035 1.38889 16.6667 1.38889H2.77778ZM0 2.77778C0 2.04107 0.292658 1.33453 0.813592 0.813592C1.33453 0.292658 2.04107 0 2.77778 0H16.6667C17.4034 0 18.1099 0.292658 18.6309 0.813592C19.1518 1.33453 19.4444 2.04107 19.4444 2.77778V22.2222C19.4444 22.9589 19.1518 23.6655 18.6309 24.1864C18.1099 24.7073 17.4034 25 16.6667 25H2.77778C2.04107 25 1.33453 24.7073 0.813592 24.1864C0.292658 23.6655 0 22.9589 0 22.2222V2.77778Z"
                    fill="#005173"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.72251 6.24999C9.72251 6.06581 9.79567 5.88917 9.92591 5.75894C10.0561 5.62871 10.2328 5.55554 10.417 5.55554H15.9725C16.1567 5.55554 16.3333 5.62871 16.4636 5.75894C16.5938 5.88917 16.667 6.06581 16.667 6.24999C16.667 6.43416 16.5938 6.6108 16.4636 6.74103C16.3333 6.87127 16.1567 6.94443 15.9725 6.94443H10.417C10.2328 6.94443 10.0561 6.87127 9.92591 6.74103C9.79567 6.6108 9.72251 6.43416 9.72251 6.24999ZM9.72251 9.02776C9.72251 8.84359 9.79567 8.66695 9.92591 8.53672C10.0561 8.40648 10.2328 8.33332 10.417 8.33332H15.9725C16.1567 8.33332 16.3333 8.40648 16.4636 8.53672C16.5938 8.66695 16.667 8.84359 16.667 9.02776C16.667 9.21194 16.5938 9.38858 16.4636 9.51881C16.3333 9.64904 16.1567 9.72221 15.9725 9.72221H10.417C10.2328 9.72221 10.0561 9.64904 9.92591 9.51881C9.79567 9.38858 9.72251 9.21194 9.72251 9.02776ZM9.72251 15.2778C9.72251 15.0936 9.79567 14.917 9.92591 14.7867C10.0561 14.6565 10.2328 14.5833 10.417 14.5833H15.9725C16.1567 14.5833 16.3333 14.6565 16.4636 14.7867C16.5938 14.917 16.667 15.0936 16.667 15.2778C16.667 15.4619 16.5938 15.6386 16.4636 15.7688C16.3333 15.899 16.1567 15.9722 15.9725 15.9722H10.417C10.2328 15.9722 10.0561 15.899 9.92591 15.7688C9.79567 15.6386 9.72251 15.4619 9.72251 15.2778ZM9.72251 18.0555C9.72251 17.8714 9.79567 17.6947 9.92591 17.5645C10.0561 17.4343 10.2328 17.3611 10.417 17.3611H15.9725C16.1567 17.3611 16.3333 17.4343 16.4636 17.5645C16.5938 17.6947 16.667 17.8714 16.667 18.0555C16.667 18.2397 16.5938 18.4164 16.4636 18.5466C16.3333 18.6768 16.1567 18.75 15.9725 18.75H10.417C10.2328 18.75 10.0561 18.6768 9.92591 18.5466C9.79567 18.4164 9.72251 18.2397 9.72251 18.0555ZM4.16695 15.2778V17.3611H6.25029V15.2778H4.16695ZM3.47251 13.8889H6.94473C7.12891 13.8889 7.30554 13.962 7.43578 14.0923C7.56601 14.2225 7.63918 14.3991 7.63918 14.5833V18.0555C7.63918 18.2397 7.56601 18.4164 7.43578 18.5466C7.30554 18.6768 7.12891 18.75 6.94473 18.75H3.47251C3.28833 18.75 3.1117 18.6768 2.98146 18.5466C2.85123 18.4164 2.77807 18.2397 2.77807 18.0555V14.5833C2.77807 14.3991 2.85123 14.2225 2.98146 14.0923C3.1117 13.962 3.28833 13.8889 3.47251 13.8889ZM8.13015 5.75901C8.26034 5.88924 8.33347 6.06584 8.33347 6.24999C8.33347 6.43413 8.26034 6.61073 8.13015 6.74096L4.8614 10.0097L2.98154 8.12985C2.91521 8.06579 2.86231 7.98916 2.82591 7.90443C2.78952 7.81971 2.77036 7.72858 2.76956 7.63638C2.76876 7.54417 2.78633 7.45272 2.82124 7.36738C2.85616 7.28204 2.90773 7.2045 2.97293 7.1393C3.03813 7.07409 3.11567 7.02253 3.20101 6.98761C3.28636 6.95269 3.3778 6.93512 3.47001 6.93592C3.56222 6.93672 3.65334 6.95588 3.73807 6.99228C3.82279 7.02867 3.89942 7.08158 3.96348 7.1479L4.8614 8.04582L7.1482 5.75901C7.27843 5.62883 7.45503 5.55569 7.63918 5.55569C7.82332 5.55569 7.99992 5.62883 8.13015 5.75901Z"
                    fill="#005173"
                  />
                </svg>
              </div>
            </button>
            {/* setting button */}
            <button
              className="nav-link  tab-button light-theme"
              id="v-pills-setting-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-setting"
              type="button"
              role="tab"
              aria-controls="v-pills-setting"
              aria-selected="true"
            >
              <div className="navigation-btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9335 7.8109C24.0926 8.21879 23.9583 8.67357 23.6152 8.96425L21.4617 10.8115C21.5164 11.2006 21.5463 11.5991 21.5463 12.0023C21.5463 12.4055 21.5164 12.8041 21.4617 13.1932L23.6152 15.0404C23.9583 15.3311 24.0926 15.7859 23.9335 16.1938C23.7146 16.7517 23.4511 17.2862 23.1477 17.8019L22.9139 18.1817C22.5857 18.6974 22.2177 19.185 21.8148 19.6445C21.5214 19.982 21.034 20.0945 20.5964 19.9633L17.8262 19.1334C17.1598 19.6163 16.4238 20.0195 15.638 20.3243L15.0163 23.0014C14.9169 23.428 14.5687 23.7656 14.1112 23.8359C13.4249 23.9437 12.7186 24 11.9975 24C11.2764 24 10.5702 23.9437 9.88385 23.8359C9.42631 23.7656 9.07818 23.428 8.97871 23.0014L8.35705 20.3243C7.57126 20.0195 6.83521 19.6163 6.16879 19.1334L3.40363 19.968C2.96597 20.0992 2.47859 19.982 2.18516 19.6492C1.78232 19.1897 1.4143 18.7021 1.08606 18.1864L0.852315 17.8066C0.548942 17.2909 0.285357 16.7564 0.0665309 16.1985C-0.0926152 15.7906 0.0416643 15.3358 0.384823 15.0451L2.53827 13.1979C2.48356 12.8041 2.45372 12.4055 2.45372 12.0023C2.45372 11.5991 2.48356 11.2006 2.53827 10.8115L0.384823 8.96425C0.0416643 8.67357 -0.0926152 8.21879 0.0665309 7.8109C0.285357 7.25298 0.548942 6.7185 0.852315 6.20277L1.08606 5.82301C1.4143 5.30729 1.78232 4.81969 2.18516 4.36023C2.47859 4.02266 2.96597 3.91014 3.40363 4.04141L6.17376 4.87126C6.84019 4.38836 7.57624 3.98515 8.36202 3.68041L8.98368 1.00332C9.08315 0.576675 9.43128 0.239109 9.88883 0.168783C10.5751 0.056261 11.2814 0 12.0025 0C12.7236 0 13.4298 0.056261 14.1161 0.164095C14.5737 0.234421 14.9218 0.571987 15.0213 0.998632L15.643 3.67572C16.4287 3.98046 17.1648 4.38367 17.8312 4.86658L20.6013 4.03673C21.039 3.90545 21.5264 4.02266 21.8198 4.35554C22.2227 4.815 22.5907 5.3026 22.9189 5.81832L23.1527 6.19809C23.456 6.71381 23.7196 7.24829 23.9384 7.80621L23.9335 7.8109ZM12.0025 15.7531C14.2007 15.7531 15.9811 14.0746 15.9811 12.0023C15.9811 9.93006 14.2007 8.25161 12.0025 8.25161C9.80428 8.25161 8.02384 9.93006 8.02384 12.0023C8.02384 14.0746 9.80428 15.7531 12.0025 15.7531Z"
                    fill="#005173"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="dashboard-nav-content light-theme">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-analysis"
              role="tabpanel"
              aria-labelledby="v-pills-analysis-tab"
              tabIndex={0}
            >
              Analysis
            </div>
            <div
              className="tab-pane fade "
              id="v-pills-db"
              role="tabpanel"
              aria-labelledby="v-pills-db-tab"
              tabIndex={0}
            >
              database
            </div>
            <div
              className="tab-pane fade "
              id="v-pills-blackboard"
              role="tabpanel"
              aria-labelledby="v-pills-blackboard-tab"
              tabIndex={0}
            >
              blackboard
            </div>
            <div
              className="tab-pane fade "
              id="v-pills-material"
              role="tabpanel"
              aria-labelledby="v-pills-material-tab"
              tabIndex={0}
            >
              Material
            </div>
            <div
              className="tab-pane fade "
              id="v-pills-attendance"
              role="tabpanel"
              aria-labelledby="v-pills-attendance-tab"
              tabIndex={0}
            >
              Attendance
            </div>
            <div
              className="tab-pane fade "
              id="v-pills-setting"
              role="tabpanel"
              aria-labelledby="v-pills-setting-tab"
              tabIndex={0}
            >
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
                    Modify your software here
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
