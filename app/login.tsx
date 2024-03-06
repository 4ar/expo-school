import { StyleSheet, Text, View, Image } from 'react-native';
import Input from '../shared/input/input';
import Button from '../shared/Button/button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';
import CustomLink from '../shared/CustomLink/CustomLink';
import { Fonts } from '../shared/tokens';

export default function Login() {
	const [error, setError] = useState<string | undefined>();

	const alert = () => {
		setError('Неверный логин или пароль');
		setTimeout(() => {
			setError(undefined);
		}, 4000);
	};

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Image
					style={styles.logo}
					source={require('../assets/logo.png')}
					resizeMode="contain"
				/>
				<View style={styles.formLogin}>
					<Input placeholder="Email" />
					<Input placeholder="Пароль" isPassword />
					<View style={styles.button}>
						<Button text="Войти" onPress={alert} />
					</View>
				</View>
				<CustomLink href={'restore'} text="Восстановить пароль" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#16171D',
		justifyContent: 'center',
		color: 'white',
		padding: 55,
	},
	logo: {
		width: 220,
		alignSelf: 'center',
	},
	content: {
		gap: 50,
	},
	formLogin: {
		gap: 16,
	},

	button: {
		backgroundColor: '#6C38CC',
		lineHeight: 20,
		fontSize: 16,
		borderRadius: 10,
		height: 58,
		justifyContent: 'center',
	},
	recoverPass: {
		color: '#A97BFF',
		lineHeight: 22,
		fontSize: 18,
		textAlign: 'center',
		fontFamily: Fonts.semibold,
	},
});
