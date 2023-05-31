import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  return (
   <TouchableHighlight style={styles.button} onPress={() => {}}>
        <Text
          style={{color:'#fff', fontSize:15, textAlign:'center'}}>
            Foto
        </Text>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{
    justifyContent: 'center',
    alignItens:'center',
    elevation:15,
    backgroundColor: '#008080',
    width:100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    bottom: 50,
    margin:150,
  },
});
