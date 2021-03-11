import React,{useContext} from "react";
import { Text,View,StyleSheet } from "react-native";
import { Context  } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
// import blogPostForm from "../components/BlogPostForm";

const editScreen=({navigation})=>{
    const id=navigation.getParam('id')
    const {state,editBlogPost }=useContext(Context)
    const blogPost=state.find((blogPost)=>{
        return(blogPost.id===id)
    })
    // console.log(blogPost);
    

    return(<BlogPostForm
        onsubmit={(title,content)=>{
            editBlogPost(id,title,content,()=>{
                return(navigation.pop())
            })

        }} 
        intialvalue={{title:blogPost.title,content:blogPost.content}} />)
}
const styles= StyleSheet.create({})
export default editScreen