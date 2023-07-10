import React from 'react';
import {useState} from 'react';

const BoxForm = props => {

    const {addFunction} = props

    const [boxData, setBoxData] = useState({
        color: ""
    })

    const formSubmit = (e) => {
        e.preventDefault()
        addFunction(boxData)

        setBoxData({
            color: ""
        })
    }

    const handleChange = (e) => {
        const {value} = e.target

        setBoxData(currentData => ({...currentData, 'color': value }))
    }

    return (
        <form onSubmit={formSubmit}>
            <label>Color: </label>
            <input name="color" onChange={handleChange} value={boxData.color} type="text"/>
            <button>Submit</button>
        </form>
    )
}

export default BoxForm
