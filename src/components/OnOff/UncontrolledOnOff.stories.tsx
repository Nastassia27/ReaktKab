import {Meta, StoryObj} from '@storybook/react';

import React from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default  {
    title: 'UncontrolledOnOff',
    component:  UncontrolledOnOff,
};

export const OnMode = ()=>{
    return(
        <div>  <UncontrolledOnOff />
        </div>
    )
}
