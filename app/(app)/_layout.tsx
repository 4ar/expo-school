import { Redirect, Stack } from 'expo-router';
import { useAtomValue } from 'jotai';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { authAtom } from '../../entities/auth/model/auth.state';
import { Colors, Fonts } from '../../shared/tokens';
import MenuButton from '../../features/layout/ui/MenuButton/MenuButton';
export default function AppLayout() {
	const { access_token } = useAtomValue(authAtom);
	if (!access_token) {
		return <Redirect href="/login" />;
	}

	return (
		<>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Drawer
					screenOptions={({ navigation }) => ({
						headerStyle: {
							backgroundColor: Colors.blackLight,
							shadowColor: Colors.blackLight,
							shadowOpacity: 0,
						},
						headerLeft: () => {
							return <MenuButton navigation={navigation} />;
						},
						headerTitleStyle: {
							color: Colors.white,
							fontFamily: Fonts.regular,
							fontSize: Fonts.f20,
						},
						sceneContainerStyle: {
							backgroundColor: Colors.black,
						},
					})}
				>
					<Drawer.Screen
						name="index"
						options={{
							title: 'Мои курсы',
						}}
					/>
				</Drawer>
			</GestureHandlerRootView>
		</>
	);
}
