import styled from 'styled-components'

export const MenuItem = styled.li`
    
    display:flex;
    justify-content:${props => (props.justifyStart ? 'flex-start' : 'center')};
    background-color:${props =>
      props.isSelected ? `${props.mode ? '#606060' : '#d7dfe9'}` : ''};
    border-style:none;
    
    padding-left:${props => (props.pLeft ? '20px' : '')};
    
    &:hover{
      background-color:${props => (props.mode ? '#606060' : '#d7dfe9')}}`

export const ItemBtn = styled.button`
    cursor:pointer;
    display:flex;
    background-color:transparent;
    width:130px;
    gap:10px;
    justify-content:flex-start;
    border-style:none;
    align-items:center;
    `

export const MenuLink = styled.p`
    color:${props => (props.mode ? '#cccccc' : '#1e293b')};
    font-weight:${props => (props.isSelected ? 'bold' : 'normal')};`

export const IconContainer = styled.div`
    color:${props =>
      props.mode
        ? `${props.isSelected ? '#ff0000' : 'white'}`
        : `${props.isSelected ? '#ff0000' : '#212121'}`}`
