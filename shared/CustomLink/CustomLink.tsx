import { Link } from 'expo-router';
import { Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../tokens';
import { LinkProps } from 'expo-router/build/link/Link';

export default function CustomLink({
	text,
	...props
}: LinkProps & { text: string }) {
	return (
		<Link style={styles.links} {...props}>
			<Text>{text}</Text>
		</Link>
	);
}

const styles = StyleSheet.create({
	links: {
		color: Colors.link,
		fontSize: Fonts.f18,
		textAlign: 'center',
		fontFamily: Fonts.regular,
	},
});
