import React from 'react'
import ContentLoader from 'react-content-loader'


const rowNumbers = [...Array(20).keys()]

const Loader = props => (

    
    <ContentLoader 
        speed={2}
        width="100%"
        height="70vh"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >

        {rowNumbers.map(i => (
            <rect key={i} x="0px" y={`${(i+1) * 45 - 50}px`} rx="0" ry="0" width="100%" height="35" /> 
        ))}



  </ContentLoader>
)


export default Loader