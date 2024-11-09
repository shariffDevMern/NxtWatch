import styled from 'styled-components'

export const RetryButton = styled.button`
    background-color:#4f46e5;
    color:white;
    border-style:none;
    border-radius:5px;
    width:70px;
    padding:10px;
    cursor:pointer;`

export const FailureDescription = styled.p`
    font-size:12px;
    color:${props => (props.mode ? 'white' : '#1e293b')};`

export const FailureHeading = styled.h1`
    font-size:14px;
    margin:0px;
    color:${props => (props.mode ? 'white' : '#1e293b')};`

export const FailureImg = styled.img`
    width:100%;
    max-width:350px;`
