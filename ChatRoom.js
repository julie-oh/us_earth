import React, { Component } from 'react';
import {
  ScrollView, Text, StyleSheet, TextInput, Button,
} from 'react-native';

const styles = StyleSheet.create({
  mainPage: {
    fontSize: 60,
  },
  inputBox: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
  }
});

class ChatRoom extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.mainPage}>
          {"This is the\nnext\npage."}
        </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          title="보내기"
          color="red"
        />
      </ScrollView>
    );
  }
}

export default ChatRoom;
