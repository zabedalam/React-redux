import React from 'react'

function Button({handleClick,name,style}) {
    return (
        <div>
            <button onClick={handleClick} style={style}>{name}</button>
        </div>
    )
}

export default Button
