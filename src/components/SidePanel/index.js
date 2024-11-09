import {withRouter} from 'react-router-dom'
import {
  SidePanelContainer,
  MenuItemsContainer,
  ContactSection,
  ContactHeading,
  SocialMediaContainer,
  SocialIconItem,
  SocialIcon,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import MenuItems from '../MenuItems'

const socialIconsList = [
  {
    id: 'FB',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png',
    altText: 'facebook logo',
  },
  {
    id: 'TW',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png',
    altText: 'twitter logo',
  },
  {
    id: 'LI',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png',
    altText: 'linked in logo',
  },
]

const SidePanel = props => {
  const renderSocialMedia = () =>
    socialIconsList.map(eachIcons => (
      <SocialIconItem key={eachIcons.id}>
        <SocialIcon src={eachIcons.imgUrl} alt={eachIcons.altText} />
      </SocialIconItem>
    ))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, navItemsList} = value
        return (
          <SidePanelContainer mode={isDark}>
            <MenuItemsContainer>
              {navItemsList.map(eachItem => (
                <MenuItems
                  pLeft
                  justifyStart
                  key={eachItem.id}
                  eachItem={eachItem}
                />
              ))}
            </MenuItemsContainer>
            <ContactSection>
              <ContactHeading mode={isDark}>CONTACT US</ContactHeading>
              <SocialMediaContainer>{renderSocialMedia()}</SocialMediaContainer>
              <ContactHeading mode={isDark} subHead>
                Enjoy! Now to see your channels and recommendations!
              </ContactHeading>
            </ContactSection>
          </SidePanelContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(SidePanel)
