import React from 'react'
//asta il folosim la nregistrare doar
export default function Success({ success }) {
    return (
        <div>
            <div className="alert alert-success" role="alert" style={{textAlign: "center"}}>
                {success}
            </div>
        </div>
    )
}