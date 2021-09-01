import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StatusBarCustom} from '../../atom';
import {HeaderTop} from '../../molecules';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');
export const FreeReading = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBarCustom backgroundColor={'#C75FD0'} />
      <HeaderTop>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name={'left'} color={'#ffffff'} />
        </View>
        <View>
          <Text style={styles.text}>FREE READINGS</Text>
        </View>
        <View>
          <Text style={[styles.text]}></Text>
        </View>
      </HeaderTop>
      <View style={styles.content}>
        <View style={styles.topContent}>
          <View style={styles.Imgcontent}>
            <Image
              style={styles.IMG}
              source={require('../../../asset/mail.png')}
            />
          </View>
          <Text style={styles.text1}>GET FREE READINGS!</Text>
          <Text style={styles.text2}>
            Send friends free readings and receive $10 for each friend
          </Text>
          <Text style={styles.text3}>Promo Code:</Text>
          <Text style={styles.text4}>06RME</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.btnInvite}>
            <AntDesign name={'mail'} size={15} color={'#ffffff'} />
            <Text style={styles.txtWhite}> Email Invite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnInvite3}>
            <AntDesign name={'wechat'} size={15} color={'#ffffff'} />
            <Text style={styles.txtWhite}> Message Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnInvite2}>
            <AntDesign name={'facebook-square'} size={15} color={'#ffffff'} />
            <Text style={styles.txtWhite}> Facebook invite</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  text1: {
    color: 'purple',
    paddingBottom: 10,
  },
  text2: {
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'gray',
    paddingBottom: 10,
  },
  text3: {
    color: 'gray',
    fontSize: 16,
  },
  text4: {
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 35,
    height: height - 110,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  topContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Imgcontent: {
    paddingBottom: 15,
  },
  IMG: {
    width: 100,
    height: 100,
  },
  btnInvite: {
    backgroundColor: '#77DC74',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  btnInvite2: {
    backgroundColor: '#0d89f0',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  btnInvite3: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  txtWhite: {
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 15,
  },
});
