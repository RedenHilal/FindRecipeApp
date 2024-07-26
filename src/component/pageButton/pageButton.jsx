import React,{useEffect, useState} from "react";
import './pagebutton.css'

function PageButton({ totalPages, currentPage, onPageChange, onSetPage }){
    const [page, setPage] = useState(currentPage);

    const handleNextPage = () => {
        if (page < totalPages) {
          setPage(page + 1);
          onPageChange(page + 1);
        }
      };
    
    const handlePreviousPage = () => {
        if (page > 1) {
          setPage(page - 1);
          onPageChange(page - 1);
        }
      };
    useEffect(()=>{
      setPage(currentPage)
    },[currentPage])

    return (
        <div className="pageButton">
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </button>
          <span>Page {page} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
      );
}

export default PageButton;