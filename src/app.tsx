import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MicroFrontendScreen from './screens/micro-frontend';
import ComponentsScreen from './screens/components';
ThemeProvider.init(THEMES.DARK_MOBILE);

const Stack = createNativeStackNavigator();

const App: React.FC<any> = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={ComponentsScreen} />
				<Stack.Screen
					name="MicroFrontend"
					component={MicroFrontendScreen}
					options={{
						headerBackButtonMenuEnabled: true,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
