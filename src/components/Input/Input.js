import React from 'react'
import './Input.css'

export default function Input(props) {

    const { type = 'text', required = true, name, placeholder = '' ,value, setValue} = props

    return (
        <div className="input">
         
            <input 
                name={name}
                required={required}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder={placeholder}
                type={type}
                autoComplete="off"
            />
        
        </div>
    )
}
