import React from 'react'
import { Link } from "react-router-dom"

const NoMatch = () => {
    return (
        <div>
            <h2>We couldn't find that page</h2>
            <Link to="./">Home</Link>
        </div>
    )
}

export default NoMatch