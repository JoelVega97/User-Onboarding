import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`

background-color: #FDF5BF;
margin: 3% 25%;
padding: 2%;
border: solid 5px black;
border-radius: 15px;

`


export default function User({details}){
    if(!details){
        return <h3>One moment as we bulid a New User</h3>
    }

    return(
        <StyledDiv>
            <h2>Name: {details.first_name} {details.last_name} </h2>
            <p>Email: {details.email} </p>
        </StyledDiv>


    )
}
