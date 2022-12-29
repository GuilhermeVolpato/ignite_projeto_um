import {SafeAreaView, StatusBar} from "react-native"
import Home from "./src/screens/Home/index" 

export default function App(){

  return(
    <SafeAreaView style={{flex: 1}}>
      <Home/>
      <StatusBar/>
    </SafeAreaView>
  )
}
