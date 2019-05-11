import React from 'react';
import {
  TouchableOpacity, Text, Image, Linking,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const OrganizationItem = ({ organization }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => Linking.openURL(`https://github.com/${organization.login}`)}
  >
    <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
    <Text style={styles.title}>{organization.login}</Text>
  </TouchableOpacity>
);

OrganizationItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizationItem;
