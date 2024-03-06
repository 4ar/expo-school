import { Text, View, Image, StyleSheet } from 'react-native';
import CustomLink from '../shared/CustomLink/CustomLink';
import { Colors, Fonts, Gaps } from '../shared/tokens';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UnmatchedCustom() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Image
					style={styles.image}
					source={require('../assets/Images/404.png')}
				/>
				<Text style={styles.text}>
					Ооо... что-то пошло не так. Попробуйте вернуться на главный
					экран приложения
				</Text>
				<CustomLink text={'На главную страницу'} href={'/'} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
		width: 320,
	},
	image: {
		width: 200,
		height: 282,
	},
	text: {
		color: Colors.white,
		textAlign: 'center',
		fontSize: Fonts.f18,
		fontFamily: Fonts.regular,
	},
});
