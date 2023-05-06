import {Animated, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native'
import React, {Component} from 'react'
import { Button } from 'react-native-web'

export default class PrestadorScreen extends Component {

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
                            <Text style={styles.text}>Insira suas informações profissionais:</Text>
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="Nome"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                            <View style={styles.corpoSecundario}>
                                <TextInput
                                    placeholderTextColor="#3337"
                                    style={styles.inputSec}
                                    placeholder="Telefone"
                                    autoCorrect={false}
                                    onChangeText={() => {}}
                                />
								<View style={styles.inputSpacer} />
                                <TextInput
                                    placeholderTextColor="#3337"
                                    style={styles.inputSec}
                                    placeholder="Categoria"
                                    autoCorrect={false}
                                    onChangeText={() => {}}
                                />
                            </View>
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="Endereço"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="CNPJ"
                                autoCorrect={false}
                                onChangeText={() => {}}
                            />
                            <TextInput
                                placeholderTextColor="#3337"
                                style={styles.input}
                                placeholder="CPF"
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
                                placeholder="Nome fantasia"
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
		marginBottom: 20,
		color: '#333',
		marginTop: 5,
		fontSize: 17,
		width: '100%',
		padding: 5

	},
	inputSec: {
		backgroundColor: '#FFF',
		marginBottom: 20,
		color: '#333',
		fontSize: 17,
		width: '79%',
		padding: 5
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
    corpoSecundario: {
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