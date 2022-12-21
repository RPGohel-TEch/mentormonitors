import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
const Material = () => {
  const [courseData, setcourseData] = useState([]);
  const getcourseData = async () => {
    const { data } = await axios.get(`http://localhost:8000/course/`);
    setcourseData(data?.data?.users);
  };
  const [subjectData, setsubjectData] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [subjectSem, setSubjectSem] = useState("1");
  const [subjectBranch, setSubjectBranch] = useState("it");
  const [subjectBatch, setSubjectBatch] = useState("a");
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
  const getsubjctData = async () => {
    const { data } = await axios.get(`http://localhost:8000/subject/`);
    setsubjectData(data?.data?.users);
  };

  useEffect(() => {
    getcourseData();
    getsubjctData();
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
                <div className="material-subjects-cards-content d-flex ">
                    <div className="material-subjects">
                   
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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

                          <li className="nav-item" role="presentation">
                            <div className="nav-link " id="pills-sub1-tab" data-bs-toggle="pill" data-bs-target="#pills-sub1" type="button" role="tab" aria-controls="pills-sub1" aria-selected="true">{s.subject_name}</div>
                          </li>
                      )})}
                         
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