import React from "react";


function Header() {
    return (
        <div className='container row g-3 mt-2'>
            <div className='col-md-9'>
                <h1 className='text-center'>Todo App by: Sipe</h1>
            </div>
            <div className='col-md-3'>
                <button className='btn bg-dark text-white'>Close</button>
            </div>
        </div>
    )
}

export default Header;