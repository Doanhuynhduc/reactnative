import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {StatusBarCustom} from '../../atom';
import {HeaderTop} from '../../molecules';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {navigate} from '../../../navigators/mainStack';

export const Support = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBarCustom backgroundColor={'#C75FD0'} />
      <HeaderTop>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name={'left'} color={'#ffffff'} />
        </View>
        <View>
          <Text style={styles.text}>FAQs</Text>
        </View>
        <View>
          <Text style={[styles.text]}></Text>
        </View>
      </HeaderTop>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
  bottomContent: {
    backgroundColor: '#ffffff',
  },
  txtHeadBottom: {
    color: 'black',
    fontSize: 16,
  },
  listMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
});
