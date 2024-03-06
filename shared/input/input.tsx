import {
	TextInput,
	StyleSheet,
	TextInputProps,
	Pressable,
	View,
} from 'react-native';
import EyeClosed from '../../assets/icon/eye-closed';
import EyeOpen from '../../assets/icon/eye-open';
import { useState } from 'react';

export default function Input(
	props: TextInputProps & { isPassword?: boolean }
) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	return (
		<View>
			<TextInput
				style={styles.input}
				secureTextEntry={props.isPassword && !isPasswordVisible}
				placeholderTextColor="#AFB2BF"
				{...props}
			/>
			{props.isPassword && (
				<Pressable
					onPress={() => setIsPasswordVisible((state) => !state)}
					style={styles.eyeIcon}
				>
					{isPasswordVisible ? <EyeOpen /> : <EyeClosed />}
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		paddingHorizontal: 26,
		backgroundColor: '#2E2D3D',
		color: '#AFB2BF',
		lineHeight: 20,
		fontSize: 16,
		borderRadius: 10,
		fontFamily: 'FiraSansRegular',
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingHorizontal: 20,
		paddingVertical: 18,
	},
});
