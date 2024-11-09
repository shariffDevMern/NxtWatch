import NxtWatchContext from '../../context/NxtWatchContext'
import {TopPanelContainer, IconContainer, Heading} from './styledComponents'
import './index.css'

const TopPanel = props => {
  const {title, iconItem} = props

  return (
    <NxtWatchContext>
      {value => {
        const {isDark} = value
        return (
          <TopPanelContainer mode={isDark}>
            <IconContainer mode={isDark}>
              <iconItem.icon className="icon" />
            </IconContainer>
            <Heading mode={isDark}>{title}</Heading>
          </TopPanelContainer>
        )
      }}
    </NxtWatchContext>
  )
}

export default TopPanel
