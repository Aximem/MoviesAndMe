// Components/Search.js

import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
}

export default Search
