import React,{useContext,useEffect} from "react";
import { View,Text,StyleSheet,FlatList,Button,TouchableOpacity } from "react-native";
import {Context} from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';

const indexscreen=({navigation})=>{
    const {state,addBlogPost,deleteBlogPost,getBlogPosts}= useContext(Context)

    useEffect(()=>{
        getBlogPosts()
        const listener= navigation.addListener('didFocus',()=>{
            getBlogPosts()
        })//this function is used when the app goes for next screen then didfocus listener is run getblogpost is run
        return()=>{
            listener.remove()//whenever you return function in useeffect this screen completely focus then listener will remove 
            //navigation
        }
    },[])//this empty [] means this use effect run only one time 
    // error that i got is i used getblogPosts simply without useeffect it cause infinte loop 
    
return(
    <View>
        
        <FlatList 
         data={state}
         renderItem={({item})=>{
         return(
         <TouchableOpacity onPress={()=>{
             return(navigation.navigate('show',{id:item.id}))
         }}>
         <View style={styles.row}>
         <Text style={styles.title} >{item.title}-{item.id}</Text>
         <TouchableOpacity onPress={()=>{
             return(deleteBlogPost(item.id)
             )
         }}>
         <Feather style={styles.icon} name="trash" />
         </TouchableOpacity>
         </View>
         </TouchableOpacity>)
         }} 
         keyExtractor={(blogPost)=>{
             return(blogPost.title)
         }}
         scrollEnabled={true}/>
         
    </View>
)
 }

indexscreen.navigationOptions=({navigation})=>{
    return{
        headerRight:()=>{
           return( <TouchableOpacity onPress={()=>{
                return(navigation.navigate('create'))
            }}>
        <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>)
        }
    }
}

const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:20,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }
})

export default indexscreen