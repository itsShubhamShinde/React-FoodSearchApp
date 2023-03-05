import React from 'react'
import './Search.css'

const Search = ({ inputvalue, setInputvalue }) => {

    return (
        <div className='Search'>
            <input type="text" onChange={(e) => {
                setInputvalue(e.currentTarget.value)
                console.log("search", inputvalue);
            }} />


            <button onClick={(e) => {
                console.log("prev ", inputvalue);
                setInputvalue(inputvalue)
            }
            }>Submit</button>
        </div>
    )
}

export default Search