import React from 'react'

const PortfolioDetail = (props) => {
    return (
        <div className="">
            <h2>Porfolio Detail for {props.match.params.slug}</h2>
        </div>
    )
}

export default PortfolioDetail