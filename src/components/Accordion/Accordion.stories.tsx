import {Meta, StoryObj} from '@storybook/react';

import {Accordion} from './Accordion';
import React from "react";
import {Button} from "../OnOff/Button";
import {action} from '@storybook/addon-actions';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        title: 'hello',
        collapsed: true,
        onClick: () => {
        }
    },
}
const onChangeCallback = action("onCHange");
const onCLickCallback = action("some item was clicked");
export const CollapsedAccordion = () => {
    return (
        <div><Accordion onClick={onCLickCallback} items={[]} title={'CollapsedAccordion'}
                        onClickTitle={onChangeCallback} collapsed={true}/></div>
    )
}
export const OpenedAccordion = () => {
    return (
        <div><Accordion onClick={onCLickCallback}
                        items={[{title: 'dimych', value: 1}, {title: 'nastya', value: 2}, {title: 'katya', value: 3}]}
                        title={'OpenedAccordion'} onClickTitle={() => {
        }} collapsed={false}/></div>
    )
}

export const AccordionNew = () => {
    const [collapsed, setCollapsed] = React.useState(false)
    return (
        <div><Accordion onClick={(id) => alert('user' + id + 'should be happy')}
                        items={[{title: 'dimych', value: 1}, {title: 'nastya', value: 2}, {title: 'katya', value: 3}]}
                        title={'Accordion'} onClickTitle={() => {
            setCollapsed(!collapsed)
        }} collapsed={collapsed}/></div>
    )
}

