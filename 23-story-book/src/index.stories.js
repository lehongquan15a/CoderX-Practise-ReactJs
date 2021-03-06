import React from 'react';
import { Button } from '@storybook/react/demo';

import './index.stories.css';

import Accordion from './components/Accordion';
export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
    <Accordion heading="toggle">Hello I am Quan</Accordion>
);
