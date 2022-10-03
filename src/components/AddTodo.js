import React, { useState } from "react";


function AddTodo({onAdd}) {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title || !text || !date){
            alert('Invalid')
            return
        }
        else {
            onAdd(title,text,date)
        }

        setDate('')
        setText('')
        setTitle('')
    }

    return (
        <form className='container fluid row g-3 pe-5 ps-5 mt-2' onSubmit={onSubmit} method="POST">
            <div className='col-12 pe-5 ps-5'>
                <input className='form-control' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='col-12 pe-5 ps-5'>
                <input className='form-control' type="text" placeholder='Description' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="col-3 pe-5 ps-5">
                <input className='form-control' type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className='col-12'>
                <input type="submit" className='btn bg-warning ms-5 me-5 float-end' value="Add"/>
            </div>
        </form>
    )
}

export default AddTodo