import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
const posts = [
  {
    id: 1,
    character: 'Michael Scott',
    quote: "That's what she said.",
    pic: require('./assets/p1.jpeg'),
  },
  {
    id: 2,
    character: 'Dwight Schrute',
    quote:
      "Any time I'm about to do something, I think to myself 'Would an idiot do that?' and if the answer is yes, I do not do that thing.",
    pic: require('./assets/p2.jpeg'),
  },
  {
    id: 3,
    character: 'Andy Bernard',
    quote:
      "I'm always thinking one step ahead, like a carpenter who makes stairs.",
    pic: require('./assets/p3.jpeg'),
  },
  {
    id: 4,
    character: 'Kelly Kapoor',
    quote: 'I am one of the few people who looks hot eating a cupcake.',
    pic: require('./assets/p4.jpeg'),
  },
  {
    id: 5,
    character: 'Kevin Malone',
    quote: 'When I President, they see. They see.',
    pic: require('./assets/p5.jpeg'),
  },
  {
    id: 6,
    character: 'Angela Martin',
    quote: 'I think green is kind of whorish.',
    pic: require('./assets/p6.jpeg'),
  },
];
const Home = ({navigation}) => {
  const {row, image, title, separator, container} = styles;
  return (
    <View style={container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Post', {post: item})}>
            <View style={row}>
              <Image source={item.pic} style={image} resizeMode="cover" />
              <Text style={title}>{item.character}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={separator} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
  title: {
    fontSize: 16,
    color: 'black',
    margin: 10,
  },
  separator: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 0.5,
    width: '100%',
  },
});
export default Home;
