import {Image, Animated, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground,} from 'react-native'
import React, {Component} from 'react'
export default class InicioScreen extends Component {

	render() {
		return (
			<View
				style={styles.background}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<ImageBackground source={require('./assets/Fundo.jpg')}
    			style={styles.backgroundImage}>
					<View style={styles.topo}>
						<Image style={styles.logo} source={require('./assets/favicon.png')}/>
						<TextInput
							placeholderTextColor="#3337"
							style={styles.input}
							placeholder="Buscar..."
							autoCorrect={false}
							onChangeText={() => {}}

						/>
						<View style={styles.meio}>
							<Text style={styles.text}>Serviços mais buscados</Text>
						</View>
					</View>
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
		backgroundImage: 'url(${backgroundImg})',
	},
	topo:{
		flexDirection: 'column',
		backgroundColor: '#282828',
		alignItems: 'center'
	},
	meio: {
		backgroundColor: 'grey',
		width: '100%',
		marginTop: '2%',
	},
	logo: {
		alignItems: 'center',
		justifyContent: 'center',
		resizeMode: 'cover',
		marginTop: '8%',
		height: '35%',
		width: '35%'

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
		color: '#333',
		fontSize: 17,
		padding: 5,
	},
 	text: {
		fontSize: 24,
		fontWeight: 900,
		color: '#FFF',
		marginBottom: 30,
		marginTop: '5%',
		textAlign: 'center',
		textAlignVertical: 'top'
  	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // ajusta a imagem ao tamanho da tela
	},
})