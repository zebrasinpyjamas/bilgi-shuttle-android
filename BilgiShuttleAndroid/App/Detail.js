import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.splash}>
          Detail
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  splash: {
    fontSize: 24,
    textAlign: 'center',
    color: '#000'
  },
});