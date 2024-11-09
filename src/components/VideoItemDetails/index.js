import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiListPlus} from 'react-icons/bi'
import NavBar from '../NavBar'
import SidePanel from '../SidePanel'
import {
  VideoItemBg,
  ChannelDescription,
  VideoItemSection,
  VideoTitle,
  DetailsContainer,
  SubFeaturesContainer,
  DateText,
  Views,
  DateViewInfo,
  FeaturesContainer,
  FeatureBtn,
  ChannelProfile,
  ChannelContainer,
  SubsicribersText,
  ChannelName,
  ChannelTitleContainer,
} from './styledComponents'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/NxtWatchContext'
import convertKeysToCamelCase from '../../convertKeys'

const apiStatusView = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoObj: {},
    currentView: apiStatusView.initial,
  }

  componentDidMount() {
    this.fetchVideoItem()
  }

  fetchVideoItem = async () => {
    this.setState({currentView: apiStatusView.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()

      const formattedData = convertKeysToCamelCase([{...data.video_details}])
      this.setState({
        videoObj: formattedData[0],
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

  renderFailureView = () => <FailureView retryFunction={this.fetchVideoItem} />

  renderSuccessView = () => {
    const {videoObj} = this.state
    const {videoUrl, title, viewCount, publishedAt, channel, description, id} =
      videoObj
    const profileImageUrl = channel.profile_image_url
    const subscriberCount = channel.subscriber_count
    const {name} = channel

    const date = new Date(publishedAt)

    // Extract year, month, and day
    const year = date.getFullYear()
    const month = date.getMonth() + 1 // getMonth() returns 0-based month, so we add 1
    const day = date.getDate()
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDark,
            onLikeVideo,
            onDisLikeVideo,
            likedVideos,
            disLikedVideos,
            onSaveVideo,
            savedVideos,
          } = value
          const filterLikedVideos = likedVideos.filter(each => each.id === id)
          const filterDisLikedVideos = disLikedVideos.filter(
            each => each.id === id,
          )
          const filterSavedVideos = savedVideos.filter(each => each.id === id)
          let isLiked = false
          let isDisLiked = false
          let isSaved = false
          if (filterLikedVideos.length !== 0) {
            isLiked = true
          }
          if (filterDisLikedVideos.length !== 0) {
            isDisLiked = true
          }
          if (filterSavedVideos.length !== 0) {
            isSaved = true
          }

          const likeVideo = () => {
            onLikeVideo(id)
          }
          const dislikeVideo = () => {
            onDisLikeVideo(id)
          }

          const saveVideo = () => {
            onSaveVideo(videoObj)
          }
          return (
            <VideoItemSection>
              <div className="react-player">
                <ReactPlayer
                  controls
                  height="100%"
                  width="100%"
                  url={videoUrl}
                />
              </div>
              <DetailsContainer>
                <VideoTitle mode={isDark}>{title}</VideoTitle>
                <SubFeaturesContainer>
                  <DateViewInfo>
                    <Views mode={isDark}>{viewCount} views</Views>
                    <DateText mode={isDark}>
                      {formatDistanceToNow(year, month, day)} ago
                    </DateText>
                  </DateViewInfo>
                  <FeaturesContainer>
                    <FeatureBtn
                      onClick={likeVideo}
                      mode={isDark}
                      isToggled={isLiked}
                    >
                      <AiOutlineLike className="feature-icon" />
                      Like
                    </FeatureBtn>
                    <FeatureBtn
                      mode={isDark}
                      onClick={dislikeVideo}
                      isToggled={isDisLiked}
                    >
                      <AiOutlineDislike className="feature-icon" />
                      Dislike
                    </FeatureBtn>
                    <FeatureBtn
                      onClick={saveVideo}
                      mode={isDark}
                      isToggled={isSaved}
                    >
                      <BiListPlus className="feature-icon" />
                      Save
                    </FeatureBtn>
                  </FeaturesContainer>
                </SubFeaturesContainer>
                <hr className="hr-line" />
                <ChannelContainer>
                  <ChannelProfile src={profileImageUrl} />
                  <ChannelTitleContainer mode={isDark}>
                    <ChannelName>{name}</ChannelName>
                    <SubsicribersText>
                      {subscriberCount} subsicribers
                    </SubsicribersText>
                  </ChannelTitleContainer>
                </ChannelContainer>
                <ChannelDescription mode={isDark}>
                  {description}
                </ChannelDescription>
              </DetailsContainer>
            </VideoItemSection>
          )
        }}
      </NxtWatchContext.Consumer>
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
              <VideoItemBg mode={isDark}>
                <SidePanel />

                {this.renderView()}
              </VideoItemBg>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
