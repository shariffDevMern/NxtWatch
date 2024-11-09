import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginBg,
  LoginContainer,
  LogoImg,
  LoginForm,
  InputContainer,
  InputField,
  LabelText,
  CheckBox,
  ShowPasswordLabel,
  CheckBoxContainer,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isPasswordShown: false,
    isFailure: false,
    errorMsg: '',
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCredentials = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 3})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isFailure: true, errorMsg})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({isPasswordShown: !prevState.isPasswordShown}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, isPasswordShown, isFailure, errorMsg} =
      this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, onLogoutPage} = value
          const onLoginForm = event => {
            this.onLogin(event)
            onLogoutPage()
          }
          const logoImgUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginBg mode={isDark}>
              <LoginContainer mode={isDark}>
                <LogoImg alt="website logo" src={logoImgUrl} />
                <LoginForm onSubmit={onLoginForm}>
                  <InputContainer>
                    <LabelText htmlFor="username" mode={isDark}>
                      USERNAME
                    </LabelText>
                    <InputField
                      mode={isDark}
                      onChange={this.onChangeUsername}
                      value={username}
                      id="username"
                      placeholder="Username"
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelText htmlFor="password" mode={isDark}>
                      PASSWORD
                    </LabelText>
                    <InputField
                      onChange={this.onChangePassword}
                      type={isPasswordShown ? 'text' : 'password'}
                      value={password}
                      id="password"
                      placeholder="Password"
                    />
                    <CheckBoxContainer>
                      <CheckBox
                        onClick={this.toggleShowPassword}
                        id="showPassword"
                        type="checkbox"
                      />
                      <ShowPasswordLabel htmlFor="showPassword" mode={isDark}>
                        Show Password
                      </ShowPasswordLabel>
                    </CheckBoxContainer>
                  </InputContainer>
                  <LoginBtn type="submit">Login</LoginBtn>
                </LoginForm>
                {isFailure && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginContainer>
            </LoginBg>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
