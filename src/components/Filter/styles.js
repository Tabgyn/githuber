import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  selectedFilter: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },

  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },

  buttonText: {
    color: colors.lighter,
    fontSize: 14,
  },

  container: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    marginBottom: metrics.basePadding / 2,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
    padding: metrics.basePadding / 2,
  },
});

export default styles;
