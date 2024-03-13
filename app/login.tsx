import { StyleSheet, Text, View, Image } from 'react-native';
import Input from '../shared/input/input';
import Button from '../shared/Button/button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import CustomLink from '../shared/CustomLink/CustomLink';
import { Fonts } from '../shared/tokens';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';

export default function Login() {
	const [localError, setLocalError] = useState<string | undefined>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);

	const submit = () => {
		if (!email) {
			setLocalError('Не введен email');
			return;
		}
		if (!password) {
			setLocalError('Не введен пароль');
			return;
		}
		login({ email, password });
	};

	useEffect(() => {
		if (error) {
			setLocalError(error);
		}
	}, [error]);

	useEffect(() => {
		if (access_token) {
			router.replace('/(app)');
		}
	}, [access_token]);

	return (
		<View style={styles.container}>
			<ErrorNotification error={localError} />
			<View style={styles.content}>
				<Image
					style={styles.logo}
					source={require('../assets/logo.png')}
					resizeMode="contain"
				/>
				<View style={styles.formLogin}>
					<Input placeholder="Email" onChangeText={setEmail} />
					<Input
						placeholder="Пароль"
						onChangeText={setPassword}
						isPassword
					/>
					<View style={styles.button}>
						<Button
							text="Войти"
							isLoadind={isLoading}
							onPress={submit}
						/>
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
