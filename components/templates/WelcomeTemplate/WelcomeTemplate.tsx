import React from 'react';
import {ImageBackground, View} from 'react-native';
import {ButtonWhite, TextLarge, TextSmall} from '../../atoms';
import {Logo} from '../../molecules';
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
        <View style={styles.logoView}>
          <Logo />
          <TextLarge text={'Welcome!'} fontColor={'#fff'} />
          <TextSmall
            fontColor={'#fff'}
            text={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry.'
            }
          />
        </View>
        <View style={styles.button}>
          <ButtonWhite
            buttonText={'Get Started ->'}
            onPress={onPressGetStarted}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
