import styled from 'styled-components'

export const SavedVideosBg = styled.div`
    
    height:90vh;
    
    display:flex;
    background-color:${props => (props.mode ? '#181818' : '#f1f5f9')}`

export const SavedVideosSectionContainer = styled.div`
    
    height:90vh;
    overflow-y:auto;
    width:100%;
    @media(min-width:768px){
        width:80%;
    }`

export const NoVideosImg = styled.img`
    width:100%;
    max-width:400px;`

export const EmptyBg = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content-center;
    align-items:center;
    margin-top:100px;
    text-align-center;
    `

export const Heading = styled.h1`
    margin-top:20px;
    color:${props => (props.mode ? 'white' : '#181818')};
    font-size:16px;`

export const Description = styled.p`
    color:${props => (props.mode ? 'white' : '#383838')};
    margin:0px;
    font-size:12px;`

export const SavedVideosList = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    @media(min-width:576px){
        align-items:center;
    }`
