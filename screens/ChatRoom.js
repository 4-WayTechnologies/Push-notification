import {
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    StyleSheet,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import io from 'socket.io-client';
  import PushNotification from 'react-native-push-notification';



  const ChatRoom = (props) => {
    const {height, width} = Dimensions.get('window');
    const [chatmessage, setChatMessage] = useState('');
    const [chatmessages, setChatMessages] = useState([]);
    const [info, setInfo] = useState({});
  console.log(props.route.params)
    const messagesData = [];
    const handleNotification=(msg)=>{
      PushNotification.localNotification({
        channelId:"textMsg",
        title:"you got a message",
        message:msg,
        largeIcon: props.route.params,
        largeIconUrl: props.route.params,
        bigLargeIconUrl: props.route.params,
      })
    }
  
    useEffect(() => {
      createChannel()
      const socket = io('https://chatify4way.herokuapp.com/');
      setInfo(socket);
      socket.on('Chat message', msg => {
        console.log('Frontend', msg);
        handleNotification(msg)
        setChatMessages(chatmessages => [msg,...chatmessages]);
        setChatMessage("")
      });
    }, []);
  
    const submitChat = info => {
      info.emit('Chat message', chatmessage);
  
      //     setChatMessage("")
    };


    const createChannel=()=>{
      PushNotification.createChannel(
        {
          channelId:"textMsg",
          channelName:"Text message"
        }
      )
    }


    return (
      <View style={styles.container}>
        <TextInput
        placeholder='Send message'
          style={[styles.searchContainer,{width: width - 30,}]}
          value={chatmessage}
          onSubmitEditing={() => {
            submitChat(info);
          }}
          onChangeText={text => setChatMessage(text)}
        />
  
        <View>
          {chatmessages.length != 0 ? (
            chatmessages.map((msg, index) => {
              return  <View style={styles.chatContainer}>
              <Image
                source={{
                  uri: props.route.params,
                }}
                style={{width: 50, height: 50, shadowColor: 'grey', elevation: 30}}
              />
              <Text style={styles.chatText}>{msg}</Text>
            </View>
            })
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: 'rgba(205,0,0,.65)',
                padding: 15,
                fontWeight: '500',
              }}
              
              >
              No new messages yet
            </Text>
          )}
        </View>
  
  
      </View>
    );
  };
  
  export default ChatRoom;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E7F0FF',
      flex: 1,
    },
    searchContainer: {
      fontSize: 18,
      paddingVertical:13,
      paddingHorizontal: 10,
      elevation:30,
      margin: 15,
      borderRadius: 20,
      backgroundColor:"#FFFFFF",
  
    },
    chatContainer: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      shadowOffset: {width: -20, height: 40},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 30,
      shadowColor: 'grey',
      padding: 5,
      alignItems: 'center',
      alignSelf: 'flex-start',
      marginHorizontal: 15,
      borderRadius: 30,
      marginVertical:5
    },
    chatText: {
      fontSize: 18,
      fontWeight: '500',
  
      marginHorizontal: 10,
    },
  });
  