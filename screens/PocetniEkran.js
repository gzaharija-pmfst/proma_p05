import React from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import Kartica from '../components/Kartica'


const PocetniEkran = (props) => {
  return(
    <View style={stil.ekran}>
      <Text style={stil.naslov}>Započni novu igru</Text>
      <Kartica stil={stil.unos}>
        <Text>Odaberi jedan broj</Text>
        <TextInput />
        <View style={stil.tipke}>
          <Button title="Odustani" onPress={() => {}}/>
          <Button title="Prihvati"onPress={() => {}}/>
        </View>
      </Kartica>
    </View>
  )
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#f5edb0"
  },
  naslov: {
    fontSize: 20,
    marginVertical: 10
  },
  unos: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    backgroundColor: "white",
  },
  tipke: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15
  }
})

export default PocetniEkran