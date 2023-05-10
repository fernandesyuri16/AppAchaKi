import {Image, Animated, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground,} from 'react-native'
import React, {Component} from 'react'
import { LinearGradient } from 'expo-linear-gradient';

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
						<LinearGradient
							colors={['#EE778B', '#F2509E', '#D83AF0', '#6324EB']} // Cores do degradê
							start={[0, 0]} // Posição inicial do degradê (esquerda superior)
							end={[1, 0]} // Posição final do degradê (direita superior)
							style={styles.gradient}
						>
						<View style={styles.meio}>
							<Text style={styles.text}>Serviços mais buscados</Text>
						</View>
						</LinearGradient>

						{/* Adicionar o logo dos serviços aqui */}

						<LinearGradient
							colors={['#EE778B', '#F2509E', '#D83AF0', '#6324EB']} // Cores do degradê
							start={[0, 0]} // Posição inicial do degradê (esquerda superior)
							end={[1, 0]} // Posição final do degradê (direita superior)
							style={styles.gradient}
						>
						<View style={styles.meio}>
							<Text style={styles.text}>Categorias Recomendadas</Text>
						</View>
						</LinearGradient>
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
		backgroundColor: '#282828',
		alignItems: 'center'
	},
	gradient: {
		width: '100%',
		height: '12%',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '1.5%'
	},
	logo: {
		alignItems: 'center',
		justifyContent: 'center',
		resizeMode: 'cover',
		marginTop: '8%',
		height: '25%',
		width: '33%'

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
		fontSize: 22,
		fontWeight: 900,
		color: '#FFF',
		textAlign: 'center'
  	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // ajusta a imagem ao tamanho da tela
	},
})