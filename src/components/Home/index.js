import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import convertKeysToCamelCase from '../../convertKeys'
import './index.css'
import SidePanel from '../SidePanel'
import NavBar from '../NavBar'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'
import {
  HomeBg,
  BannerContainer,
  VidoesContainer,
  SearchContainer,
  SearchBox,
  SearchField,
  SearchBtn,
  VideosSection,
  NoSearchHeading,
  NoSearchDescription,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusView = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchVal: '',
    isBannerVisible: true,
    searchInput: '',
    videosList: [],
    currentView: apiStatusView.initial,
  }

  componentDidMount() {
    this.fetchVideosList()
  }

  onCloseBanner = () => {
    this.setState({isBannerVisible: false})
  }

  fetchVideosList = async () => {
    this.setState({currentView: apiStatusView.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = convertKeysToCamelCase(data.videos)

      this.setState({
        videosList: formattedData,
        currentView: apiStatusView.success,
      })
    } else {
      this.setState({currentView: apiStatusView.failure})
    }
  }

  renderBannerSection = () => (
    <BannerContainer data-testid="banner">
      <button
        data-testid="close"
        onClick={this.onCloseBanner}
        className="close-banner-btn"
      >
        <IoMdClose />
      </button>
      <img
        className="banner-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <p className="banner-text">
        Buy Nxt Watch Premium prepaid plans with UPI
      </p>
      <button className="banner-get-btn">GET IT NOW</button>
    </BannerContainer>
  )

  onChangeSearchVal = event => {
    this.setState({searchVal: event.target.value})
  }

  renderFailureView = () => (
    <div className="home-failure-container">
      <FailureView retryFunction={this.fetchVideosList} />
    </div>
  )

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <div className="no-videos-container">
            <img
              className="no-videos-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchHeading mode={isDark}>
              No Search Results Found
            </NoSearchHeading>
            <NoSearchDescription mode={isDark}>
              Try different key words or remove the search filter.
            </NoSearchDescription>
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    const isEmpty = videosList.length === 0
    return (
      <>
        {isEmpty ? (
          this.renderNoVideosView()
        ) : (
          <VideosSection>
            {videosList.map(eachVideo => (
              <VideoItem key={eachVideo.id} videoObj={eachVideo} />
            ))}
          </VideosSection>
        )}
      </>
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

  updateVideoList = () => {
    const {searchVal} = this.state
    this.setState({searchInput: searchVal}, this.fetchVideosList)
  }

  onSearchVideo = event => {
    if (event.key === 'Enter') {
      this.updateVideoList()
    }
  }

  onSearchByBtn = () => {
    const {searchVal} = this.state
    this.setState({searchInput: searchVal}, this.fetchVideosList)
  }

  render() {
    const {isBannerVisible, searchVal} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <NavBar />
              <HomeBg data-testid="home" mode={isDark}>
                <SidePanel />
                <VidoesContainer>
                  {isBannerVisible && this.renderBannerSection()}
                  <SearchContainer>
                    <SearchBox>
                      <SearchField
                        onKeyDown={this.onSearchVideo}
                        mode={isDark}
                        type="search"
                        onChange={this.onChangeSearchVal}
                        placeholder="Search"
                        value={searchVal}
                      />
                      <SearchBtn
                        data-testid="searchButton"
                        onClick={this.onSearchByBtn}
                        mode={isDark}
                      >
                        <FaSearch />
                      </SearchBtn>
                    </SearchBox>
                  </SearchContainer>
                  {this.renderView()}
                </VidoesContainer>
              </HomeBg>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
