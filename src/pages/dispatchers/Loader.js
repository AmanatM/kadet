import React from "react"
import ContentLoader from "react-content-loader" 

const Loader = () => {

    let tiles = []

    for(let i = 30; i <= 1000; i+=40) {
        tiles.push(<rect key={i+40} x="11" y={i} rx="0" ry="0" width="100%" height="30" />)
    }

    return (
        <ContentLoader 
        speed={1}
        width="100%"
        height="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#d6d6d6"
    >
        {tiles ? tiles.map(item => item) : null}

    </ContentLoader>
    )
}

export default Loader