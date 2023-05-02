import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const ChurrascoApp = () => {
  const [numHomens, setNumHomens] = useState('');
  const [numMulheres, setNumMulheres] = useState('');
  const [carneTotal, setCarneTotal] = useState(0);
  const [cervejaTotal, setCervejaTotal] = useState(0);

  const calcularQuantidade = () => {
    const carneHomens = numHomens * 0.35; // gramas
    const cervejaHomens = numHomens * 2; // litros
    const carneMulheres = numMulheres * 0.28; // gramas
    const cervejaMulheres = numMulheres * 1.5; // litros

    const totalCarne = carneHomens + carneMulheres;
    const totalCerveja = cervejaHomens + cervejaMulheres;

    setCarneTotal(totalCarne);
    setCervejaTotal(totalCerveja);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
        source={require('./assets/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      </View>

        <Text style={styles.title}>CHURRASCO</Text>
        <Text style={styles.label}>QUANTIDADE DE HOMENS:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={numHomens}
          onChangeText={setNumHomens}
          placeholder='Digite a quantidade'
        />
        <Text style={styles.label}>QUANTIDADE DE MULHERES:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={numMulheres}
          onChangeText={setNumMulheres}
          placeholder='Digite a quantidade'
        />
        <Button style={styles.button} title="Calcular" onPress={calcularQuantidade} color= '#900C3F'/>
        <Text style={styles.result}>Quantidade Total de carne: {carneTotal} (g) </Text>
        <Text style={styles.result}>Quantidade total de cerveja: {cervejaTotal} (L) </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#454545',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#900C3F',
    marginBottom: 15,
    marginTop: 100
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#900C3F',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  logoContainer: {
  width: 10,
  alignItems: 'center',
  marginBottom: 0,
  },
  logo: {
    width: 50,
    alignItems: 'center',
    height: 50,
  },
});

export default ChurrascoApp;
