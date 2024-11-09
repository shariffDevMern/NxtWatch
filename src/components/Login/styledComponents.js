import styled from 'styled-components'

export const LoginBg = styled.div`
    display:flex;
    flex-direction:colum;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    padding:20px;
    background-color:${props => (props.mode ? '#212121' : 'white')};
    `

export const LoginContainer = styled.div`
    box-shadow:${props => (props.mode ? 'none' : '0px 2px 15px black')};
    padding:40px;
    display:flex;
    flex-direction:column;
    background-color:${props => (props.mode ? '#0f0f0f' : 'white')};
    justify-content:center;
    width:100%;
    border-radius:10px;
    max-width:400px;`

export const LogoImg = styled.img`
    width:100px;
    align-self:center;
    `

export const LoginForm = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:20px;
    `

export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;`

export const LabelText = styled.label`
    color:${props => (props.mode ? 'white' : '#475569')};
    font-size:10px;
    margin-bottom:5px;`

export const InputField = styled.input`
    padding:10px;
    color:${props => (props.mode ? 'white' : 'black')};
    background-color:transparent;
    outline:none;
    border:1px solid #e2e8f0;
    border-radius:2px;`

export const CheckBox = styled.input`
    margin-right:5px;`

export const ShowPasswordLabel = styled.label`
    color:${props => (props.mode ? 'white' : 'black')};
    font-size:14px;`

export const CheckBoxContainer = styled.div`
    display:flex;
    align-items:center;
    margin-top:5px;`

export const LoginBtn = styled.button`
    color:white;
    background-color:#3b82f6;
    padding:10px;
    border-radius:5px; 
    border-style:none;
    cursor:pointer;`

export const ErrorMsg = styled.p`
    color:#ff0000;
    font-size:12px;
    margin:0px;`
