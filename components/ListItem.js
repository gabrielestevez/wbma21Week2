import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/Variables';
import {Avatar, ListItem as RNEListItem} from 'react-native-elements';

const ListItem = ({navigation, singleMedia}) => {
  // console.log(props);
  return (
    <RNEListItem
      bottomDivider
      onPress={() => {
        navigation.navigate('Single');
      }}
    >
      <Avatar
        size="large"
        square
        source={{uri: uploadsUrl + singleMedia.thumbnails.w160}}
      />
      <RNEListItem.Title h4>{singleMedia.title}</RNEListItem.Title>
      <RNEListItem.Subtitle>{singleMedia.description}</RNEListItem.Subtitle>
      <RNEListItem.Content></RNEListItem.Content>
      <RNEListItem.Chevron></RNEListItem.Chevron>
    </RNEListItem>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
    borderRadius: 6,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 6,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
