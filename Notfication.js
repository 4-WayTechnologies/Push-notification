import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import PushNotification from 'react-native-push-notification';

const Notfication = () => {
  const [title, setTitle] = useState('None');
  const [message, setMessage] = useState('No New Message');
  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'textMsg',
      title: title,
      message: message,
      largeIconUrl: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
    });
  };

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'textMsg',
      channelName: 'Text message',
    });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={val => setTitle(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        onChangeText={val => setMessage(val)}
      />
      <Button title="Send Notification " onPress={handleNotification} />
    </View>
  );
};

export default Notfication;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderBottomWidth: 2,
    marginTop: 10,
    marginBottom: 10,
  },
});
