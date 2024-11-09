import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingBg,
  GamingSectionContainer,
  GameListContainer,
} from './styledComponents'
import GameItem from '../GameItem'
import NavBar from '../NavBar'
import SidePanel from '../SidePanel'

import FailureView from '../FailureView'
import TopPanel from '../TopPanel'

import convertKeysToCamelCase from '../../convertKeys'
import './index.css'

const apiStatusView = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    currentView: apiStatusView.initial,
  }

  componentDidMount() {
    this.fetchGamesData()
  }

  fetchGamesData = async () => {
    this.setState({currentView: apiStatusView.loading})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = convertKeysToCamelCase(data.videos)
      console.log(formattedData)
      this.setState({
        gamesList: formattedData,
        currentView: apiStatusView.success,
      })
    } else {
      this.setState({currentView: apiStatusView.failure})
    }
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView retryFunction={this.fetchGamesData} />

  renderSuccessView = () => {
    const {gamesList} = this.state

    return (
      <GameListContainer>
        {gamesList.map(eachGame => (
          <GameItem gameData={eachGame} key={eachGame.id} />
        ))}
      </GameListContainer>
    )
  }

  renderView = () => {
    const {currentView} = this.state
    switch (currentView) {
      case apiStatusView.loading:
        return this.renderLoaderView()
      case apiStatusView.failure:
        return this.renderFailureView()
      case apiStatusView.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <NavBar />
              <GamingBg mode={isDark}>
                <SidePanel />
                <GamingSectionContainer>
                  <TopPanel
                    iconItem={{icon: SiYoutubegaming}}
                    title="Gaming"
                    mode={isDark}
                  />
                  {this.renderView()}
                </GamingSectionContainer>
              </GamingBg>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
