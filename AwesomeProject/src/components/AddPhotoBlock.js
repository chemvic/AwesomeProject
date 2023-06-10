import React, { useState } from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';



const AddPhotoBlock = () => {

    const handleAddPhoto=()=>{
        //добавить фото
        console.log("Добавление фото");
    }

  return (
    <View>
        <View style={styles.photoContainer}>
            <Image source={require('../../assets/images/Rectangle 22_small.jpg')} style={styles.image}/>
        </View>
        
        <Button title="AddPhoto" onPress={handleAddPhoto}></Button>
     

    </View>
  );
 };
 const styles = StyleSheet.create({
    photoContainer: {
      flex: 1,
      width: 120,
      height:120,
      backgroundColor: "#F6F6F6",
      borderRadius:16,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      resizeMode:'cover',
    },
})
export default AddPhotoBlock;