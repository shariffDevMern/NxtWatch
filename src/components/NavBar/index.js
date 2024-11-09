import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon, FaSun} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosLogOut, IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import {
  NavBarBg,
  NavButton,
  ProfileImg,
  LogoutBtn,
  ConfiramtionText,
  LogoutPopout,
  ChoiceBtn,
  MenuContainer,
  CloseBtn,
} from './styledComponents'
import MenuItems from '../MenuItems'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

const NavBar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, toggleTheme, navItemsList, changeMenuItem, onLogoutPage} =
        value
      const onChangeTheme = () => {
        toggleTheme()
      }

      const onChangeMenuIcon = () => {
        changeMenuItem('HOME')
      }

      const renderMenuItemsSection = () => (
        <ul className="menu-items-container">
          {navItemsList.map(eachItem => (
            <MenuItems key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
      )

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
        localStorage.setItem('currentMenuItem', '/')
        onLogoutPage()
      }

      const renderPopupContent = () => close => (
        <>
          <LogoutPopout mode={isDark}>
            <ConfiramtionText mode={isDark}>
              Are you sure, you want to logout{' '}
            </ConfiramtionText>
            <div className="choices-container">
              <ChoiceBtn onClick={() => close()}>Cancel</ChoiceBtn>
              <ChoiceBtn onClick={onLogout} confirm>
                Confirm
              </ChoiceBtn>
            </div>
          </LogoutPopout>
        </>
      )

      return (
        <NavBarBg mode={isDark}>
          <Link onClick={onChangeMenuIcon} to="/">
            <img
              className="logo-img"
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <div className="menu-icons-container">
            {isDark ? (
              <NavButton data-testid="theme" onClick={onChangeTheme}>
                <FaSun className="sun-icon nav-icon" />
              </NavButton>
            ) : (
              <NavButton data-testid="theme" onClick={onChangeTheme}>
                <FaMoon className="moon-icon nav-icon" />
              </NavButton>
            )}
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <NavButton
                  mdNone
                  mode={isDark}
                  className="hamburger-button"
                  type="button"
                >
                  <GiHamburgerMenu className="nav-icon" />
                </NavButton>
              }
              className="popup-content"
            >
              {close => (
                <MenuContainer mode={isDark}>
                  <CloseBtn onClick={() => close()} mode={isDark}>
                    <IoMdClose mode={isDark} />
                  </CloseBtn>
                  {renderMenuItemsSection(isDark)}
                </MenuContainer>
              )}
            </Popup>
            <Popup modal trigger={<LogoutBtn>Logout</LogoutBtn>}>
              {renderPopupContent()}
            </Popup>
            <Popup
              modal
              trigger={
                <NavButton
                  mdNone
                  mode={isDark}
                  className="hamburger-button"
                  type="button"
                >
                  <IoIosLogOut className="nav-icon" />
                </NavButton>
              }
            >
              {renderPopupContent()}
            </Popup>
          </div>
        </NavBarBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(NavBar)
