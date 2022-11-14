import React from 'react';
import {WelcomeTemplate} from '../../templates';

export const WelcomeScreen: React.FC = () => {
  const onPressGetStarted = () => {
    console.log('Welcome Screen - get started button');
  };

  return <WelcomeTemplate onPressGetStarted={onPressGetStarted} />;
};
