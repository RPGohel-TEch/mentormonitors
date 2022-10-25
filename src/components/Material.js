import React from 'react'

const Material = () => {
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
            <div className="tab-pane fade show active" id="pills-material" role="tabpanel" aria-labelledby="pills-material-tab">here is Materials </div>
            <div className="tab-pane fade" id="pills-assignments" role="tabpanel" aria-labelledby="pills-assignments-tab">here is assignments</div>
            
            </div>
        </div>
    </div>
  )
}

export default Material