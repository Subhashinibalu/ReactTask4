import React from 'react';
import Card from '../Components/Card';

const All = ({data}) => {
    return (
        <>
        
        <div className="container ">
            <div className="row row-cols-lg-3 row-cols-xl-4  row-cols-md-2 row-cols-sm1 d-flex justify-content-center align-items-center mt-5">
            {data.map((element,index)=>{
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

export default All;