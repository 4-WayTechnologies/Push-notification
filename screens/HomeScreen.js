import { View, Text,StyleSheet,Image,TouchableOpacity,Button } from 'react-native'
import React,{useState} from 'react'


const HomeScreen = ({navigation}) => {
const avatarArray=["https://cdn-icons-png.flaticon.com/512/147/147142.png","https://cdn-icons-png.flaticon.com/512/194/194938.png","https://www.pinclipart.com/picdir/big/555-5557064_happy-vector-free-man-round-avatar-user-icon.png","https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png","https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png","https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png"]
const [avatar,setAvatar]=useState(null)



  return (
    <View style={styles.conatiner}>
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Select Avatar</Text>
    </View>
    <View style={styles.avatarContainer}>
       
        {
            
            avatarArray.map((img,index)=>{
                return <>
                 <TouchableOpacity key={img} onPress={()=>{setAvatar(img)}}>
                     <Image source={{uri:img}}  style={[styles.avatar,{width:65,height:65}]}/>
                     </TouchableOpacity>
                     </>
            })
        }
    </View>
{avatar &&    <View style={styles.selectedAvatarContainer}>
        <Text style={styles.selectedAvatarText}>Selected Avatar</Text>
        <Image source={{uri:avatar}}  style={{width:100,height:100}}/>

        <TouchableOpacity style={{marginVertical:10}} onPress={()=>{navigation.navigate("chatRoom",avatar)}} >
            <Text style>Lets chit chat</Text>
        </TouchableOpacity>
    </View>}
    </View>
  )
}

export default HomeScreen

const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:"#E7F0FF"
    },
    headerContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    headerText:{
        fontSize:22,
        fontWeight:"700",
        marginHorizontal:10
    },
    avatarContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center"
    },
    avatar:{
        marginHorizontal:15,
        marginVertical:10
    },
    selectedAvatarContainer:{
        paddingTop:50,
        flex:1,

        alignItems:"center"
    },
    selectedAvatarText:{
        fontSize:25,
        color:"rgba(0,0,255,.65)",
        fontWeight:"500"
    }
})