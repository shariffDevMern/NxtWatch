import styled from 'styled-components'

export const HomeBg = styled.div`
    
    height:90vh;
    
    display:flex;
    background-color:${props => (props.mode ? '#181818' : '#f1f5f9')}`

export const BannerContainer = styled.div`
    padding:20px;
    background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size:cover;
    display:flex;
    flex-direction:column;
    background-position:left;
    `
export const VidoesContainer = styled.div`
    
    flex-grow:1;
    height:90vh;
    overflow-y:auto;
    width:100%;
    @media(min-width:768px){
        width:80%;
    }`

export const SearchContainer = styled.div`
width:100%;
    
    padding:10px;`

export const SearchBox = styled.div`
    display:flex;
    border:1px solid ${props => (props.mode ? 'white' : '#909090')};
    width:100%;
    max-width:500px;`

export const SearchField = styled.input`
    padding:5px;
    width:100%;
    color:${props => (props.mode ? 'white' : 'black')};
    outline:none;
    border-style:none;
    background-color:${props => (props.mode ? 'transparent' : 'white')};`

export const SearchBtn = styled.button`
 cursor:pointer;
 width:70px;
 opacity:0.5;
 border-left-style:solid;
 border-right-style:none;
 border-top-style:none;
 border-bottom-style:none;
 border-width:1px;
 border-color:${props => (props.mode ? 'white' : '#313131')};
 background-color:${props => (props.mode ? '#424242' : '#f4f4f4')};
 color:${props => (props.mode ? 'white' : 'black')};
 &:hover{
    opacity:1;
 }`

export const VideosSection = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    flex-direction:column;
    gap:10px;
    @media (min-width:576px){
        flex-direction:row;
        flex-wrap:wrap;
        padding:10px;
        
    }

    `

export const NoSearchHeading = styled.h1`
    font-size:14px;
    margin:0px;
    margin-top:10px;
    color:${props => (props.mode ? 'white' : '#1e293b')};`

export const NoSearchDescription = styled.p`
    font-size:12px;
    color:${props => (props.mode ? 'white' : '#1e293b')};`
