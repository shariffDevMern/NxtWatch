import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import NxtWatchContext from '../../context/NxtWatchContext'
import convertKeysToCamelCase from '../../convertKeys'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'
import './index.css'
import TopPanel from '../TopPanel'
import {
  TrendingBg,
  TrendingSectionContainer,
  TrendingVideosList,
} from './styledComponents'
import NavBar from '../NavBar'
import SidePanel from '../SidePanel'

const apiStatusView = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    currentView: apiStatusView.initial,
  }

  componentDidMount() {
    this.fetchTrendingVideos()
  }

  renderSuccessView = () => {
    const {trendingVideosList} = this.state

    return (
      <TrendingVideosList>
        {trendingVideosList.map(eachVideo => (
          <VideoItem mdRow="mdRow" key={eachVideo.id} videoObj={eachVideo} />
        ))}
      </TrendingVideosList>
    )
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <FailureView retryFunction={this.fetchTrendingVideos} />
  )

  fetchTrendingVideos = async () => {
    this.setState({currentView: apiStatusView.loading})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      this.setState({
        trendingVideosList: formattedData,
        currentView: apiStatusView.success,
      })
    } else {
      this.setState({currentView: apiStatusView.failure})
    }
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
    const {trendingVideosList} = this.state
    console.log(trendingVideosList)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <NavBar />
              <TrendingBg mode={isDark}>
                <SidePanel />
                <TrendingSectionContainer>
                  <TopPanel
                    iconItem={{icon: FaFire}}
                    title="Trending"
                    mode={isDark}
                  />
                  {this.renderView()}
                </TrendingSectionContainer>
              </TrendingBg>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
