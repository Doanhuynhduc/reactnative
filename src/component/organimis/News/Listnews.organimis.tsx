import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
//Navigator
import {navigate} from '../../../navigators/mainStack';
const {width, height} = Dimensions.get('screen');
export const ListNews = (item: any) => {
  const [data, setData] = React.useState(item.data);

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: '#FEF5E6'}]}
      onPress={() => navigate('newscontent', {data: data})}>
      <View style={styles.topListItem}>
        <Text style={styles.dayTime}>{data.item.day}</Text>
        <Text style={styles.new}>New</Text>
      </View>
      <View style={styles.img}>
        <Image
          style={styles.imageItem}
          source={{
            uri: data.item.images,
          }}
        />
      </View>
      <View>
        <Text style={styles.titleItem}>{data.item.title}</Text>
        <Text style={styles.contentItem}>{data.item.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  topListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    marginVertical: 7,
  },
  imageItem: {
    width: '100%',
    height: 180,
  },
  new: {
    backgroundColor: '#FF454A',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
    color: '#ffffff',
  },
  dayTime: {
    color: 'gray',
  },
  titleItem: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentItem: {
    color: 'gray',
    fontSize: 14,
  },
});
