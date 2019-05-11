import React from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Filter = ({ filter, changeFilter }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeFilter('all')}>
      <Text style={[styles.buttonText, filter === 'all' && styles.selectedFilter]}>All</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeFilter('open')}>
      <Text style={[styles.buttonText, filter === 'open' && styles.selectedFilter]}>Open</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeFilter('closed')}>
      <Text style={[styles.buttonText, filter === 'closed' && styles.selectedFilter]}>Closed</Text>
    </TouchableOpacity>
  </View>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
