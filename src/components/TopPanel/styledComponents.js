import styled from 'styled-components'

export const TopPanelContainer = styled.div`
    background-color:${props => (props.mode ? '#424242' : '#d7dfe9')};
    padding:5px;
    padding-left:30px;
    display:flex;
    align-items:center;
    gap:20px;`

export const IconContainer = styled.div`
    background-color:${props => (props.mode ? '#212121' : '#cbd5e1')};
    padding:20px;
    height:50px;
    width:50px;
    border-radius:100%;
    display:flex;
    align-items:center;`

export const Heading = styled.h1`
    color:${props => (props.mode ? 'white' : '#1e293b')};`
