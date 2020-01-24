import React from 'react';

import Header from './Header';
import Body from './Body'

function MainLayout(){
    return(
        <div>
            <p><Header/></p>
            <p><Body/></p>
        </div>
    )
}

export default MainLayout;