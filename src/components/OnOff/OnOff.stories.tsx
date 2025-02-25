import {Meta, StoryObj} from '@storybook/react';

import {OnOff} from './OnOff';
import React from "react";
import {action} from '@storybook/addon-actions';

export default  {
    title: 'OnOff',
    component: OnOff,
};

const callback=action("was clicked")
export const OnMode = ()=>{
    return(
        <div> <OnOff clicked={true} setClicked={callback} />
        </div>
    )
}
export const OffMode = ()=>{
    return(
        <div> <OnOff clicked={false} setClicked={callback} />
        </div>
    )
}


export const OnOffControlled = ()=>{
    const [onOff, setOnOff] = React.useState<boolean>(true);
    return(
        <div> <OnOff clicked={onOff} setClicked={setOnOff} />
        </div>
    )
}

