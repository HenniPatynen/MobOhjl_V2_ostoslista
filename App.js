import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [ostos, setOstos]=useState('');
  const [lista, setLista]=useState([]);

  //painikkeiden toiminnot
  const lisaaListalle =()=>{
    setLista([...lista, {key: ostos}]);
    setOstos('');
  }

  const tyhjenna =()=>{
    setLista([]);
  }

  return (
    <View style={styles.container}>
      
      <TextInput style ={styles.input} onChangeText={text=> setOstos(text)} value={ostos}/>
    <View style ={styles.buttons}>
    <Button color={'pink'} title='Lisää' onPress={lisaaListalle}/>
    <Text>    </Text>
    <Button color={'hotpink'} title='Tyhjennä lista' onPress={tyhjenna}/>
    </View>
    <FlatList
      data={lista}
      renderItem={({ item}) => <Text>{item.key}</Text>}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
    
  },
  input: {
    marginTop: 50,
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: 'black'
  },  
  buttons: {
    flexDirection: 'row',
    marginTop: 15
  }
});
