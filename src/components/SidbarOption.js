import React from 'react';

function SidbarOption({Icon,text,active}) {
    return (
        <div className={`sidbar_option ${active && 'active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidbarOption
