import {Meta, StoryObj} from '@storybook/react';

import  {Accordion2}  from './Accordion';
import React from "react";
import {Button} from "../OnOff/Button";
import {action} from '@storybook/addon-actions';

const meta: Meta<typeof Accordion2> = {
    component: Accordion2,
};

export default meta;
type Story = StoryObj<typeof Accordion2>;

export const FirstStory: Story={
    args: {
        title: 'hello',
        collapsed: true,
        onClick:()=> {}
    },
}
const onChangeCallback=action("onCHange");
export const CollapsedAccordion=()=>{
    return(
        <div> <Accordion2 title={'CollapsedAccordion'} onClick={onChangeCallback} collapsed={true}/></div>
    )
}
export const OpenedAccordion = ()=>{
    return(
        <div> <Accordion2 title={'OpenedAccordion'} onClick={()=>{}} collapsed={false}/></div>
    )
}

export const Accordion = ()=>{
    const [collapsed, setCollapsed] = React.useState(false)
    return(
        <div> <Accordion2 title={'Accordion'} onClick={()=>{setCollapsed(!collapsed)}} collapsed={collapsed}/></div>
    )
}

