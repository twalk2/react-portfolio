import React from 'react'
import { Link } from "react-router-dom"

const BlogComponent = () => {
    return (
        <div>
            <h2>Blog Page</h2>

            <div>
                <Link to="/about">Read more about me!</Link>
            </div>
        </div>
    )
}

export default BlogComponent