import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/Variables';
import {Avatar, Card, ListItem} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import moment from 'moment';

const Single = ({route}) => {
  const {file} = route.params;
  return (
    <Card>
      <Card.Title h4>{file.title}</Card.Title>
      <Card.Title>{moment(file.time_added).format('LLL')}</Card.Title>
      <Card.Divider />
      <Card.Image
        source={{url: uploadsUrl + file.filename}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Card.Divider />
      <Text style={{marginBottom: 10}}>{file.description}</Text>
      <ListItem>
        <Avatar source={{uri: 'https: //placekitten.com/180'}}></Avatar>
        <Text>Ownername</Text>
      </ListItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  descriptio: {
    marginBottom: 10,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
