import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation.jsx'



export default function App() {
  return (
    <ClerkProvider 
    publishableKey='pk_test_ZmxlZXQtZHJ1bS02Ni5jbGVyay5hY2NvdW50cy5kZXYk'>
      <View style={styles.container}>
      {/*sign in component*/}
       
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        
        {/*signout component*/}
       
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});
