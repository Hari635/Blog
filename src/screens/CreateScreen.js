import React,{useContext,useState} from "react";
import { View,Text,StyleSheet, TextInput,Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const creatscreen=({navigation})=>{
    const{ addBlogPost }= useContext(Context)
    return(<BlogPostForm onsubmit={(title,content)=>{
        addBlogPost(title,content,()=>{
            navigation.navigate('index')
        })
    }} />)




   
}

const styles=StyleSheet.create({
    
})

export default creatscreen