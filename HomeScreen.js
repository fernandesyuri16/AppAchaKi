import {
	Animated,
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ImageBackground,
} from 'react-native'
import React, {Component, useState} from 'react'
import * as Font from 'expo-font'
import { RadioButton } from 'react-native-paper';

const initialState = {
	offset: new Animated.ValueXY({x: 0, y: 95}),
	opacity: new Animated.Value(0),
	logo: new Animated.ValueXY({x: 1, y: 1}),
}

export default class HomeScreen extends Component {

	state = {...initialState, selectedOption: ''}

    handleOptionChange = (option) => {
    	this.setState({ selectedOption: option });
    };

	handleCadastroPress = () => {
		const { selectedOption } = this.state;

		if (selectedOption === 'prestador') {
		  // Navegar para a tela específica de prestadores
		  this.props.navigation.navigate('PrestadorScreen');
		} else if (selectedOption === 'cliente') {
		  // Navegar para a tela específica de clientes (falta criar)
		  this.props.navigation.navigate('ClienteScreen');
		}
	  };

	keyboardDidShow = () => {
		Animated.parallel([
			Animated.timing(this.state.logo.x, {
				toValue: 0.7,
				duration: 35,
				useNativeDriver: true,
			}).start(),
			Animated.timing(this.state.logo.y, {
				toValue: 0.7,
				duration: 35,
				useNativeDriver: true,
			}).start(),
		])
	}
	keyboardDidHide = () => {
		Animated.parallel([
			Animated.timing(this.state.logo.x, {
				toValue: 1,
				duration: 35,
				useNativeDriver: true,
			}).start(),
			Animated.timing(this.state.logo.y, {
				toValue: 1,
				duration: 35,
				useNativeDriver: true,
			}).start(),
		])
	}

	componentDidMount = () => {
		Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
		Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
		Animated.parallel([
			Animated.spring(this.state.offset, {
				toValue: 0,
				speed: 4,
				bounciness: 10,
				useNativeDriver: true,
			}).start(),
			Animated.timing(this.state.opacity, {
				toValue: 1,
				duration: 800,
				useNativeDriver: true,
			}).start(),
		])
	}

	render() {

        const { selectedOption } = this.state;

		return (
			<KeyboardAvoidingView
				style={styles.background}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<ImageBackground source={require('./assets/Fundo.jpg')}
    			style={styles.backgroundImage}>
					<View style={styles.logocontainer}>
						<Animated.Image
							style={ {
								height: 150,
								width: 160,
								transform: [
									{scaleX: this.state.logo.x},
									{scaleY: this.state.logo.y},
								],
							}}
							source={require('./assets/logoGG.png')}
						/>
					</View>
					<Animated.View
						style={[
							styles.container,
							{
								opacity: this.state.opacity,
								transform: [
									{
										translateY: this.state.offset.y,
									},
								],
							},
						]}>

						<View style={styles.radioButtons}>
							<TouchableOpacity
								style={{ marginRight: 40 }}
								onPress={() => this.handleOptionChange('prestador')}>

								<View style={styles.radioPrestador}>
									<RadioButton.Android
										value="prestador"
										color="white"
										uncheckedColor="white"
										status={selectedOption === 'prestador' ? 'checked' : 'unchecked'}
										onPress={() => this.handleOptionChange('prestador')}
									/>
									<Text style={styles.typePerson}>Prestador</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ marginRight: 10 }}
								onPress={() => this.handleOptionChange('cliente')}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<RadioButton.Android
										value="cliente"
										color="white"
										uncheckedColor="white"
										status={selectedOption === 'cliente' ? 'checked' : 'unchecked'}
										onPress={() => this.handleOptionChange('cliente')}
									/>
									<Text style={styles.typePerson}>Cliente</Text>
								</View>
							</TouchableOpacity>
						</View>

                        <View style={styles.buttons}>

                            <TouchableOpacity style={styles.loginButton}>
                            <Text onPress={() => this.props.navigation.navigate ("LoginScreen")} style={styles.loginText}> Login </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.registerButton} onPress={this.handleCadastroPress}>
                                <Text style={styles.loginText}>Cadastro</Text>
                            </TouchableOpacity>

                        </View>

					</Animated.View>
				</ImageBackground>
			</KeyboardAvoidingView>
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
		marginTop: 230,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginButton: {
		backgroundColor: '#282828',
		borderWidth: 2,
		borderColor: 'white',
		width: '25%',
		height: 50,
        marginRight: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
	},
    registerButton: {
		backgroundColor: '#282828',
		borderWidth: 2,
		borderColor: 'white',
		width: '25%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
	},
	loginText: {
		color: '#FFF',
		fontSize: 18,
	},
	registerText: {
		fontSize: 15,
		color: '#FFF',
		elevation: 100,
		marginTop: 15,
	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // ajusta a imagem ao tamanho da tela
	},
    buttons: {
        flexDirection: 'row',
		marginBottom: 200,
    },
    radioButtons: {
        justifyContent: 'center',
        flexDirection: 'row',
		marginBottom: 35,
    },
    radioPrestador: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    typePerson: {
        fontSize: 18,
        color: 'white',
		textShadowColor: 'black',
		textShadowOffset: {width: 2, height: 2},
		textShadowRadius: 8
    }
})