import styled from 'styled-components'

export const VideoItemBg = styled.div`
    
    height:90vh;
    
    display:flex;
    background-color:${props => (props.mode ? '#181818' : '#f1f5f9')}`

export const VideoItemSection = styled.div`
    
    height:90vh;
    overflow-y:auto;
    width:100%;
    @media(min-width:576px){
        padding:20px;
        
    }`

export const VideoTitle = styled.h1`
    font-size:16px;
    line-height:1.5;
    margin-top:0px;
    color:${props => (props.mode ? '#f1f5f9' : '#1e293b')};`

export const DetailsContainer = styled.div`
    padding:10px;
    display:flex;
    flex-direction:column;
    
    
    @media(min-width:576px){
        margin-top:20px;
        padding:0px;
    }`

export const SubFeaturesContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    
    @media(min-width:576px){
        flex-direction:row;
        gap:0px;
        align-items:center;
        justify-content:space-between;
    }
    
    `

export const Views = styled.p`
    margin:0px;
    color:${props => (props.mode ? 'white' : '#383838')};`

export const DateText = styled.p`
    margin:0px;
    color:${props => (props.mode ? 'white' : '#383838')};`

export const DateViewInfo = styled.div`
    display:flex;
    
    
    
    
    
    font-size:12px;
    gap:15px;`

export const FeaturesContainer = styled.div`
    display:flex;
    
    font-size:12px;
    gap:15px;
    @media(max-width:576px){
        margin-top:7px;
    }
    
`
export const FeatureBtn = styled.button`
    display:flex;
    align-items:center;
    cursor:pointer;
    gap:5px;
    opacity:0.8;
    background-color:transparent;
    border-style:none;
    padding:0px;
    color:${props =>
      props.isToggled ? '#3b82f6' : `${props.mode ? 'white' : '#1e293b'}`};
    
    &:hover{
        opacity:1;
    }
    
    &:hover svg{
            transform:scale(2);
    }`

export const ChannelProfile = styled.img`
    border-radius:100%;
    height:30px;
    width:30px;
    cursor:pointer;`

export const ChannelContainer = styled.div`
    display:flex;
    margin-top:10px;
    gap:10px;`

export const ChannelTitleContainer = styled.div`
    color:${props => (props.mode ? 'white' : '#475569')}`

export const ChannelName = styled.p`
    font-size:12px;
    font-weight:bold;
    margin:0px;
    cursor:pointer;
    &:hover{
        text-decoration:underline;
        
    }`

export const SubsicribersText = styled.p`
    font-size:10px;
    
    margin-top:5px;`

export const ChannelDescription = styled.p`
     color:${props => (props.mode ? 'white' : '#475569')};
     font-size:12px;
     line-height:1.5;
     @media(min-width:576px){
        margin-left:40px;
     }
    `
