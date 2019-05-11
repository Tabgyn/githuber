import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';
import Organizations from '~/pages/Organizations';
import Issues from '~/pages/Issues';
import { colors } from './styles';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      User: createBottomTabNavigator(
        {
          Repositories,
          Organizations,
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.white,
            inactiveTintColor: colors.whiteTransparent,
            style: {
              backgroundColor: colors.secundary,
            },
          },
        },
      ),
      Issues,
    },
    {
      initialRouteName: userLogged ? 'User' : 'Welcome',
    },
  ),
);

export default Routes;