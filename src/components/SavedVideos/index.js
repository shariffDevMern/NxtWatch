import {FaSave} from 'react-icons/fa'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavedVideosBg,
  SavedVideosSectionContainer,
  NoVideosImg,
  EmptyBg,
  Heading,
  Description,
  SavedVideosList,
} from './styledComponents'
import NavBar from '../NavBar'
import SidePanel from '../SidePanel'
import VideoItem from '../VideoItem'
import TopPanel from '../TopPanel'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, savedVideos} = value
      const renderNoVideosView = () => (
        <EmptyBg>
          <NoVideosImg
            alt="no saved videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          />
          <Heading mode={isDark}>No Saved Videos Found</Heading>
          <Description mode={isDark}>
            You can save your videos while watching them.
          </Description>
        </EmptyBg>
      )

      const renderView = () => (
        <SavedVideosList>
          {savedVideos.map(eachVideo => (
            <VideoItem mdRow="mdRow" key={eachVideo.id} videoObj={eachVideo} />
          ))}
        </SavedVideosList>
      )

      return (
        <>
          <NavBar />
          <SavedVideosBg mode={isDark}>
            <SidePanel />
            <SavedVideosSectionContainer>
              {savedVideos.length === 0 ? (
                renderNoVideosView()
              ) : (
                <>
                  <TopPanel
                    iconItem={{icon: FaSave}}
                    title="Saved Videos"
                    mode={isDark}
                  />
                  {renderView()}
                </>
              )}
            </SavedVideosSectionContainer>
          </SavedVideosBg>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
