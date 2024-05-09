import React from 'react';

const CareerCard = ({element},{index}) => {
    return (
        <>
         <div className="card  mt-3" style={{width: "18rem"}}>
  <img src={element.picture} className="card-img-top" alt={element.heading} style={{width: "18rem", height:"11rem"}}/>
  <div className="card-body">
    <h6 className="card-title fw-bold mb-3">{element.heading}</h6>
    <p ><span className='small text-secondary '>Available in: </span>  <span className='small lang '>{element.lang1}</span> <span className='small lang'>{element.lang2}</span> </p>
    <hr/>
   <p className='small'><i className="bi bi-currency-rupee"></i> EMI Options Available</p>
   <p className='small'><i className="bi bi-journal-check"></i> Placement Guidance</p>
   <p className='small mt-0 '><i className="bi bi-person-workspace"></i> 1:1 Mentor Doubt Clearing Session</p>
  </div>
  <div className="d-flex justify-content-between ms-3 me-3 mb-4 cardend small ">
  <button className='btn know'>Know More <i className="bi bi-caret-right"></i></button>
    <button className='btn syllabus'>Syllabus <i className="bi bi-download"></i></button>
  </div>

 
  
  
</div>
        </>
    );
};

export default CareerCard;