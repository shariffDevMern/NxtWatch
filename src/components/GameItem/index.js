import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {GameCard, GameTitle, GameViews, ThumbnailImg} from './styledComponents'

import './index.css'

const GameItem = props => {
  const {gameData} = props
  const {thumbnailUrl, viewCount, title, id} = gameData

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, changeMenuItem} = value
        const onChangeMenuItem = () => {
          changeMenuItem('')
        }

        return (
          <GameCard onClick={onChangeMenuItem}>
            <Link className="game-item" to={`/videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle mode={isDark}>{title}</GameTitle>
              <GameViews mode={isDark}>
                {`${viewCount} `}Watching <br className="line-break" />
                WorldWide
              </GameViews>
            </Link>
          </GameCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameItem
