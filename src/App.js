import './App.css'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import {Component} from 'react'
import {FaFire, FaSave} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {IoMdHome} from 'react-icons/io'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here

const navItemsList = [
  {id: 'HOME', icon: IoMdHome, displayText: 'Home', route: '/'},
  {id: 'TRENDING', icon: FaFire, displayText: 'Trending', route: '/trending'},
  {
    id: 'GAMING',
    icon: SiYoutubegaming,
    displayText: 'Gaming',
    route: '/gaming',
  },
  {
    id: 'SAVED VIDEOS',
    icon: FaSave,
    displayText: 'Saved videos',
    route: '/saved-videos',
  },
]

let currentPath

const getCurrentMenu = () => {
  currentPath = localStorage.getItem('currentMenuItem')

  if (currentPath === null) {
    return navItemsList[0].id
  }
  const filteredNavItemsList = navItemsList.filter(
    eachItem => eachItem.route === currentPath,
  )
  if (filteredNavItemsList.length !== 0) {
    return filteredNavItemsList[0].id
  }
  return ''
}

const getVideosArray = keyName => {
  const videosList = localStorage.getItem(keyName)
  if (videosList !== null) {
    return JSON.parse(videosList)
  }
  return []
}

const getThemeValue = () => {
  const theme = localStorage.getItem('theme')
  if (theme !== null) {
    return JSON.parse(theme)
  }
  return false
}

class App extends Component {
  state = {
    isDark: getThemeValue(),
    selectedMenuItem: getCurrentMenu(),
    likedVideos: getVideosArray('likedVideos'),
    disLikedVideos: getVideosArray('disLikedVideos'),
    savedVideos: getVideosArray('savedVideosList'),
  }

  componentDidMount() {
    this.controlPathByNav()
  }

  onLogoutPage = () => {
    localStorage.setItem('currentMenuItem', '/')
    this.setState({selectedMenuItem: navItemsList[0].id})
  }

  // setSelectedMenuByNav = pathname => {
  //   if (pathname !== '/login') {
  //     const filteredNavItemsList = navItemsList.filter(
  //       eachItem => eachItem.route === pathname,
  //     )

  //     localStorage.setItem('currentMenuItem', pathname)
  //     this.setState({selectedMenuItem: filteredNavItemsList[0].id})
  //   }
  // }

  controlPathByNav = () => {
    window.addEventListener('popstate', event => {
      const currentPathbyNav = window.location.pathname
      localStorage.setItem('currentMenuItem', currentPathbyNav)
      const filteredNavItemsList = navItemsList.filter(
        eachItem => eachItem.route === currentPathbyNav,
      )
      if (filteredNavItemsList.length !== 0) {
        this.setState({selectedMenuItem: filteredNavItemsList[0].id})
      } else {
        this.setState({selectedMenuItem: ''})
      }

      // Optional: handle specific paths
    })
  }

  // setSelectedMenu = () => {
  //   const {location} = this.props
  //   const {pathname} = location
  //   if (pathname !== '/login') {
  //     const filteredNavItemsList = navItemsList.filter(
  //       eachItem => eachItem.route === pathname,
  //     )
  //     localStorage.setItem('currentMenuItem', pathname)
  //     this.setState({selectedMenuItem: filteredNavItemsList[0].id})
  //   }
  // }

  changeMenuItem = id => {
    this.setState({selectedMenuItem: id}, this.setItemInLocalByClick)
  }

  onLikeVideo = id => {
    const {disLikedVideos, likedVideos} = this.state
    const filteredLikedVideos = likedVideos.filter(each => each.id === id)
    if (filteredLikedVideos.length > 0) {
      const removedLikedVideo = filteredLikedVideos.filter(
        each => each.id !== id,
      )
      this.setState({likedVideos: removedLikedVideo})
    } else {
      const filteredDisLikedVideos = disLikedVideos.filter(
        each => each.id !== id,
      )
      this.setState(prevState => ({
        disLikedVideos: filteredDisLikedVideos,
        likedVideos: [...prevState.likedVideos, {id}],
      }))
    }
  }

  onDisLikeVideo = id => {
    const {disLikedVideos, likedVideos} = this.state
    const filteredDisLikedVideos = disLikedVideos.filter(each => each.id === id)
    if (filteredDisLikedVideos.length > 0) {
      const removedDisLikedVideo = filteredDisLikedVideos.filter(
        each => each.id !== id,
      )
      this.setState({disLikedVideos: removedDisLikedVideo})
    } else {
      const filteredLikedVideos = likedVideos.filter(each => each.id !== id)
      this.setState(prevState => ({
        likedVideos: filteredLikedVideos,
        disLikedVideos: [...prevState.disLikedVideos, {id}],
      }))
    }
  }

  saveVideosInLocal = () => {
    const {savedVideos} = this.state
    console.log(savedVideos)
    localStorage.setItem('savedVideosList', savedVideos)
  }

  onSaveVideo = obj => {
    const {savedVideos} = this.state

    const filteredSavedVideos = savedVideos.filter(each => each.id === obj.id)
    if (filteredSavedVideos.length > 0) {
      const removeSavedVideo = savedVideos.filter(each => each.id !== obj.id)
      this.setState({savedVideos: removeSavedVideo})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, obj],
      }))
    }
  }

  setItemInLocalByClick = () => {
    const {location} = this.props
    const {pathname} = location

    localStorage.setItem('currentMenuItem', pathname)
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  storeData = () => {
    const {isDark, likedVideos, disLikedVideos, savedVideos} = this.state
    localStorage.setItem('savedVideosList', JSON.stringify(savedVideos))
    localStorage.setItem('theme', JSON.stringify(isDark))
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos))
    localStorage.setItem('disLikedVideos', JSON.stringify(disLikedVideos))
  }

  render() {
    const {isDark, selectedMenuItem, likedVideos, disLikedVideos, savedVideos} =
      this.state
    this.storeData()

    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          onLikeVideo: this.onLikeVideo,
          likedVideos,
          onDisLikeVideo: this.onDisLikeVideo,
          disLikedVideos,
          savedVideos,
          onSaveVideo: this.onSaveVideo,
          selectedMenuItem,
          toggleTheme: this.toggleTheme,
          changeMenuItem: this.changeMenuItem,
          navItemsList,
          onLogoutPage: this.onLogoutPage,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default withRouter(App)
