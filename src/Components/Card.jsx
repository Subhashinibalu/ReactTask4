import React from 'react';

const Card = ({element},{index}) => {
    return (

        <>
                
                   
  <div className="card  mt-3" style={{width: "18rem"}}>
  <img src={element.image} className="card-img-top" alt={element.title} style={{width: "18rem", height:"11rem"}}/>
  <div className="card-body">
    <h6 className="card-title">{element.intro}</h6>
    <p className="card-text text-body-secondary mt-4 author"><span className="by"></span>{element.author}</p>
   
  </div>
  <div className="d-flex justify-content-between ms-3 me-3 cardend small ">
  <p className=' text-body-secondary'>{element.date}</p>
    <p className=' text-body-secondary'>{element.readTime} Min Read</p> 
  </div>
 
  
  
</div>
               

            
            
        </>
    );
};

export default Card;