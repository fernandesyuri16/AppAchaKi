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
} from 'react-native'
import React, {Component} from 'react'
const initialState = {
	offset: new Animated.ValueXY({x: 0, y: 95}),
	opacity: new Animated.Value(0),
	logo: new Animated.ValueXY({x: 1, y: 1}),
}
export default class App extends Component {
	state = {...initialState}
	keyboardDidShow = () => {
		Animated.parallel([
			Animated.timing(this.state.logo.x, {
				toValue: 0.7,
				duration: 100,
				useNativeDriver: true,
			}).start(),
			Animated.timing(this.state.logo.y, {
				toValue: 0.7,
				duration: 100,
				useNativeDriver: true,
			}).start(),
		])
	}
	keyboardDidHide = () => {
		Animated.parallel([
			Animated.timing(this.state.logo.x, {
				toValue: 1,
				duration: 200,
				useNativeDriver: true,
			}).start(),
			Animated.timing(this.state.logo.y, {
				toValue: 1,
				duration: 100,
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
		return (
			<KeyboardAvoidingView
				style={styles.background}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<View style={styles.logocontainer}>
					<Animated.Image
						style={ {
							transform: [
								{scaleX: this.state.logo.x},
								{scaleY: this.state.logo.y},
							],
						}}
						source={require('./assets/logoLog.png')}
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
          <Text style={styles.text}>Entre em sua Conta!</Text>
					<TextInput
						placeholderTextColor="#3337"
						style={styles.input}
						placeholder="Email"
						autoCorrect={false}
						onChangeText={() => {}}
					/>
					<TextInput
						placeholderTextColor="#3337"
						style={styles.input}
						placeholder="Senha"
						autoCorrect={false}
						onChangeText={() => {}}
					/>
					<TouchableOpacity style={styles.submitbutton}>
						<Text style={styles.submittext}>Acessar</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.registertext}>Criar conta gratuita</Text>
					</TouchableOpacity>
				</Animated.View>
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
    width: 100,
    heigth: 100,
	},

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 50,
	},
	input: {
		backgroundColor: '#FFF',
		width: '90%',
		marginBottom: 15,
		color: '#333',
		fontSize: 17,
		borderRadius: 7,
		padding: 15,
	},
	submitbutton: {
		backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 7,
	},
	submittext: {
		color: '#FFF',
		fontSize: 18,
	},
	registertext: {
		color: '#FFF',
	},
  text: {
    color: '#FFF',
    marginBottom: 10,
  }
})