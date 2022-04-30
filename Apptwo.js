import  React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default class Apptwo extends Component {
   constructor() {
    super();
    this.state = {
      text: '',
      data:[], 
    }
  }

  handleSave = () => {
    const { text, data } = this.state;
    data.push({text})
    this.setState({data, text:''})
  } 

  render(){
    const { text, data } = this.state;
  return (
    <View style={{flex:1, paddingTop: 30}}>
    <View style={styles.title}>
    <Text style={styles.title_text}>To-Do Application @marijuabakunin</Text>
    </View>
    <View style={styles.header}>
    <TextInput 
    style={styles.input}
    value={text}
    onChangeText={(text) => {this.setState({text})}}
    />
    <TouchableOpacity onPress={this.handleSave} style={styles.touchable}>
    <Text style={styles.input_text}>Add</Text>
    </TouchableOpacity>
    </View>
    <View>
    { data.map((item) => {
      return (<Text style={styles.card}> {item.text} </Text>)
    })  }
    </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    backgroundColor: 'blue',
  },
  title_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#ccc',
    padding: 10,
    flexDirection: 'row',
    margin: 5
  },
  input : {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  touchable: { 
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginLeft: 5
  },
  input_text : {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#ddd',
    margin: 5,
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  }
})