import styled from 'styled-components'

export const NavBarBg = styled.nav`
    padding:15px;
    height:10vh;
    background-color:${props => (props.mode ? '#231f20' : 'white')};
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media(min-width:768px){
        padding-left:30px;
        padding-right:30px;
    }`

export const NavButton = styled.button`
    &:hover{
        transform:scale(1.2);
    }
    background-color:transparent;
    border-style:none;
    cursor:pointer;
    color:${props => (props.mode ? 'white' : '')};
    ${props => (props.mdNone ? '@media (min-width:768px){ display:none;}' : '')}
    `

export const ProfileImg = styled.img`
    width:25px;
    cursor:pointer;
    display:none;
    @media (min-width:768px){
        display:block;
    }
    `
export const LogoutBtn = styled.button`
    padding:5px;
    cursor:pointer;
    border-width:1px;
    width:70px;
    border-color:#3b82f6;
    background-color:transparent;
    color:#3b82f6;
    display:none;
    @media (min-width:768px){
        display:block;
    }
    
    &:hover{
        background-color:#4f46e5;
        color:white;
    }`

export const ConfiramtionText = styled.p`
    color:${props => (props.mode ? 'white' : 'black')};
    font-size:14px;
    text-align:center`

export const LogoutPopout = styled.div`
    padding:20px;
    border-radius:10px;
    background-color:${props => (props.mode ? '#212121' : 'white')}`

export const ChoiceBtn = styled.button`
    padding:10px;
    ${props =>
      props.confirm ? 'border-style:none' : 'border:1px solid #94a3b8'};
    background-color:${props => (props.confirm ? '#3b82f6' : 'transparent')};
    border-radius:2px;
    color:${props => (props.confirm ? 'white' : '#94a3b8')};
    width:70px;
    cursor:pointer;`

export const MenuContainer = styled.div`
    
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100vw;
    background-color:${props => (props.mode ? '#231f20' : 'white')};
    
    @media (min-width:768px){
        display:none;
    }`

export const CloseBtn = styled.button`
    align-self:flex-end;
    padding:20px;
    background-color:transparent;
    color:${props => (props.mode ? 'white' : 'black')};
    border-style:none;
    cursor:pointer;`
