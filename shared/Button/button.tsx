import { lazy } from 'react';
import {
	Animated,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View,
	GestureResponderEvent,
	ActivityIndicator,
} from 'react-native';
import { Colors } from '../tokens';

export default function Button({
	text,
	isLoadind,
	...props
}: PressableProps & { text: string; isLoadind?: boolean }) {
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
				{!isLoadind && <Text style={styles.text}>{text}</Text>}
				{isLoadind && (
					<ActivityIndicator size={'large'} color={Colors.white} />
				)}
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
