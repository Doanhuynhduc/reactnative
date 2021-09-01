import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

export const NewContent = () => {
  return (
    <View>
      <View style={styles.img}>
        <Text style={styles.dayTime}>day</Text>
        <Image
          style={styles.imageItem}
          source={{
            uri: '',
          }}
        />
      </View>
      <View>
        <Text style={styles.titleItem}>title</Text>
        <Text style={styles.contentItem}>title contetn</Text>
      </View>
    </View>
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
