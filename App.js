import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator,BottomTabBar  } from 'react-navigation-tabs';
import Home from './components/screens/Home';
import Book from './components/screens/Book';
import Profile from './components/screens/Profile';
import Appointment from './components/screens/Appointment';
import { MyColors, Width } from './components/consts';
import Records from './components/screens/Records';
import ClinicVisit from './components/screens/ClinicVisit'
import Chatbot from './components/screens/Chatbot'
import OnlineConsultation from './components/screens/OnlineConsultation'
import appointmentBook from './components/screens/appointmentBook'

export default class App extends Component {
  render() {
    return (
      <UserApp />
    );
  }
}
const HomeTab = createStackNavigator(
  {
    Home: Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        // backgroundColor: '#0091EA',
        backgroundColor: 'green',

      },
      headerTintColor: '#fff',
      title: 'Home Tab',

    },
  }
);
const BookTab = createStackNavigator(
  {
    Book: Book,
    ClinicVisit:ClinicVisit,
    Chatbot:Chatbot,
    OnlineConsultation:OnlineConsultation,
    appointmentBook:appointmentBook

  },
  {
    // defaultNavigationOptions: {
    //   // headerStyle: {
    //   //   backgroundColor: '#0091EA',
    //   // },
    //   // headerTintColor: '#fff',
    //   // title: 'Book Tab',

    // },
    navigationOptions  :({ navigation }) => {
      let tabBarVisible;
      if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
          if (route.routeName === "ClinicVisit") {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
      }
    
      return {
        tabBarVisible
      };
    }
  }
);
const ProfileTab = createStackNavigator(
  {
    Profile: Profile,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Profile Tab',

    },
  }
);
const AppointmentTab = createStackNavigator(
  {
    Appointment: Appointment,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Appointment Tab',

    },
  }
);

const RecordsTab = createStackNavigator(
  {
    Records: Records,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Records Tab',

    },
  }
);
const MainApp = createBottomTabNavigator(
  {
    Profile: ProfileTab,
    Appointment: AppointmentTab,
    Book: BookTab,
    Records: RecordsTab,
    Home: HomeTab,


  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        if (routeName === 'Home') {
          const myIcon = <Icon
            name='home'
            type='material'
            color={focused ? MyColors.whiteColor : MyColors.tabInactiveColor}
            size={33}
          />

          return (
            myIcon
          )
        }
        else if (routeName === 'Book') {
          const myIcon = <Icon
          name="ios-add-circle-outline"
          type='ionicon'
            color={focused ? MyColors.whiteColor : MyColors.tabInactiveColor}
            size={33}
          />
          return (
            myIcon
          );
        }
        else if (routeName === 'Profile') {
          const myIcon =   <Image
          source={ require('./assets/profile.jpg') }
          style={{ width: 30, height: 30,borderRadius:16,
            borderWidth:Width*.005,borderColor:focused ? MyColors.whiteColor
             : MyColors.tabInactiveColor }} />
          return (
            myIcon
          );
        }
        else if (routeName === 'Appointment') {
          const myIcon = <Icon
            name='clock'
            type='evilicon'
            color={focused ? MyColors.whiteColor : MyColors.tabInactiveColor}
            size={38}
          />
          return (
            myIcon
          );
        }
        else {
          const myIcon = <Icon
          name='heartbeat'
          type='font-awesome'
            color={focused ? MyColors.whiteColor : MyColors.tabInactiveColor}
            size={27}
          />
          return (
            myIcon
          );
        }
      },
    }),
    
    tabBarOptions: {
      activeTintColor: MyColors.whiteColor,
      inactiveTintColor: MyColors.tabInactiveColor,
      style: { backgroundColor:MyColors.tabActiveColor },
    }, 
  },
  

);
const UserApp = createAppContainer(MainApp);
// const MainNavigator = createStackNavigator({
//     // Splash: {
//     //     screen: Splash,
//     // },
//     // MainScreen: {
//     //     screen: Main,
//     // },
//     // Users: {
//     //     screen: Users,
//     // },
//     // UserSelected: {
//     //     screen: UserSelected,
//     // }
//     Login: {
//       screen: Login,
//   },
//   Signup: {
//       screen: Signup,
//   },
// })

// const UserApp = createAppContainer(MainNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });