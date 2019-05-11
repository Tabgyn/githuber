import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Header from '~/components/Header';
import Filter from '~/components/Filter';
import IssueItem from './IssueItem';
import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  state = {
    data: [],
    loading: true,
    refreshing: false,
    filter: 'all',
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { navigation } = this.props;
    const { filter } = this.state;

    const { data } = await api.get(
      `/repos/${navigation.getParam('full_name')}/issues?state=${filter}`,
    );

    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
        style={styles.listContainer}
      />
    );
  };

  changeFilter = async (value) => {
    this.setState({ filter: value });

    const { navigation } = this.props;

    const { data } = await api.get(
      `/repos/${navigation.getParam('full_name')}/issues?state=${value}`,
    );

    this.setState({ data });
  };

  render() {
    const { loading, filter } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header title={`${navigation.getParam('title')} Issues`} canNavigateBack />
        <Filter filter={filter} changeFilter={this.changeFilter} />
        {loading ? <ActivityIndicator size="large" style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
