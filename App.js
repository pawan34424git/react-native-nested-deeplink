import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home';
import Post from './src/Post';
const Stack = createStackNavigator();

const posts = [
  {
    id: 1,
    character: 'Michael Scott',
    quote: "That's what she said.",
    pic: require('./src/assets/p1.jpeg'),
  },
  {
    id: 2,
    character: 'Dwight Schrute',
    quote:
      "Any time I'm about to do something, I think to myself 'Would an idiot do that?' and if the answer is yes, I do not do that thing.",
    pic: require('./src/assets/p2.jpeg'),
  },
  {
    id: 3,
    character: 'Andy Bernard',
    quote:
      "I'm always thinking one step ahead, like a carpenter who makes stairs.",
    pic: require('./src/assets/p3.jpeg'),
  },
  {
    id: 4,
    character: 'Kelly Kapoor',
    quote: 'I am one of the few people who looks hot eating a cupcake.',
    pic: require('./src/assets/p4.jpeg'),
  },
  {
    id: 5,
    character: 'Kevin Malone',
    quote: 'When I President, they see. They see.',
    pic: require('./src/assets/p5.jpeg'),
  },
  {
    id: 6,
    character: 'Angela Martin',
    quote: 'I think green is kind of whorish.',
    pic: require('./src/assets/p6.jpeg'),
  },
];

const config = {
  screens: {
    Post: {
      path: 'post/:post',
      parse: {
        post: post =>
          (post && posts.find(p => p.id === Number(post))) || posts[3],
      },
    },
  },
};

const linking = {
  prefixes: ['pawanapp://', 'https://pawanapp.com'],
  config,
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
