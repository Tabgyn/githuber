import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const RepositoryItem = ({ repository, navigation: { navigate } }) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{repository.full_name}</Text>
      <View style={styles.countersContainer}>
        <View style={styles.info}>
          <Icon name="star" solid size={12} style={styles.infoIcon} />
          <Text style={styles.infoText}>{repository.stargazers_count}</Text>
        </View>
        <View style={styles.info}>
          <Icon name="code-branch" solid size={12} style={styles.infoIcon} />
          <Text style={styles.infoText}>{repository.forks_count}</Text>
        </View>
        <View style={styles.info}>
          <Icon name="eye" solid size={12} style={styles.infoIcon} />
          <Text style={styles.infoText}>{repository.watchers_count}</Text>
        </View>
      </View>
    </View>
    <TouchableOpacity
      onPress={() => navigate('Issues', { title: repository.name, full_name: repository.full_name })
      }
    >
      <Icon name="chevron-right" size={16} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
