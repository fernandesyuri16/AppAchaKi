import {Animated, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native'
import React, {Component} from 'react'
import { Button } from 'react-native-web'

export default class EstabelecimentoScreen extends Component {

	render() {
		return (
			<View
				style={styles.background}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<ImageBackground source={require('./assets/Fundo.jpg')}
    			style={styles.backgroundImage}>
					<Animated.View
						style={[styles.container]}>
                        <View style={styles.corpo}>
                            <Text style={styles.text}>Insira as informações do estabelecimento:</Text>
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="Endereço"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                            <View style={styles.corpoSec}>
                                <TextInput
                                    placeholderTextColor="#3337"
                                    style={styles.inputTer}
                                    placeholder="Horário comercial"
                                    autoCorrect={false}
                                    onChangeText={() => {}}
                                />
                                <TextInput
                                    placeholderTextColor="#3337"
                                    style={styles.inputQua}
                                    placeholder="Categoria"
                                    autoCorrect={false}
                                    onChangeText={() => {}}
                                />
                            </View>
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="Nome fantasia"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="CNPJ / CPF"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="Contato"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="Anexar fotos"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="Anexar certificados"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.inputSec}
                                placeholder="Informações adicionais"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                        </View>
						<TouchableOpacity style={styles.submitbutton}>
							<Text style={styles.submittext}>Confirmar</Text>
						</TouchableOpacity>
						<TouchableOpacity>
						<Text  style={styles.registerText}>Já possui uma conta? <Text onPress={() => this.props.navigation.navigate ("LoginScreen")} style={styles.registerText2}> Conectar </Text> </Text>
						</TouchableOpacity>
					</Animated.View>
				</ImageBackground>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: '#333',
	},
	logocontainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 50,
	},
	input: {
		backgroundColor: '#FFF',
		marginBottom: 10,
		color: '#333',
		marginTop: 2,
		fontSize: 17,
		width: '100%',
		padding: 6
	},
    inputSec: {
        backgroundColor: '#FFF',
		marginBottom: 10,
		color: '#333',
		marginTop: 2,
		fontSize: 17,
		width: '100%',
        paddingBottom: 35,
        padding: 6,
        textAlignVertical: 'top'
    },
    inputTer:{
        backgroundColor: '#FFF',
		marginBottom: 10,
		color: '#333',
		fontSize: 17,
		width: '83.5%',
		padding: 5
    },
    inputQua: {
        backgroundColor: '#FFF',
		marginBottom: 10,
		color: '#333',
		fontSize: 17,
		width: '80.5%',
		padding: 5,
        marginLeft: 5
    },
	inputSpacer: {
		width: 16.1, // Largura do espaço entre os inputs
	},
	submitbutton: {
		backgroundColor: '#282828',
		borderWidth: 2,
		borderColor: 'white',
		width: '50%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 40,
	},
	submittext: {
		color: '#FFF',
		fontSize: 18,
	},
 	text: {
		fontSize: 24,
		fontWeight: 900,
		color: '#FFF',
		marginBottom: 30,
		marginTop: 45,
		textAlign: 'center'
  	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // ajusta a imagem ao tamanho da tela
	},
    corpo: {
		flex: 1,
		width: '80%'
    },
    corpoSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
		alignItems: 'center',
		width: '60%',
    },
	registerText: {
		fontSize: 15,
		color: '#FFF',
		elevation: 100
	},
	registerText2: {
		fontSize: 17,
		fontFamily: '',
		color: '#282828',
		fontWeight: '900',
		textShadowColor: 'white',
		textShadowOffset: { width: 0, height: 1, },
		textShadowRadius: 1,
	}
})