import {
	Pressable,
	PressableProps,
	View,
	StyleSheet,
	Text,
} from 'react-native';
import MenuIcon from '../../../../assets/icon/menuIcon';
import { useState } from 'react';
import { Colors } from '../../../../shared/tokens';

export default function MenuButton({
	navigation,
	...props
}: PressableProps & { navigation: any }) {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<Pressable
			{...props}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
			onPress={() => navigation.toggleDrawer()}
		>
			<View
				style={{
					...styles.button,
					backgroundColor: clicked
						? Colors.violetDark
						: Colors.blackLight,
				}}
			>
				<MenuIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 16,
		paddingVertical: 15,
		marginHorizontal: 20,
	},
});
