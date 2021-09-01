import React from 'react';

//React - Native
import {
  Text,
  StyleSheet,
  View,
  SectionList,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {StatusBarCustom} from '../../component/atom';
import {HeaderTop} from '../../component/molecules';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');
const Advisor = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBarCustom backgroundColor={'#C75FD0'} />
      <HeaderTop>
        <View></View>
        <View>
          <Text style={styles.text}>Advisor</Text>
        </View>
        <View>
          <Text style={[styles.text]}>0.00$</Text>
        </View>
      </HeaderTop>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.search}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.banner}>
          <Image
            style={styles.imageBaner}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/thumbnails/001/338/261/small/black-friday-sale-banner-design-liquid-banner-free-vector.jpg',
            }}
          />
        </View>
        <View style={styles.newAdviser}>
          <Text style={styles.textTitle}>New Advisor</Text>
          <Text style={styles.textSeeAll}>See All</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.scrollHori}>
            <View style={styles.imgHori}>
              <Image
                style={styles.userHori}
                source={{
                  uri: 'https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2021/7/26/photo1627291334779-1627291334869819922050.png',
                }}
              />
            </View>
            <Text style={styles.nameHori}>Header Dude </Text>
            <Text style={styles.status}>Online </Text>
          </View>
          <View style={styles.scrollHori}>
            <View style={styles.imgHori}>
              <Image
                style={styles.userHori}
                source={{
                  uri: 'https://vnn-imgs-a1.vgcloud.vn/streaming1.danviet.vn/upload/4-2019/images/2019-10-22/1-1571722069-width640height360.jpg',
                }}
              />
            </View>
            <Text style={styles.nameHori}>Header Dude </Text>
            <Text style={styles.status}>Online </Text>
          </View>
          <View style={styles.scrollHori}>
            <View style={styles.imgHori}>
              <Image
                style={styles.userHori}
                source={{
                  uri: 'https://d3u2xd68tejot5.cloudfront.net/avatar/thumbs/av.65.5e1eba47ee17d.1579072071.jpg',
                }}
              />
            </View>
            <Text style={styles.nameHori}>Header Dude </Text>
            <Text style={styles.status}>Online </Text>
          </View>
          <View style={styles.scrollHori}>
            <View style={styles.imgHori}>
              <Image
                style={styles.userHori}
                source={{
                  uri: 'https://cms.lichngaytot.com/medias/standard/2015/8/28/Ung-nghiem-kinh-hoang-nhung-loi-tien-tri-ve-nam-2015-hinh-anh.jpg',
                }}
              />
            </View>
            <Text style={styles.nameHori}>Header Dude </Text>
            <Text style={styles.status}>Online </Text>
          </View>
        </ScrollView>
        <View style={styles.newAdviser}>
          <Text style={styles.textTitle}>Top Rating</Text>
        </View>
        <View style={styles.listUserVertical}>
          <View style={styles.userVideo}>
            <Image
              style={styles.video}
              source={{
                uri: 'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
              }}
            />
          </View>
          <View style={styles.userDetailContaint}>
            <View style={styles.userDetail}>
              <View style={{marginRight: 10}}>
                <Image
                  style={styles.imgUserVer}
                  source={{
                    uri: 'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
                  }}
                />
              </View>
              <View>
                <View style={styles.nameDetail}>
                  <Text style={styles.nameVer}>Header Dude </Text>
                  <Text style={[styles.status, {marginLeft: 10}]}>Online </Text>
                </View>
                <Text style={styles.cate}>Love & Relationships </Text>
                <View style={{flexDirection: 'row'}}>
                  <AntDesign name={'star'} color={'orange'} />
                  <AntDesign name={'star'} color={'orange'} />
                  <AntDesign name={'star'} color={'orange'} />
                  <AntDesign name={'star'} color={'orange'} />
                  <AntDesign name={'star'} color={'orange'} />
                </View>
              </View>
            </View>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              placeat fuga doloremque minima enim quidem similique a ad et,
              voluptatem, in itaque numquam eaque voluptas voluptates eos maxime
              molestias tenetur.
            </Text>
            <View style={styles.price}>
              <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 5,
                  }}>
                  <Text style={styles.textPrice}>14,99 $/min</Text>
                  <Text style={styles.textPriceSale}>11,99 $/min</Text>
                </View>
                <TouchableOpacity style={styles.buttonCall1}>
                  <View style={styles.contentBtn}>
                    <AntDesign name={'customerservice'} color={'white'} />
                    <Text style={styles.textCall}>Voice chat</Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.discount}>-20% +3 min free </Text>
              </View>
              <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 5,
                  }}>
                  <Text style={styles.textPrice}>14,99 $/min</Text>
                  <Text style={styles.textPriceSale}>11,99 $/min</Text>
                </View>
                <TouchableOpacity style={styles.buttonCall2}>
                  <View style={styles.contentBtn}>
                    <AntDesign name={'message1'} color={'white'} />
                    <Text style={styles.textCall}>Start chat</Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.discount}>-20% +3 min free </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.listUserVertical}>
            <View style={styles.userVideo}>
              <Image
                style={styles.video}
                source={{
                  uri: 'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
                }}
              />
            </View>
            <View style={styles.userDetailContaint}>
              <View style={styles.userDetail}>
                <View style={{marginRight: 10}}>
                  <Image
                    style={styles.imgUserVer}
                    source={{
                      uri: 'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
                    }}
                  />
                </View>
                <View>
                  <View style={styles.nameDetail}>
                    <Text style={styles.nameVer}>Header Dude </Text>
                    <Text style={[styles.status, {marginLeft: 10}]}>
                      Online{' '}
                    </Text>
                  </View>
                  <Text style={styles.cate}>Love & Relationships </Text>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign name={'star'} color={'orange'} />
                    <AntDesign name={'star'} color={'orange'} />
                    <AntDesign name={'star'} color={'orange'} />
                    <AntDesign name={'star'} color={'orange'} />
                    <AntDesign name={'star'} color={'orange'} />
                  </View>
                </View>
              </View>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                placeat fuga doloremque minima enim quidem similique a ad et,
                voluptatem, in itaque numquam eaque voluptas voluptates eos
                maxime molestias tenetur.
              </Text>
              <View style={styles.price}>
                <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Text style={styles.textPrice}>14,99 $/min</Text>
                    <Text style={styles.textPriceSale}>11,99 $/min</Text>
                  </View>
                  <TouchableOpacity style={styles.buttonCall1}>
                    <View style={styles.contentBtn}>
                      <AntDesign name={'customerservice'} color={'white'} />
                      <Text style={styles.textCall}>Voice chat</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.discount}>-20% +3 min free </Text>
                </View>
                <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Text style={styles.textPrice}>14,99 $/min</Text>
                    <Text style={styles.textPriceSale}>11,99 $/min</Text>
                  </View>
                  <TouchableOpacity style={styles.buttonCall2}>
                    <View style={styles.contentBtn}>
                      <AntDesign name={'message1'} color={'white'} />
                      <Text style={styles.textCall}>Start chat</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.discount}>-20% +3 min free </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.listUserVertical}>
            <View style={styles.userVideo}>
              <Image
                style={styles.video}
                source={{
                  uri: 'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
                }}
              />
            </View>
            <View style={styles.userDetailContaint}>
              <View style={styles.userDetail}>
                <View style={{marginRight: 10}}>
                  <Image
                    style={styles.imgUserVer}
                    source={{
                      uri: 'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg',
                    }}
                  />
                </View>
                <View>
                  <View style={styles.nameDetail}>
                    <Text style={styles.nameVer}>Header Dude </Text>
                    <Text style={[styles.status, {marginLeft: 10}]}>
                      Online{' '}
                    </Text>
                  </View>
                  <Text style={styles.cate}>Love & Relationships </Text>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign name={'star'} color={'orange'} />
                    <AntDesign name={'star'} color={'orange'} />
                    <AntDesign name={'star'} color={'orange'} />
                    <AntDesign name={'star'} color={'orange'} />
                    <AntDesign name={'star'} color={'orange'} />
                  </View>
                </View>
              </View>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                placeat fuga doloremque minima enim quidem similique a ad et,
                voluptatem, in itaque numquam eaque voluptas voluptates eos
                maxime molestias tenetur.
              </Text>
              <View style={styles.price}>
                <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Text style={styles.textPrice}>14,99 $/min</Text>
                    <Text style={styles.textPriceSale}>11,99 $/min</Text>
                  </View>
                  <TouchableOpacity style={styles.buttonCall1}>
                    <View style={styles.contentBtn}>
                      <AntDesign name={'customerservice'} color={'white'} />
                      <Text style={styles.textCall}>Voice chat</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.discount}>-20% +3 min free </Text>
                </View>
                <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Text style={styles.textPrice}>14,99 $/min</Text>
                    <Text style={styles.textPriceSale}>11,99 $/min</Text>
                  </View>
                  <TouchableOpacity style={styles.buttonCall2}>
                    <View style={styles.contentBtn}>
                      <AntDesign name={'message1'} color={'white'} />
                      <Text style={styles.textCall}>Start chat</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.discount}>-20% +3 min free </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};
export default Advisor;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  search: {
    backgroundColor: '#C75FD0',
  },
  input: {
    height: 35,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
  },
  banner: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  imageBaner: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  newAdviser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  textSeeAll: {
    color: '#C75FD0',
    fontSize: 14,
  },
  scrollHori: {
    marginVertical: 10,
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 15,
  },
  userHori: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  imgHori: {
    marginVertical: 5,
  },
  nameHori: {
    fontWeight: 'bold',
  },
  nameVer: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  status: {
    color: 'green',
  },
  listUserVertical: {},
  userVideo: {
    marginTop: 10,
  },
  video: {
    width: width,
    height: 170,
  },
  userDetailContaint: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  userDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  imgUserVer: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  nameDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cate: {
    color: 'gray',
    marginBottom: 2,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonCall1: {
    backgroundColor: '#77DC74',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: '100%',
  },
  buttonCall2: {
    backgroundColor: '#44AFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: '100%',
  },
  contentBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCall: {
    color: '#ffffff',
    marginLeft: 5,
  },
  textPrice: {
    textDecorationStyle: 'dashed',
    textDecorationLine: 'line-through',
  },
  textPriceSale: {
    color: 'red',
    marginLeft: 5,
  },
  discount: {
    color: '#ffffff',
    backgroundColor: '#FD474B',
    marginVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
