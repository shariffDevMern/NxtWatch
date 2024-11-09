import styled from 'styled-components'

export const SidePanelContainer = styled.div`
    background-color:${props => (props.mode ? '#231f20' : 'white')};
    width:20%;
    display:none;

    @media (min-width:768px){
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }`

export const MenuItemsContainer = styled.ul`
    list-style-type:none;
    margin-top:30px;
    padding-left:0px;
    display: flex;
    flex-direction: column;`

export const ContactHeading = styled.p`
    color:${props => (props.mode ? 'white' : '#475569')};
    font-size:${props => (props.subHead ? '12px' : '14px')};`

export const ContactSection = styled.div`
    padding-left:20px;
    margin-bottom:20px;`

export const SocialIconItem = styled.li`
    cursor:pointer;`

export const SocialMediaContainer = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    align-items-center;
    gap:15px;`

export const SocialIcon = styled.img`
    width:30px;`
