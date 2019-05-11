import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    canNavigateBack: PropTypes.bool,
  };

  static defaultProps = {
    canNavigateBack: false,
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  };

  render() {
    const { title, canNavigateBack, navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        {canNavigateBack ? (
          <TouchableOpacity onPress={() => navigation.navigate('Repositories')}>
            <Icon style={styles.icon} name="chevron-left" size={16} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon style={styles.icon} name="sign-out-alt" size={16} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);
