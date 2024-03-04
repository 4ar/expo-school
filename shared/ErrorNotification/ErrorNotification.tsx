import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { ErrorNotificationProps } from './ErrorNotificationProps';
import { useEffect, useState } from 'react';

export function ErrorNotification({ error }: ErrorNotificationProps) {
	const [isShow, setIsShow] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100);
	const onEnter = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		if (!error) {
			return;
		}

		setIsShow(true);
		const timerId = setTimeout(() => {
			setIsShow(false);
		}, 3000);

		return () => {
			clearTimeout(timerId);
		};
	}, [error]);

	if (!isShow) {
		return <></>;
	}

	return (
		<Animated.View
			style={{
				...styles.error,
				transform: [{ translateY: animatedValue }],
			}}
			onLayout={onEnter}
		>
			<Text style={styles.text}>{error}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		top: 50,
		width: Dimensions.get('window').width,
		backgroundColor: '#CC384E',
		padding: 15,
	},
	text: {
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
});
