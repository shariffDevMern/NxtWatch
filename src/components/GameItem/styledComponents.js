import styled from 'styled-components'

export const GameCard = styled.li`
 &:hover{
        transform:scale(1.1);
    }`

export const GameTitle = styled.p`
    margin:0px;
    margin-top:10px;
    font-size:12px;
    cursor:pointer;
    color:${props => (props.mode ? 'white' : '#1e293b')};
    
    &:hover{
        text-decoration:underline;
    }`

export const GameViews = styled.p`
    margin-top:5px;
    line-height:1.5;
    font-size:10px;
    color:#475569;`

export const ThumbnailImg = styled.img`
    width:160px;
    cursor:pointer;
    border-radius:10px;`
