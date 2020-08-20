import React from 'react'
import styled from 'styled-components'

export default function UserForms(props){
    const{
        values,
        inputChange,
        checkboxChange,
        submit,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    return(

        <form className = 'form-container' onSubmit = {onSubmit}>
            <div>
                <h2>Join our Team</h2>

                <button disabled = {disabled}>Submit</button>

                <div className = 'error messages'>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.tos}</div>
                </div>

                <div>
                    <h4>Information Here</h4>

                    <label>First Name: 

                    <input
                     value = {values.first_name}
                     onChange = {onInputChange}
                     name = 'first_name'
                     type = 'text'
                     /> 

                     </label>

                     <label>Last Name:

                         <input
                            value = {values.last_name}
                            onChange = {onInputChange}
                            name = 'last_name'
                            type = 'text'
                         />

                     </label>

                     <label>Email:

                         <input
                            value = {values.email}
                            onChange = {onInputChange}
                            name = 'email'
                            type = 'email'
                         />

                     </label>
                            
                     <label>Password: 

                         <input
                            value = {values.password}
                            onChange = {onInputChange}
                            name = 'password'
                            type = 'password'
                         />

                     </label>

                     <label>Avatar:  <input />
                       </label>

                     <label>Agree to TOS 

                         <input
                            checked = {values.tos}
                            onChange = {onCheckChange}
                            name = 'tos'
                            type = 'checkbox'
                         />  
                         
                     </label>
                </div>
            </div>
        </form>

    )

}