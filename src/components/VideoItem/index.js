import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  Video,
  Thumbnail,
  VideoDetailsContainer,
  TitleContainer,
  ChannelImage,
  VideoTitle,
  TextSection,
  DateText,
  Views,
  ChannelName,
  ViewsContainer,
} from './styledComponents'

const VideoItem = props => {
  const {videoObj, mdRow} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt, id} = videoObj
  const profileImageUrl = channel.profile_image_url
  const {name} = channel
  const date = new Date(publishedAt)

  // Extract year, month, and day
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // getMonth() returns 0-based month, so we add 1
  const day = date.getDate()

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, changeMenuItem} = value
        const onChangeMenuItem = () => {
          changeMenuItem('')
        }
        return (
          <Link
            onClick={onChangeMenuItem}
            to={`/videos/${id}`}
            className="link-route"
          >
            <Video rowValue={mdRow}>
              <Thumbnail
                rowValue={mdRow}
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoDetailsContainer rowValue={mdRow}>
                <TitleContainer>
                  <ChannelImage alt="channel logo" src={profileImageUrl} />
                  <TextSection>
                    <VideoTitle mode={isDark}>{title}</VideoTitle>
                    <ViewsContainer>
                      <ChannelName mode={isDark}>{name}</ChannelName>
                      <Views mode={isDark}>{viewCount} views</Views>
                      <DateText mode={isDark}>
                        {formatDistanceToNow(year, month, day)} ago
                      </DateText>
                    </ViewsContainer>
                  </TextSection>
                </TitleContainer>
              </VideoDetailsContainer>
            </Video>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
