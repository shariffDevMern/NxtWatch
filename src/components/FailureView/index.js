import NxtNxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  RetryButton,
  FailureDescription,
  FailureHeading,
  FailureImg,
} from './styledComponents'

const FailureView = props => {
  const {retryFunction} = props
  return (
    <NxtNxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <div className="failure-container">
            <FailureImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading mode={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription mode={isDark}>
              We are having some trouble completing your request.
              <br />
              Please try again later.
            </FailureDescription>
            <RetryButton onClick={retryFunction}>Retry</RetryButton>
          </div>
        )
      }}
    </NxtNxtWatchContext.Consumer>
  )
}

export default FailureView
