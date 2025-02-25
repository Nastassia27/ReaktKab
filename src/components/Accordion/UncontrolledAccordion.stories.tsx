import {Meta, StoryObj} from '@storybook/react';

import {UncontrolledAccordion} from './UncontrolledAccordion';
import React from "react";

import {action} from '@storybook/addon-actions';

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
};

export default meta;



const ModeChanging=action("onCHange");
export const UncAccordion=()=>{
    return(
        <div> <UncontrolledAccordion title={'Uncontrolled'} /></div>
    )
}

