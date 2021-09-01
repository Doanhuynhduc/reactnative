import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {StatusBarCustom} from '../../atom';
import {HeaderTop} from '../../molecules';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Abouts = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBarCustom backgroundColor={'#C75FD0'} />
      <HeaderTop>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name={'left'} color={'#ffffff'} />
          <Text style={{color: '#ffffff'}}>Setting</Text>
        </View>
        <View>
          <Text style={styles.text}>Abouts</Text>
        </View>
        <View>
          <Text style={[styles.text]}></Text>
        </View>
      </HeaderTop>
      <ScrollView>
        <View style={styles.content}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quam
            in deserunt similique animi nihil ex eos veritatis fugiat sapiente
            illum sequi? Explicabo libero placeat qui tempora consequatur, ut
            magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, quam in deserunt similique animi nihil ex eos veritatis
            fugiat sapiente illum sequi? Explicabo libero placeat qui tempora
            consequatur, ut magnam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, quam in deserunt similique animi nihil ex
            eos veritatis fugiat sapiente illum sequi? Explicabo libero placeat
            qui tempora consequatur, ut magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque, quam in deserunt similique
            animi nihil ex eos veritatis fugiat sapiente illum sequi? Explicabo
            libero placeat qui tempora consequatur, ut magnam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Atque, quam in deserunt
            similique animi nihil ex eos veritatis fugiat sapiente illum sequi?
            Explicabo libero placeat qui tempora consequatur, ut magnam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Atque, quam in
            deserunt similique animi nihil ex eos veritatis fugiat sapiente
            illum sequi? Explicabo libero placeat qui tempora consequatur, ut
            magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, quam in deserunt similique animi nihil ex eos veritatis
            fugiat sapiente illum sequi? Explicabo libero placeat qui tempora
            consequatur, ut magnam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, quam in deserunt similique animi nihil ex
            eos veritatis fugiat sapiente illum sequi? Explicabo libero placeat
            qui tempora consequatur, ut magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque, quam in deserunt similique
            animi nihil ex eos veritatis fugiat sapiente illum sequi? Explicabo
            libero placeat qui tempora consequatur, ut magnam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Atque, quam in deserunt
            similique animi nihil ex eos veritatis fugiat sapiente illum sequi?
            Explicabo libero placeat qui tempora consequatur, ut magnam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Atque, quam in
            deserunt similique animi nihil ex eos veritatis fugiat sapiente
            illum sequi? Explicabo libero placeat qui tempora consequatur, ut
            magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque, quam in deserunt similique animi nihil ex eos veritatis
            fugiat sapiente illum sequi? Explicabo libero placeat qui tempora
            consequatur, ut magnam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, quam in deserunt similique animi nihil ex
            eos veritatis fugiat sapiente illum sequi? Explicabo libero placeat
            qui tempora consequatur, ut magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque, quam in deserunt similique
            animi nihil ex eos veritatis fugiat sapiente illum sequi? Explicabo
            libero placeat qui tempora consequatur, ut magnam.
          </Text>
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
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
});
