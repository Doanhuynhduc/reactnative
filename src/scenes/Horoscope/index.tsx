import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {StatusBarCustom} from '../../component/atom';
import {HeaderTop} from '../../component/molecules';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Horoscope = () => {
  return (
    <View>
      <StatusBarCustom backgroundColor={'#C75FD0'} />
      <HeaderTop>
        <View>
          <Text style={styles.text}>Edit</Text>
        </View>
        <View>
          <Text style={styles.text}>Horoscope</Text>
        </View>
        <View>
          <Text style={[styles.text]}>0.00$</Text>
        </View>
      </HeaderTop>
      <ScrollView>
        <View style={{backgroundColor: 'white', height: '100%'}}>
          <View style={styles.textTop}>
            <Text style={styles.textName}>Libra</Text>
            <Text style={styles.textDay}>23-10</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/aquarius.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/aries.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/cancer.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/capricorn.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/gemini.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/leo.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/libra.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/pisces.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/sagittarius.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/scorpio.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/taurus.png')}
              />
            </View>
            <View style={styles.imgContaint}>
              <Image
                style={styles.imageBaner}
                source={require('../../asset/virgo.png')}
              />
            </View>
          </ScrollView>
          <View style={styles.btnHori}>
            <TouchableOpacity>
              <Text style={styles.btnD}>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.btnD}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.btnD}>Monthly</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.daily}>
            <TouchableOpacity>
              <AntDesign name={'left'} />
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17}}>Today</Text>
              <Text>Today</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name={'right'} />
            </TouchableOpacity>
          </View>
          <View style={styles.textct}>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              blanditiis iusto quis hic sapiente! Dicta itaque voluptas iusto
              rerum laborum ipsa explicabo enim aspernatur unde laboriosam odit
              corporis, eaque cumque?
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              blanditiis iusto quis hic sapiente! Dicta itaque voluptas iusto
              rerum laborum ipsa explicabo enim aspernatur unde laboriosam odit
              corporis, eaque cumque?
            </Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Image
              style={styles.imageBanerr}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/thumbnails/001/338/261/small/black-friday-sale-banner-design-liquid-banner-free-vector.jpg',
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
            <Text>Need advice or a personal forecast?</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  textTop: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  imageBanerr: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  textName: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  textDay: {
    color: 'gray',
  },
  daily: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnHori: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    marginHorizontal: 35,
    borderRadius: 15,
    backgroundColor: 'gray',
  },
  imgContaint: {
    marginLeft: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 20,
  },
  imageBaner: {
    width: 30,
    height: 30,
  },
  btnD: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 2,
  },
  textct: {
    paddingHorizontal: 13,
    paddingVertical: 14,
  },
});

export default Horoscope;
