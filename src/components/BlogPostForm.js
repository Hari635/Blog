import React,{useState} from "react";
import { View,Text,TextInput,StyleSheet,Button } from "react-native";

const blogPostForm=({onsubmit,intialvalue})=>{
    const [title,settitle]=useState(intialvalue.title)
    const[content,setcontent]=useState(intialvalue.content)

    return(<View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput value={title} onChangeText={(text)=>{
            return(settitle(text))
        }} style={styles.input} />
        <Text style={styles.label} >Enter Content:</Text>
        <TextInput value={content} onChangeText={(text)=>{
            return(setcontent(text))
        }} style={styles.input} />
        <Button title="Add Post" onPress={()=>{
            return(onsubmit(title,content))  
        }} ></Button>
    </View>)

}
blogPostForm.defaultProps={
    intialvalue:{title:'',content:''}
}
const styles=StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5
    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft: 5
    }
})

export default blogPostForm
