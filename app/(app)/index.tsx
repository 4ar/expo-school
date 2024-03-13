import { View, Text } from 'react-native';
import Button from '../../shared/Button/button';
import { useSetAtom } from 'jotai';
import { logoutAtom } from '../../entities/auth/model/auth.state';

export default function MyCourse() {
	const logout = useSetAtom(logoutAtom);

	return (
		<View>
			<Text>index</Text>
			<Button text="Выйти" onPress={logout} />
		</View>
	);
}
