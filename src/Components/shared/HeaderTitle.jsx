import React from 'react';

function HeaderTitle(props){
    return(
        <div>
            <h1>This is the header</h1>
            {props.title}
            {props.tagline}
        </div>
    )
}

export default HeaderTitle;