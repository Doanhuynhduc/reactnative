import React from 'react';

//React - Native
import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import {StatusBarCustom} from '../../component/atom';
import {HeaderTop} from '../../component/molecules';
import {ListItemChat} from '../../component/organimis/Chats/ListItemChat.organimis';

const fakeData = [
  {
    id: '1',
    userImages:
      'https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2021/7/26/photo1627291334779-1627291334869819922050.png',
    userName: 'Pssychic Jach',
    time: '4:50 AM',
    conversation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus impedit consequatur doloribus qui, quidem eaque nihil blanditiis,culpa maxime aliquam officia.',
    isOnline: true,
  },
  {
    id: '2',
    userImages:
      'https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2021/7/26/photo1627291334779-1627291334869819922050.png',
    userName: 'Thanh phương',
    time: '4:50 AM',
    conversation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus impedit consequatur doloribus qui, quidem eaque nihil blanditiis,culpa maxime aliquam officia.',
    isOnline: false,
  },
  {
    id: '3',
    userImages:
      'https://vnn-imgs-a1.vgcloud.vn/streaming1.danviet.vn/upload/4-2019/images/2019-10-22/1-1571722069-width640height360.jpg',
    userName: 'Huynh duc',
    time: '3:22 AM',
    conversation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus impedit consequatur doloribus qui, quidem eaque nihil blanditiis,culpa maxime aliquam officia.',
    isOnline: false,
  },
  {
    id: '4',
    userImages:
      'https://d3u2xd68tejot5.cloudfront.net/avatar/thumbs/av.65.5e1eba47ee17d.1579072071.jpg',
    userName: 'Pssychic Jach',
    time: '2 min ago',
    conversation:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus impedit consequatur doloribus qui, quidem eaque nihil blanditiis,culpa maxime aliquam officia.',
    isOnline: true,
  },
];

const Chat = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBarCustom backgroundColor={'#C75FD0'} />
      <HeaderTop>
        <View></View>
        <View>
          <Text style={styles.text}>Chats</Text>
        </View>
        <View>
          <Text style={[styles.text]}>0.00$</Text>
        </View>
      </HeaderTop>
      <FlatList
        data={fakeData}
        renderItem={item => <ListItemChat data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Chat;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  Img: {
    paddingHorizontal: 10,
  },
  userImg: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  infoChat: {
    width: '73%',
  },
  topChat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusOnline: {
    backgroundColor: 'green',
    width: 6,
    height: 6,
    marginLeft: 8,
    borderRadius: 50,
  },
  statusOffline: {
    backgroundColor: 'gray',
    width: 6,
    height: 6,
    marginLeft: 8,
    borderRadius: 50,
  },
  bottomChat: {
    width: '90%',
  },
  time: {
    fontSize: 14,
    color: 'gray',
  },
  contentText: {
    color: 'gray',
    fontSize: 14,
  },
});
