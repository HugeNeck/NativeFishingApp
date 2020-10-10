import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../assets/styles'

export default function PicTaker(props) {
 

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

   const newImage = async () => {
    let result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.cancelled) {
      props.setImage(result.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      props.setImage(result.uri);
    }
  };

  return (
    <View style={styles.pictureContainer}>
       <View style={styles.space}/>
       {props.image && <Image source={{ uri: props.image }} style={{ width: 200, height: 200 }} />}
       <View style={styles.space}/> 
      <Button title="Pick an image from camera roll" onPress={pickImage} />   
      <View style={styles.space}/>
      <Button title="Take a New Picture" onPress={newImage} />
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    </View>
  );
}