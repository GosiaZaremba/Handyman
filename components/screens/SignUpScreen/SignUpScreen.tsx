import React, {useState} from 'react';
import {SignUpTemplate} from '../../templates';
import ImagePicker from 'react-native-image-crop-picker';

export const SignUpScreen: React.FC = () => {
  const onPressSignUp = (
    fullName?: string,
    email?: string,
    password?: string,
  ) => {
    console.log('SignInScreen', fullName, email, password, photo.uri);
  };
  const onPressFacebook = () => {
    console.log('Log in with Facebook');
  };
  const onPressTwitter = () => {
    console.log('Log in with Twitter');
  };

  const onPressGoogle = () => {
    console.log('Log in with Google');
  };

  const [photo, setPhoto] = useState<any>(
    require('../../../assets/jpg/profile_photo.jpg'),
  );
  const onPressAddPhoto = () => {
    console.log('Add photo');
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      setPhoto({uri: image.path});
      console.log('photo', photo);
    });
  };

  const onPressGoToSignIn = () => {
    console.log('Going to SignUpScreen');
  };
  return (
    <SignUpTemplate
      onPressSignUp={onPressSignUp}
      onPressAddPhoto={onPressAddPhoto}
      onPressFacebook={onPressFacebook}
      onPressTwitter={onPressTwitter}
      onPressGoogle={onPressGoogle}
      onPressGoToSignIn={onPressGoToSignIn}
      photo={photo}
    />
  );
};
