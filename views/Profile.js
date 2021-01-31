import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Avatar, Card, ListItem} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import {useTag} from '../hooks/ApiHooks';
import {uploadsUrl} from '../utils/Variables';

const Profile = ({navigation}) => {
  const {isLoggedIn, setIsLoggedIn, user} = useContext(MainContext);
  const [avatar, setAvatar] = useState('http://placekitten.com/640');
  const {getAvatar} = useTag();
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    if (!isLoggedIn) {
      // this is to make sure isLoggedIn has changed, will be removed later
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const avatarList = await getFilesByTag('avatar_' + user.user_id);
        if(avatarList.length > 0) {
        setAvatar(uploadsUrl + avatarList.pop().filename);
        }
      } catch (error) {
        console.error(error.message);
      }
  };

  return (
    <Card>
      <Card.Title>
        <Text h1>{user.username}</Text>
      </Card.Title>
      <Card.Image
        source={{uri: 'http://placekitten.com/400'}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <ListItem>
        <Avatar icon={{name: 'user', type: 'font-awensome', color: 'black'}} />
        <Text>{user.full_name}</Text>
      </ListItem>
      <Button title={'Logout'} onPress={logout} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
