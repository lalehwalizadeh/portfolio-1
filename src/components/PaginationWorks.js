import React from "react";
import './Works.css';

const PaginationWorks = ({totalPost,postPerPage,setCurrentPage}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        pages.push(i);
    }

    const btnStyle = {
        justifyContent: 'center',
    
}

    return (
        <div className="bot">
            {
                pages.map((page, index) => {
                    return (
                        <button key={index} style={btnStyle} onClick={() => setCurrentPage(page)} className="" id="bot"> { page } </button>
                    )
                })
        }
        </div>
    )
}

export default PaginationWorks;