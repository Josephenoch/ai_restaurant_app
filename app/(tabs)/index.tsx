import { useEffect } from "react";
import { StyleSheet, Pressable } from "react-native";
import { ThemedText, ThemedView } from "@/components/";
import { router, useRootNavigationState } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import isValidURL from "@/scripts/validate-url";

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions()
  const rootNavigationState = useRootNavigationState();

  const handleQRCodeScanned = (restaurantAPIURL: string) => {
    try{

      const identifier =  isValidURL(restaurantAPIURL)
      router.push({
        pathname: "/(tabs)/menu",
        params: {
          identifier
        }
      })
    }catch(err){
      console.log(err)
    }

  }
  
  useEffect(()=>{
    if(!permission?.granted){
      requestPermission()
    }
    if(rootNavigationState?.key){
      handleQRCodeScanned("https://ai-restaurant.onrender.com/menu/kenny-ai")
    }
 
  },[permission?.granted, rootNavigationState?.key])

  if(!permission?.granted) return (
    <ParallaxScrollView>
    <ThemedView style={styles.container}>
      <ThemedText>
        This app requires your camera access
      </ThemedText>
        <Pressable style={styles.button} onPress={requestPermission} >
          <ThemedText style={{color:"white"}}>Grant access to camera</ThemedText>
        </Pressable>
     
      </ThemedView>
    </ParallaxScrollView>
  )

 
  return (
    <CameraView
      facing="back"
      style={StyleSheet.absoluteFillObject}
      onBarcodeScanned={({data})=> {
        handleQRCodeScanned(data)
      }}
    />
  );
}

 const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  button: {
    width: 311,
    height: 41,
    padding: 4,
    marginTop: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DA3365"
  }
 })
