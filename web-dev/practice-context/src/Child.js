import React , { useState } from 'react';

import ChildsChild from './ChildsChild';

const Child = props => {
    
    return(
        <div color = "red" >
            <ChildsChild></ChildsChild>

        </div>
    );
};
export default Child;