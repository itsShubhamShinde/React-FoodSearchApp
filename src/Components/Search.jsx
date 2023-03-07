import React from 'react'
import './Search.css'

const Search = ({ inputvalue, setInputvalue, value, setValue }) => {

    return (
        <div className='Search' >
            <input type="text" onChange={(e) => {
                setValue(e.currentTarget.value)
            }} />

            <button onClick={(e) => {
                setInputvalue(value)
            }
            }>Submit</button>
        </div>
    )
}

export default Search;