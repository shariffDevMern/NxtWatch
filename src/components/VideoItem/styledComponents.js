import styled from 'styled-components'

export const Video = styled.li`
    
    
    @media(min-width:576px){
        ${props =>
          props.rowValue === 'mdRow'
            ? 'display:flex; gap:10px; width:576px; align-items-center'
            : ' width:268px;'}
    }
    @media(min-width:768px){
        
        ${props =>
          props.rowValue === 'mdRow'
            ? 'width:568px; min-width:568px; max-width:968px;'
            : 'width:256px;'}
        &:hover{
        
        box-shadow:0px 25px 67px black;
    }
        
    }
    `
export const Thumbnail = styled.img`
    cursor:pointer;
    width:100%;
    @media(min-width:576px){
        ${props => (props.rowValue === 'mdRow' ? 'max-width:300px;' : '')}
    }
    `
export const VideoDetailsContainer = styled.div`
    padding:${props => (props.rowValue === 'mdRow' ? '5px' : '10px')};
    
    
   
    `
export const TitleContainer = styled.div`
    display:flex;
    gap:10px;`

export const ChannelImage = styled.img`
    width:30px;
    height:30px;
    border-radius:100%;`

export const VideoTitle = styled.p`
    font-size:12px;
    cursor:pointer;
    margin:0px;
    line-height:1.8;
    color:${props => (props.mode ? 'white' : '#383838')};
    &:hover{
        text-decoration:underline;
    }`

export const TextSection = styled.div``

export const ViewsContainer = styled.div`
 display:flex;
 font-size:10px;
 gap:10px;
 margin-top:5px;
 flex-wrap:wrap;
 @media (min-width:576px){
    gap:5px;
 }`

export const ChannelName = styled.p`
    margin:0px;
    cursor:pointer;
    color:${props => (props.mode ? 'white' : '#383838')};
    @media (min-width:576px){
        width:100%;
    }
    &:hover{
        text-decoration:underline;
    }
    `
export const Views = styled.p`
    margin:0px;
    color:${props => (props.mode ? 'white' : '#383838')};`

export const DateText = styled.p`
    margin:0px;
    color:${props => (props.mode ? 'white' : '#383838')};`
