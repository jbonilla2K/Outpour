import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  Text,
  StatusBar,
  Pressable,
  Touchable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import Signup from "./Signup";
import Forgot from "./Forgot";
import Home from "./Home";
import BusinessPage from "./BusinessPage";
import Search from "./Search";
import UserReviews from "./UserReviews";
import UserAlerts from "./UserAlerts";
import Favorites from "./Favorites";
import UserBusiness from "./UserBusiness";
import EditProfile from "./EditProfile";
import Friends from "./Friends";
import Settings from "./Settings";
import ViewAll from "./ViewAll";
import EditUserBusiness from "./EditUserBusiness";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

// Separate SignInScreen Component
const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/Logo_Outpour_Long.png")}
      />
      <View style={styles.inputView}>
        <Text style={styles.inputLabelLoggedOut}>Email</Text>
        <TextInput
          label="Email"
          style={styles.input_blue}
          placeholder="email"
        />
        <Text style={styles.inputLabelLoggedOut}>Password</Text>
        <TextInput
          label="password"
          style={styles.input_red}
          placeholder="password"
        />
      </View>
      <View style={styles.button_field}>
        <TouchableOpacity //Signin
          style={styles.button_blue}
          accessibilityLabel="Enter Outpour app"
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity //Sign Up
          style={styles.button_blue}
          accessibilityLabel="Sign Up"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity //Forgot
          style={styles.button_red}
          accessibilityLabel="Forgot Password"
          onPress={() => navigation.navigate("Forgot")}
        >
          <Text style={styles.buttonText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

// Stack Navigator
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BusinessPage"
        component={BusinessPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserReviews"
        component={UserReviews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserAlerts"
        component={UserAlerts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserBusiness"
        component={UserBusiness}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Friends"
        component={Friends}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewAll"
        component={ViewAll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditUserBusiness"
        component={EditUserBusiness}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// App Component
function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;

/*Julian's Notes 2: iOS Boogaloo
-UPDATED the following packages
  react-native 0.73.2 -> 0.73.4
  expo@50.0.2 -> 50.0.6
  @expo/metro-runtime@3.1.2 -> 3.1.3

-FIXED ballooned fonts due to fontSize calls (all pages)

-MOVED all page component styles to styles.js 
!NOTE BottomNavBar & PageTitle kept their local style calls
*/
