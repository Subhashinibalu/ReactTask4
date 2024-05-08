import React from 'react';
import Card from '../Components/Card';

const DataScience = ({data}) => {
    const dataScienceCourse =data.filter((element)=>element.title==="Data Science");
    return (
        <>
           <div className="container">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 d-flex justify-content-center align-items-center mt-5">
            {dataScienceCourse.map((element,index)=>{
                return(
                    <div key={index}>
                    <Card element={element} index={index} />
                    </div>
                )
                
            })}
                
                
                </div>
                </div>
        </>
    );
};

export default DataScience;