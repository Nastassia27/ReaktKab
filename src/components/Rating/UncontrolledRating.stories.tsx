import {Meta, StoryObj} from '@storybook/react';

import {UncontrolledRating} from './UncontrolledRating';
import React from "react";

export default  {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};


export const UncontRating=()=>{
    return(
        <div>  <UncontrolledRating />
        </div>
    )
}

