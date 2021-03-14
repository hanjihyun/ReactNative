import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';
// 후크를 사용하면 화면의 정확한 크기를 얻을 수 있다. /네이티브 반응
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import ViewImageScreen from './app/assets/screens/ViewImageScreen';

//ios : View -> UIView
//<Text numberOfLines={1} onPress={handlePress}>
export default function App() {
  // const handlePress = () => console.log("Text pressed");

  //사용 핸드폰?의 스크린 크기 알 수 있음
  // console.log(Dimensions.get("screen"));

  // 여러방향을 지원하는 경우 명령문을 기록하는 콘솔 수행
  // console.log(useDeviceOrientation());
  // const { landscape } = useDeviceOrientation();

  return <ViewImageScreen />;
  //<WelcomeScreen />;
  // (
  //   <SafeAreaView style={styles.container}>
  //     {/* <Text>
  //       Open up App.js to start working on your app!
  //     </Text> */}
  //     {/* <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}> */}
  //     {/* <TouchableOpacity onPress={() => console.log("Image tapped")}>  */}
  //     {/* <TouchableHighlight  onPress={() => console.log("Image tapped")}> */}
  //     {/* <Image source={require("./assets/icon.png")} /> */}
  //     {/* <Image
  //       // blurRadius={10}
  //       // fadeDuration={1000}
  //       source={{
  //       width: 200,
  //       height: 300,
  //       uri: "https://picsum.photos/200/300"
  //         }} /> */}
  //         {/* <View style = {{ width:200, height:70, backgroundColor:"blue"}}></View> */}
  //       {/* </TouchableWithoutFeedback> */}
  //       {/* </TouchableOpacity> */}
  //     {/* </TouchableHighlight> */}

  //     {/* //Button */}
  //     {/* <Button */}
  //        {/* color="orange" */}
  //       {/* title="Click me" */}
  //        {/* onPress={() => Alert.alert('My title', 'My message', [ */}
  //        {/* { text: "Yes",onPress:()=>console.log('yes')}, */}
  //         {/* {text:"No",onPress:()=>console.log('no')} */}
  //        {/* ])} */}

  //        {/* ios만 작동 */}
  //        {/* onPress={() => */}
  //          {/* Alert.prompt("My title","My message",(text) => console.log(text)) */}
  //       {/* } */}

  //     {/* /> */}
  //  {/*<View style={{
  //       backgroundColor: 'dodgerblue',
  //       width: '100%',
  //       height: landscape ? "100%" : "30%",
  //     }}></View> */}
  //   </SafeAreaView>

  // <View
  //   style={{
  //     backgroundColor: "white",
  //     flex: 1,
  //     flexDirection: "row", //가로로 정렬 (히위 View)
  //     // flexDirection: "column",  //수직 축? horizontal
  //     // justifyContent: "center",
  //     // justifyContent: "flex-start",
  //     //justifyContent: "space-around" ,//양 옆 다 빈칸?
  //     //justifyContent: "space-between", // 사이드는 벽에 붙음
  //     justifyContent: "center", //가운데 다 붙어
  //     alignItems: "center", // 화면 가운데로
  //     //alignItems: "baseline", //원래 위치(맨 위)
  //     //alignItems: "flex-end", //맨 바닥으로
  //     //alignItems: "flex-start", //맨위로 붙음
  //     //alignItems: "stretch", //전체 수직 채움,, (기본 값_)뷰 중 하나의 높이를 제거하지 않는이상 안보임
  //     alignContent:"center", //모든 속성 화면 가운데로
  //     // flexWrap: "wrap", // 화면 넘치면 자동 줄바꿈??, 원래는 그 줄에 view가 축소되면서 한줄에 다 들어감
  //   }}
  // >
  //   <View
  //     style={{
  //       backgroundColor: "dodgerblue",
  //       // flex: 1,
  //       // flexBasis: 100, //width or height
  //       // flexGrow:1, //빈 공간 채워짐 .. flex와 똑같더
  //       width: 100, //범위를 넘엇지만
  //       // flexShrink:1, //이걸 하면 다른 view크기를 지키는 한에 커진다  == flex:-1
  //       height: 100,
  //       // alignSelf: "flex-start",
  //     }}
  //   />
  //   <View
  //     style={{
  //       backgroundColor: "gold",
  //       // flex: 1,
  //       width: 100,
  //       height: 100,
  //       top: 20,
  //       // Button: 20,
  //       left: 20,
  //       // right:20, //20만큼 오른쪽 떨어짐
  //       // position: "absolute", //절대 위치 지정
  //       position:"relative" //상대적
  //     }}
  //   />
  //   <View
  //     style={{
  //       backgroundColor: "tomato",
  //       // flex: 1,
  //       width: 100,
  //       height: 100,
  //     }}
  //   />
  {
    /* <View
        style={{
          backgroundColor: "grey",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      /> */
  }
  // </View>
  // );
}

// style.~ 하는 것보다 우선으로 설정됨??
// const containerStyle = { backgroundColor: "orange" };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // alignItems: 'center',
//     // justifyContent: 'center',

//     // 안드로이드일 때 상단 바 띄우기
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
