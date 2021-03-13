import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image

} from 'react-native';

//ios : View -> UIView
  //<Text numberOfLines={1} onPress={handlePress}>
export default function App() {
  // const handlePress = () => console.log("Text pressed");
;
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>
        Open up App.js to start working on your app!
      </Text>
      <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}> */}
      {/* <TouchableOpacity onPress={() => console.log("Image tapped")}>  */}
      {/* <TouchableHighlight  onPress={() => console.log("Image tapped")}> */}
      {/* <Image source={require("./assets/icon.png")} /> */}
      {/* <Image
        // blurRadius={10}
        // fadeDuration={1000}
        source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
          }} /> */}
          {/* <View style = {{ width:200, height:70, backgroundColor:"blue"}}></View>
        </TouchableWithoutFeedback> */}
        {/* </TouchableOpacity> */}
      {/* </TouchableHighlight> */}
      
      <button> </button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
