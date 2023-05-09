import {
	Animated,
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
import React, {Component} from 'react'

const initialState = {
	offset: new Animated.ValueXY({x: 0, y: 95}),
	opacity: new Animated.Value(0),
	logo: new Animated.ValueXY({x: 1, y: 1}),
}



export default class InicioScreen extends Component {

	state = {...initialState}

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
				bounciness: 10,
				useNativeDriver: true,
			}).start(),
		])
	}

	render() {
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
						<TouchableOpacity style={styles.submitbutton}>
							<Text onPress={() => this.props.navigation.navigate ("HomeScreen")} style={styles.submittext}>Teste - Voltar</Text>
						</TouchableOpacity>
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
		backgroundImage: 'url(${backgroundImg})',
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
		paddingBottom: 70,
	},
	input: {
		backgroundColor: '#FFF',
		width: '90%',
		marginBottom: 20,
		color: '#333',
		fontSize: 17,
		padding: 10,
	},
	submitbutton: {
		backgroundColor: '#282828',
		borderWidth: 2,
		borderColor: 'white',
		width: '50%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
	},
	submittext: {
		marginTop: 5,
		color: '#FFF',
		fontSize: 18,
	},
	registerText: {
		fontSize: 15,
		color: '#FFF',
		elevation: 100,
		marginTop: 15,
	},
	registerText2: {
		fontSize: 17,
		color: '#282828',
		fontWeight: '900',
		textShadowColor: 'white',
		textShadowOffset: { width: 0, height: 1, },
		textShadowRadius: 1,
	},
 	text: {
		fontSize: 20,
		color: '#FFF',
		marginBottom: 30,
  	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // ajusta a imagem ao tamanho da tela
	},
})