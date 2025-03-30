import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,navigation } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container1}>

    <View style={styles.container2}>
      <Text style={styles.redText1}>QURAN APP</Text>
      <Image source={require('../quran.png')}   style={styles.image} />
      <Text style={styles.redText}>Last Read</Text>
      <Text style={styles.redText}>Al-Faatiha</Text>
      <Text style={styles.redText}>VERSE NO 7</Text>



      
      <StatusBar style="auto" />
    </View>
    <View style={styles.container3}>

    <View style={styles.child1} >
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Read Quran')
      }>
        <Image source={require('../al-quran.png')}   style={styles.image} />
        <Text style={{fontWeight: 'bold',fontSize: 20 }}>Read Quran</Text>
        <StatusBar style="auto" />
        </TouchableOpacity>

    </View>
    
    <View style={styles.child2} >
      
      
    <Image source={require('../loupe.png')}   style={styles.image} />
    <Text style={{fontWeight: 'bold',fontSize: 20 }}>Search</Text>

      <StatusBar style="auto" />
    </View>
    <View style={styles.child3} >

      

    <Image source={require('../bookmark.png')}   style={styles.image} />
    <Text style={{fontWeight: 'bold',fontSize: 20 }}>Bookmark</Text>
    <StatusBar style="auto" />
    
    </View>
    <View style={styles.child4} >
      

    <Image source={require('../setting.png')}   style={styles.image} />
    <Text style={{fontWeight: 'bold',fontSize: 20 }}>Settings</Text>
    <StatusBar style="auto" />
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#4D55CC',
    
  },
  redText: {
    color: 'white', // Named color,
    fontSize:'20'
      },

      redText1: {
        fontWeight:'bold',
        fontSize:'30',
        // marginTop:'10pxs',
        marginBottom:'7px',
        color: 'white', // Named color
          },
  
  container2: {
    color: 'red',
    flex: 0.4,
    backgroundColor: '#4D55CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
  
  },

  image: {

    width: 40,      // Adjust width as needed
    height: 40,
    borderColor:'black',     // Adjust height as needed
    borderRadius: 10, // Rounded corners
    marginTop:'20',
    marginBottom:'20',
    resizeMode: 'contain', // Makes sure the image fits without distortion
  },
  container3: {
    flex: 0.7,
    borderWidth: 3,
    borderColor: 'white',
    borderStartStartRadius: 20,
    borderStartEndRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
  child1: {
    borderRadius: 1,
    borderColor: 'black',
    borderWidth: 1,
    width: '40%',
    alignItems: 'center',
    justifyContent:'center',
    height: '20%',
    borderStartStartRadius: 20,
    borderStartEndRadius: 20,
    borderEndStartRadius:20,
    borderEndEndRadius:20,
    marginTop:20,
    marginBottom:20,
    marginLeft:10
  },
  child2: {marginLeft:'10',
   borderRadius: 1, // Removed 'px'
  borderColor: 'black',
  borderWidth: 1, // Added borderWidth
  width: '40%',
  alignItems: 'center',
  height: '20%',
  borderStartStartRadius: 20,
  borderStartEndRadius: 20,
  borderEndStartRadius:20,
  borderEndEndRadius:20,
    
  },
  child3: {marginLeft:'10',
    borderRadius: 1, // Removed 'px'
    borderColor: 'black',
    borderWidth: 1, // Added borderWidth
    width: '40%',
    alignItems: 'center',
    height: '20%',
    borderStartStartRadius: 20,
    borderStartEndRadius: 20,
    borderEndStartRadius:20,
    borderEndEndRadius:20,
    
  },
  child4: {
    marginLeft:'10',
    borderRadius: 1, // Removed 'px'
    borderColor: 'black',
    borderWidth: 1, // Added borderWidth
    width: '40%',
    alignItems: 'center',
    height: '20%',
    borderStartStartRadius: 20,
    borderStartEndRadius: 20,
    borderEndStartRadius:20,
    borderEndEndRadius:20,

    
  }
});