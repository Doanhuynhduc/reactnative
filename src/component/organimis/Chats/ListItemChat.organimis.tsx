import React from 'react';

import {
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export const ListItemChat = (item: any) => {
  const [data, setData] = React.useState(item.data.item);
  console.log(data);
  return (
    <TouchableOpacity>
      <View style={styles.conversationItem}>
        <View style={styles.Img}>
          <Image
            style={styles.userImg}
            source={{
              uri: data.userImages,
            }}
          />
        </View>
        <View style={styles.infoChat}>
          <View style={styles.topChat}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.userName}>{data.userName}</Text>
              {data.isOnline ? (
                <View style={styles.statusOnline} />
              ) : (
                <View style={styles.statusOffline} />
              )}
            </View>
            <Text style={styles.time}>{data.time}</Text>
          </View>
          <Text style={styles.contentText}>{data.conversation}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
