import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  selectedMenuItem: '',
  toggleTheme: () => {},
  changeMenuItem: () => {},
  navItemsList: [],
  disLikedVideos: [],
  likedVideos: [],
  savedVideos: [],
  onLogoutPage: () => {},
  onLikeVideo: () => {},
  onDisLikeVideo: () => {},
  onSaveVideo: () => {},
})

export default NxtWatchContext
