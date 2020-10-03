import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial124106Navigator from '../features/Tutorial124106/navigator';
import NotificationList124078Navigator from '../features/NotificationList124078/navigator';
import Settings124077Navigator from '../features/Settings124077/navigator';
import Settings124069Navigator from '../features/Settings124069/navigator';
import UserProfile124067Navigator from '../features/UserProfile124067/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial124106: { screen: Tutorial124106Navigator },
NotificationList124078: { screen: NotificationList124078Navigator },
Settings124077: { screen: Settings124077Navigator },
Settings124069: { screen: Settings124069Navigator },
UserProfile124067: { screen: UserProfile124067Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
