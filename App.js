import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */
  

  return (
    <View style={styles.container}>
      <View style = {styles.headerNav}>

        <View style = {styles.headerIconView}>
          <Image
            style = {styles.headerIcon}
            source = {require('../cs47-a2-starter/assets/Icons/menu_light.png')}
          />
        </View>

        <View styles = {styles.headerIconView}>
            <Text
            style={{fontSize: 32, 
              fontFamily: 'Sydney', // test to see if the font is loaded, feel free to remove this
            }}>
            ensom
          </Text>
        </View>

        <View style = {styles.headerIconView}>
          <Image
            style = {styles.headerIcon}
            source = {require('../cs47-a2-starter/assets/Icons/sun.png')}
          />
        </View>

      </View>


      <View style = {styles.Body}>
        <View style = {styles.profileCard}>
          <Image
            style = {styles.image}
            imageStyle = {{borderRadius: 6}}
            source = {require('../cs47-a2-starter/assets/Profiles/mtl.jpg')}
          />
          <Text style = {styles.name}>MTL</Text>
          <Text style = {styles.distance}>2 miles away</Text>

        </View>


        <View style = {styles.secondCard}>
          <Text style = {{fontSize: 22, fontFamily: 'Sydney'}}>My hottest take</Text>
          <View style = {styles.row}>

            <Image
              style = {styles.firstIcon}
              source = {require('/Users/andrewfranks/Desktop/cs47-a2-starter/assets/Icons/player_light.png')}
            />
            <Image
              style = {styles.bodyIcon}
              source = {require('../cs47-a2-starter/assets/Icons/audio_waveform_light.png')}
            />
            <Text></Text> 

          </View>

        </View>

      </View>


      <View style = {styles.footerNav}>
        <View style = {styles.footerIconView}>
          <Image
            style = {styles.footerIcon}
            source = {require('../cs47-a2-starter/assets/Icons/discover_light.png')}
          />
          <Text style = {styles.footerfont}>Discover</Text>
        </View>

        <View style = {styles.footerIconView}>
          <Image
          style = {styles.footerIcon}
          source = {require('../cs47-a2-starter/assets/Icons/heart_light.png')}
          />
          <Text style = {styles.footerfont}>Matches</Text>
        </View>

        <View style = {styles.footerIconView}>
          <Image
          style = {styles.footerIcon}
          source = {require('../cs47-a2-starter/assets/Icons/messages_light.png')}
          />
          <Text style = {styles.footerfont}>DMs</Text>
        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerNav: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'lightgrey',
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
  },

  headerIconView: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    marginTop: 0,
    paddingTop: 10,
  },

  headerIcon: {
    padding: 20,
    //paddingTop:10,
    flex: 1,
    width: "100%",
    resizeMode: 'contain',
    alignItems: 'center',
  },

  headerfont: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: 'left',
    color: 'black',
    fontFamily: "SydneyBold",
  },


  Body: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding:10,
    flex: 5,
    //backgroundColor: "red",
    width: "75%",
    flexDirection: 'column',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  profileCard: {
    justifyContent: "space-between",
    alignItems: 'flex-start',
    flexDirection: "column",
    height: '55%',
    //backgroundColor: "b",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  image: {
    height: "100%",
    width: "100%",
    position: 'relative',
    borderRadius: 10,
  },

  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    position: 'absolute',
    marginStart: 20,
    marginTop: 10,
    fontFamily: "Sydney",

  },

  distance: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    marginStart: 20,
    marginTop: 280,
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Sydney",
  },

  secondCard: {
    justifyContent: "space-between",
    alignItems: 'flex-start',
    flexDirection: "column",
    height: "40%",
    padding: 30,
    backgroundColor: 'white',
    marginBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10, 
  },


  row: {
    flexDirection: 'row',
    height: "50%",
    marginBottom: 50,
    width:'100%',
    //backgroundColor: 'red',
  },
  
  bodyIcon: {
    //height: '50%',
    //width: "50%",
    resizeMode: 'contain',
    //alignItems: 'left',
    flex: 3,
    //paddingBottom: 40,
    marginLeft: 20,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },

  firstIcon: {
    flex: 1,
    //height: "10%",
    //width: '100%',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },



  footerNav: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    //height: 100,
    backgroundColor: 'black',
    flexDirection: 'row',
    flex: 1,
    paddingEnd: 30,
    paddingStart: 20,
    //marginLeft: 10,
    //marginRight: 10,
    

  },


  footerIcon: {
    //padding: 20,
    flex: 1,
    width: 50,
    height: 60,
    resizeMode: 'contain',
    alignItems: 'center',
    //paddingLeft: 10,
  },

  footerIconView: {
    width: 100,
    height: 100,
    alignItems: 'center',
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },

  footerfont: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Sydney',
    
  },


});
 
/*
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'Sydney', // test to see if the font is loaded, feel free to remove this
        }}>
        Open up App.js to start working on your app!
      </Text>
      <Text
        style={{
          fontFamily: 'Sydney-Bold', // test to see if the font is loaded, feel free to remove this
        }}>
        ~Good luck~
      </Text>
    </View>
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
*/
