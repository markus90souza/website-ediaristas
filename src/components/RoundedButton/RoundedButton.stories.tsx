import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RoundedButton } from '.';

export default {
    title: 'Components/RoundedButton',
    component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args) => (
    <RoundedButton {...args}>Click Here</RoundedButton>
);

export const Default = Template.bind({});
Default.args = {
    variant: 'contained'
};
