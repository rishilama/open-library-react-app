import React from 'react'

function Title({ title, subTitle }) {
    return (
        <div className="page-title">
            {title && <h1> {title} </h1>}
            {subTitle && <i> {subTitle} </i>}
            <hr />
        </div>
    )
}

export default Title
