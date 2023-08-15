import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
function Feed() {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      <ScrollView style={{flex: 1, flexDirection: "column", width: "100%"}}>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity> 
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity> 
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity> 
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity> 
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity> 
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity> 
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity> 
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      <TouchableOpacity  onPress={() => console.log("Pressed")}><Text>Pressione-me!</Text></TouchableOpacity>
      
      </ScrollView>
      <Button
        icon="check"
        mode="contained"
        style={{ borderRadius: 8, padding: 2, backgroundColor: "#ff0000"}}
        onPress={() => console.log("Pressed")}
      >
        Acessar
      </Button>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
