import { createStackNavigator } from 'react-navigation-stack';

import List from '../screens/List';
import Article from '../screens/Article';
import Profile from '../screens/Profile';

export default createStackNavigator(
  {
    List,
    Profile,
    Article,
    
  },
  {
    initialRouteName: "List",
  }
);
