import React from 'react';
import CareerCard from '../Components/CareerCard';


const Career = ({careerData}) => {
    
    return (
        <>
          <div className="container">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 d-flex justify-content-center align-items-center mt-5">
            {careerData.map((element,index)=>{
                return(
                    <div key={index}>
                    <CareerCard element={element} index={index}/>
                    </div>
                )
                
            })}
                
                
                </div>
                </div>
        </>
    );
};

export default Career;