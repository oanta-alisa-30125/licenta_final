import React from 'react'

export default function Error({error}) {
    return (
        <div>
            <div className="alert alert-dark" role="alert" style={{textAlign: "center"}}>
                {error}
            </div>
        </div>
    )
}
