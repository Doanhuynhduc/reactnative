import React from 'react';

//React - Native
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {StatusBarCustom} from '../../component/atom';
import {HeaderTop} from '../../component/molecules';
import {ListNews} from '../../component/organimis/News/Listnews.organimis';

const fakeData = [
  {
    id: '1',
    day: '23-10-96',
    images:
      'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
    title: 'Bài viết một nè các bạn',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatem ea a maiores rem atque ex quo facere voluptatum ullam pariatur odit, possimus velit natus itaque temporibus veniam, nihil sequi.',
  },
  {
    id: '2',
    day: '23-10-96',
    images:
      'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
    title: 'Bài viết một nè các bạn',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatem ea a maiores rem atque ex quo facere voluptatum ullam pariatur odit, possimus velit natus itaque temporibus veniam, nihil sequi.',
  },
  {
    id: '3',
    day: '23-10-96',
    images:
      'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
    title: 'Bài viết một nè các bạn',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatem ea a maiores rem atque ex quo facere voluptatum ullam pariatur odit, possimus velit natus itaque temporibus veniam, nihil sequi.',
  },
  {
    id: '4',
    day: '23-10-96',
    images:
      'https://cdn.thanhtrungmobile.vn/thanhtrungmobile-vn/2019/12/hinh-nen-ngua-dep-cho-dien-thoai-1.jpg',
    title: 'Bài viết bốn nè các bạn',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatem ea a maiores rem atque ex quo facere voluptatum ullam pariatur odit, possimus velit natus itaque temporibus veniam, nihil sequi.',
  },
  {
    id: '5',
    day: '23-10-96',
    images:
      'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
    title: 'Bài viết một nè các bạn',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatem ea a maiores rem atque ex quo facere voluptatum ullam pariatur odit, possimus velit natus itaque temporibus veniam, nihil sequi.',
  },
];

const News = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBarCustom backgroundColor={'#C75FD0'} />
      <HeaderTop>
        <View></View>
        <View>
          <Text style={styles.text}>News</Text>
        </View>
        <View>
          <Text style={[styles.text]}>0.00$</Text>
        </View>
      </HeaderTop>
      <FlatList
        data={fakeData}
        renderItem={item => <ListNews data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default News;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
});
