import React from 'react';
import {Text, View, Image} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles';
import {ChatRoom} from '../../constants/types';

const ChatListItem = ({chatRoom = ChatRoom}) => {
  console.log('chatRoom: ', chatRoom);

  const user = chatRoom.users[0];
  console.log('user: ', user);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{uri: user.imageUri}} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      <Text style={styles.time}>
        {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
      </Text>
    </View>
  );
};

export default ChatListItem;
