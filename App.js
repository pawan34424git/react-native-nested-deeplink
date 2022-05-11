import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Home from './src/Home';
import Post from './src/Post';
import {Text, View} from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
    MyTab: {
      screens: {
        Home: {
          screens: {
            Post: {
              path: 'post/:post',
              parse: {
                post: post =>
                  (post && posts.find(p => p.id === Number(post))) || posts[3],
              },
            },
          },
        },
      },
    },
  },
};

const linking = {
  prefixes: ['pawanapp://', 'https://pawanapp.com'],
  config,
};

function Tab1() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Tab1!</Text>
    </View>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Profile'}>
      <Stack.Screen name="Profile" component={Home} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Dashboard" component={Tab1} />
      <Tab.Screen name="Home" component={HomeStack} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator>
        <Drawer.Screen name="MyTab" component={BottomTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
