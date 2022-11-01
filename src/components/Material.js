import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
const Material = () => {
  const [courseData, setcourseData] = useState([]);
  const getcourseData = async () => {
    const { data } = await axios.get(`http://localhost:8000/course/`);
    setcourseData(data?.data?.users);
  };

  useEffect(() => {
    getcourseData();
  }, []);
  return (
    <div className='Material'>
        <div className="material-head">
        <ul className="nav nav-pills mb-3 material-ul" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="pills-material-tab" data-bs-toggle="pill" data-bs-target="#pills-material" type="button" role="tab" aria-controls="pills-material" aria-selected="true">Material</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-assignments-tab" data-bs-toggle="pill" data-bs-target="#pills-assignments" type="button" role="tab" aria-controls="pills-assignments" aria-selected="false">Assignments</a>
          </li>
          
        </ul>

        </div>
        <div className="material-component-content">
            <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-material" role="tabpanel" aria-labelledby="pills-material-tab">
              <div className="material-content-tab">
                <div className="black-board-head subject-handle-head d-flex justify-content-between align-items-center">
                  <div className="course-selection">
                    <select name="" id="">
                    {courseData &&
                      courseData?.map((d) => (
                        <option value={d?.course_name}>{d?.course_name}</option>
                      ))}
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
                <div className="material-subjects-cards-content d-flex ">
                    <div className="material-subjects">
                   
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <div className="nav-link active" id="pills-sub1-tab" data-bs-toggle="pill" data-bs-target="#pills-sub1" type="button" role="tab" aria-controls="pills-sub1" aria-selected="true">Digital fundamentals</div>
                          </li>
                          <li className="nav-item" role="presentation">
                            <div className="nav-link" id="pills-sub2-tab" data-bs-toggle="pill" data-bs-target="#pills-sub2" type="button" role="tab" aria-controls="pills-sub2" aria-selected="false">Mathematics</div>
                          </li>
                          <li className="nav-item" role="presentation">
                            <div className="nav-link" id="pills-sub3-tab" data-bs-toggle="pill" data-bs-target="#pills-sub3" type="button" role="tab" aria-controls="pills-sub3" aria-selected="false">C Language</div>
                          </li>
                        </ul>
        
     
                    </div>
                    <div className="material-books-pdf p-3">
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-sub1" role="tabpanel" aria-labelledby="pills-sub1-tab">
                          here is subject 1 pdf
                        </div>
                        <div className="tab-pane fade" id="pills-sub2" role="tabpanel" aria-labelledby="pills-sub2-tab">
                          subject 2 pdf is here
                        </div>
                        <div className="tab-pane fade" id="pills-sub3" role="tabpanel" aria-labelledby="pills-sub3-tab">
                          pdf of subject 3 is here 
                        </div>
                      </div>
                    </div>
                </div>
              </div>  
            </div>
            <div className="tab-pane fade" id="pills-assignments" role="tabpanel" aria-labelledby="pills-assignments-tab">here is assignments</div>
            
            </div>
        </div>
    </div>
  )
}

export default Material