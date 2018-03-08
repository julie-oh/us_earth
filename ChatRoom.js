import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainPage: {
    fontSize: 60,
  }
});

class ChatRoom extends Component<{}> {
  render() {
    return (
      <View>
        <Text style={styles.mainPage}>
          {"This is the\nnext\npage."}
        </Text>
      </View>
    );
  }
}

export default ChatRoom;
