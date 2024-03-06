import {
	Animated,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View,
	GestureResponderEvent,
} from 'react-native';

export default function Button({
	text,
	...props
}: PressableProps & { text: string }) {
	const animatedValue = new Animated.Value(0);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: ['#6C38CC', '#452481'],
	});

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();
		props.onPressIn && props.onPressIn(e);
	};

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();
		props.onPressOut && props.onPressOut(e);
	};

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View
				style={{
					...styles.button,
					backgroundColor: color,
				}}
			>
				<Text style={styles.text}>{text}</Text>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		// backgroundColor: '#6C38CC',
		borderRadius: 10,
		height: 58,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#FAFAFA',
		lineHeight: 20,
		fontSize: 16,
		fontFamily: 'FiraSansRegular',
	},
});
