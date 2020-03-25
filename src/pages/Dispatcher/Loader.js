import React from "react"
import ContentLoader from "react-content-loader" 

const Loader = () => (
    <ContentLoader 
    speed={1}
    width={600}
    height="100%"
    viewBox="0 0 600 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#d6d6d6"
  >
    <circle cx="94" cy="71" r="55" /> 
    <rect x="192" y="69" rx="2" ry="2" width="147" height="12" /> 
    <rect x="188" y="29" rx="2" ry="2" width="302" height="21" /> 
    <rect x="45" y="163" rx="2" ry="2" width="184" height="15" /> 
    <rect x="45" y="197" rx="2" ry="2" width="184" height="15" /> 
    <rect x="292" y="163" rx="2" ry="2" width="184" height="15" /> 
    <rect x="296" y="198" rx="2" ry="2" width="184" height="15" /> 
    <rect x="191" y="99" rx="2" ry="2" width="91" height="20" />
  </ContentLoader>
)

export default Loader