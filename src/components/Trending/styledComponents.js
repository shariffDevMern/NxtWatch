import styled from 'styled-components'

export const TrendingBg = styled.div`
    
    height:90vh;
    
    display:flex;
    background-color:${props => (props.mode ? '#181818' : '#f1f5f9')}`

export const TrendingSectionContainer = styled.div`
    
    height:90vh;
    overflow-y:auto;
    width:100%;
    @media(min-width:768px){
        width:80%;
    }`

export const FireContainer = styled.div`
    background-color:${props => (props.mode ? '#212121' : '#cbd5e1')};
    padding:20px;
    height:50px;
    width:50px;
    border-radius:100%;
    display:flex;
    align-items:center;`

export const TrendingHeading = styled.h1`
    color:${props => (props.mode ? 'white' : '#1e293b')};`

export const TrendingVideosList = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    @media(min-width:576px){
        align-items:center;
    }`
