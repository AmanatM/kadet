import React from "react"
import ContentLoader from "react-content-loader" 

const Loader = () => (
    <ContentLoader 
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 500 231"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{textAlign: 'center'}}
  >
    <circle cx="256" cy="52" r="35" /> 
    <rect x="177" y="95" rx="0" ry="0" width="168" height="21" /> 
    <rect x="132" y="130" rx="0" ry="0" width="250" height="12" /> 
    <rect x="131" y="153" rx="0" ry="0" width="250" height="14" /> 
    <rect x="132" y="177" rx="0" ry="0" width="250" height="15" /> 
    <rect x="194" y="205" rx="0" ry="0" width="128" height="24" />
  </ContentLoader>
)

export default Loader