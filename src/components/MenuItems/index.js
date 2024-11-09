import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {MenuItem, ItemBtn, IconContainer, MenuLink} from './styledComponents'

const MenuItems = props => {
  const {eachItem, justifyStart, pLeft} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, selectedMenuItem, changeMenuItem} = value

        return (
          <MenuItem
            pLeft={pLeft}
            justifyStart={justifyStart}
            isSelected={selectedMenuItem === eachItem.id}
            mode={isDark}
          >
            <Link className="link-route" to={eachItem.route}>
              <ItemBtn
                mode={isDark}
                onClick={() => changeMenuItem(eachItem.id)}
              >
                <IconContainer
                  isSelected={selectedMenuItem === eachItem.id}
                  mode={isDark}
                >
                  <eachItem.icon />
                </IconContainer>
                <MenuLink
                  isSelected={selectedMenuItem === eachItem.id}
                  mode={isDark}
                >
                  {eachItem.displayText}
                </MenuLink>
              </ItemBtn>
            </Link>
          </MenuItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default MenuItems
