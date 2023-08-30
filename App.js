import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { styles, myimage } from './assets/styles/styles1'

export default function App() {
  // States
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  //
  let mymess = "Este es el pie de la GUI";
  let mimage = "cantigua.jpg"
  //METODOS 
  let calculate =(oper) =>{
    let mresult= 0
    let mvalue1=parseFloat(value1)  
    let mvalue2=parseFloat(value2)     

    switch(oper){
      case "+":
      mresult= mvalue1 + mvalue2;
      break;
      case "-":
      mresult= mvalue1 - mvalue2;
      break;
      case "*":
      mresult= mvalue1 * mvalue2;
      break;
      case "/":
      mresult= mvalue1 / mvalue2;
      break


    }
 setResult(mresult);
  }
  return (
    <View style={styles.container}>
      <Banner imagename={mimage}></Banner>
      <View style={{ flex: 4, backgroundColor: 'gray', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Calculadora</Text>
        <Text>Valor 1</Text>
        <TextInput
          label='Ingrese Valor 1'
          onChangeText={value1 => setValue1(value1)}
          value={value1}
          style={{ backgroundColor: 'powderblue' }}
          left={<TextInput.Icon icon="calculator" />}
        />
        <Text>Valor 2</Text>
        <TextInput
          label='Ingrese Valor 2'
          onChangeText={value2 => setValue2(value2)}
          value={value2}
          style={{ backgroundColor: 'pink' }}
          left={<TextInput.Icon icon="counter" />}
        />
        <Text>Resultado</Text>
        <Text>{parseFloat(result).toFixed(1)}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button icon="plus"
            mode="contained"
            onPress={() => calculate("+")}>
            Sumar
          </Button>

          <Button icon="minus"
            mode="contained"
            onPress={() => calculate("-")}>
            Restar
          </Button>


        </View>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button icon="multiplication"
            mode="contained"
            onPress={() => calculate("*")}>
            Multiplicar
          </Button>

          <Button icon="division"
            mode="contained"
            onPress={() => calculate("/")}>
            Dividir
          </Button>


        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button icon="nuke"
            mode="contained"
            onPress={() => {
              setValue1('')
              setValue2('')
              setResult('')
            }}>
            Limpiar
          </Button>



        </View>
        
</View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Footer message="Este es el pie"></Footer>
      </View>
    </View>
  );
}





