import React,{useContext} from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import {EvilIcons} from '@expo/vector-icons';

const showScreen=({navigation})=>{
    const { state }=useContext(Context)
    const blogPost=state.find((blogPost)=>{
        return(blogPost.id===navigation.getParam('id'))
    })
    return(<View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>)
}
showScreen.navigationOptions=({navigation})=>{
    return{
        headerRight:()=>{
           return( <TouchableOpacity onPress={()=>{
                return(navigation.navigate('edit',{id:navigation.getParam('id')}))
            }}>
        <EvilIcons name="pencil" size={30} color="black" />
        </TouchableOpacity>)
        }
    }
}
 const styles=StyleSheet.create({})

 export default showScreen