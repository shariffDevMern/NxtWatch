import styled from 'styled-components'

export const GamingBg = styled.div`
    
    height:90vh;
    
    display:flex;
    background-color:${props => (props.mode ? '#181818' : '#f1f5f9')};
    
   `

export const GamingSectionContainer = styled.div`
    
    height:90vh;
    overflow-y:auto;
    width:100%;
    @media(min-width:768px){
        width:80%;
    }`

export const GameListContainer = styled.ul`
    list-style-type:none;
    gap:15px;
    justify-content:center;
    padding-left:0px;
    padding:10px;
    
    display:flex;
    flex-wrap:wrap;`
