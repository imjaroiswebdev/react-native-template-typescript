import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import Home from 'src/containers/Home';
import Settings from 'src/containers/Settings';

const Tab = createBottomTabNavigator();

const App = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: t('home'),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: t('settings'),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
