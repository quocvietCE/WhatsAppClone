import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ChatListItem from '../../components/ChatListItem';

import {ChatRoomValue, mapDataChatRoom} from '../../constants/types';
import chatRooms from '../../constants/ChatRoom';

const Chats = () => {
  return (
    <View>
      <FlatList
        keyExtractor={({id}) => id}
        data={chatRooms}
        renderItem={({item}) => (
          <ChatListItem chatRoom={mapDataChatRoom(item)} />
        )}
      />
      {/* <ChatListItem chatRoom={mapDataChatRoom(chatRooms[0])} /> */}
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
