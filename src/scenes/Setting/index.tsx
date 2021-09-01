import React from 'react';

//React - Native
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HeaderTop} from '../../component/molecules';
import Entypo from 'react-native-vector-icons/Entypo';
import {navigate} from '../../navigators/mainStack';

const Setting = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderTop>
        <View></View>
        <View>
          <Text style={styles.text}>Setting</Text>
        </View>
        <View>
          <Entypo name={'bell'} color={'white'} size={18} />
        </View>
      </HeaderTop>
      <ScrollView>
        <View style={styles.topContent}>
          <View style={styles.profileUser}>
            <View style={styles.Img}>
              <Image
                style={styles.userImg}
                source={{
                  uri: 'https://d3u2xd68tejot5.cloudfront.net/avatar/thumbs/av.65.5e1eba47ee17d.1579072071.jpg',
                }}
              />
            </View>
            <View>
              <Text style={styles.userName}>Huynh duc</Text>
              <Text style={styles.email}>huynhduc7447@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.listMenu}>
              <Text style={styles.txtHead}>Balance & Transactions</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.txtRight}> 0.00 $ </Text>
                <Entypo
                  name={'chevron-small-right'}
                  color={'white'}
                  size={16}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listMenu}>
              <Text style={styles.txtHead}>Coupons</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.txtRight}> 2 </Text>
                <Entypo
                  name={'chevron-small-right'}
                  color={'white'}
                  size={16}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listMenu}>
              <Text style={styles.txtHead}>My Favorites</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo
                  name={'chevron-small-right'}
                  color={'white'}
                  size={16}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listMenu}>
              <Text style={styles.txtHead}> Languages</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.txtRight}> English </Text>
                <Entypo
                  name={'chevron-small-right'}
                  color={'white'}
                  size={16}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listMenu}>
              <Text style={styles.txtHead}>PIN protection</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.txtRight}> Off </Text>
                <Entypo
                  name={'chevron-small-right'}
                  color={'white'}
                  size={16}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContent}>
          <TouchableOpacity>
            <View style={styles.listMenu}>
              <Text style={styles.txtHeadBottom}>Phone</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo name={'chevron-small-right'} color={'gray'} size={16} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listMenu}>
              <Text style={styles.txtHeadBottom}>Free Readings</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo name={'chevron-small-right'} color={'gray'} size={16} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listMenu}>
              <Text style={styles.txtHeadBottom}>Customer Support</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo name={'chevron-small-right'} color={'gray'} size={16} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('abouts', null)}>
            <View style={styles.listMenu}>
              <Text style={styles.txtHeadBottom}>About</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo name={'chevron-small-right'} color={'gray'} size={16} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('howitworks', null)}>
            <View style={styles.listMenu}>
              <Text style={styles.txtHeadBottom}>How it works</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo name={'chevron-small-right'} color={'gray'} size={16} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logOutBtn}>
          <Text style={styles.logOut}> Logout</Text>
        </TouchableOpacity>
        <View style={styles.ver}>
          <Text style={{color: 'gray'}}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default Setting;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  topContent: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.22)',
    backgroundColor: '#C75FD0',
  },
  bottomContent: {
    marginTop: 10,
    backgroundColor: '#ffffff',
  },
  profileUser: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  Img: {
    paddingHorizontal: 10,
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  userName: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 8,
  },
  email: {
    color: '#ffffff',
  },
  listMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 5,
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  txtHead: {
    color: '#ffffff',
    fontSize: 18,
  },
  txtHeadBottom: {
    color: 'black',
    fontSize: 18,
  },
  txtRight: {
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: '#ffffff',
    borderRadius: 10,
  },
  logOutBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 20,
    alignItems: 'center',
  },
  logOut: {
    fontWeight: 'bold',
    color: 'red',
  },
  ver: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
});
