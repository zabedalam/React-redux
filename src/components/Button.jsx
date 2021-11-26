import React from 'react'

function Button({handleClick,name,style}) {
    return (
        <div style={{display:'inline-block'}}>
            <button onClick={handleClick} style={style}>{name}</button>
        </div>
    )
}

export default Button
