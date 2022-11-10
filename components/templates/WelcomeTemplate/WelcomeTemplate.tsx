import React from 'react';
import {ImageBackground, View} from 'react-native';
import {ButtonWhite, TextLarge, TextSmall} from '../../atoms';
import {Logo} from '../../molecules/Logo/Logo';
import styles from './WelcomeTemplate.styles';

export type Props = {
  onPressGetStarted: () => void;
};
export const WelcomeTemplate: React.FC<Props> = ({onPressGetStarted}) => {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        source={require('../../../assets/png/01_background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View>
          <Logo />
          <TextLarge text={'Welcome'} />
          <TextSmall
            text={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
          />
        </View>
        <View>
          <ButtonWhite
            buttonText={'Get Started ->'}
            onPress={onPressGetStarted}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
