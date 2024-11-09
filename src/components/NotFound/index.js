import {NotFoundBg, NotFoundImg, Heading, Description} from './styledComponents'

const NotFound = () => (
  <NotFoundBg>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Description>
      we are sorry, the page you requested could not be found.
    </Description>
  </NotFoundBg>
)

export default NotFound
