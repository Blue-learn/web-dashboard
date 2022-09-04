import React from 'react';
import { View } from 'react-native';
import ThemeProvider, { THEMES } from '@blue-learn/theme';

import {
	Divider,
	MockedWidgetProps,
	Space,
	Typography,
	WidgetRegistry,
} from '@blue-learn/component';
import { DividerSizeTokens, FontSizeTokens, SizeTypeTokens } from '@blue-learn/schema';
import { ScrollView } from 'react-native';

ThemeProvider.init(THEMES.DARK_MOBILE);

const App: React.FC<any> = () => {
	return (
		<View>
			<ScrollView style={{ flex: 1, padding: 24, backgroundColor: 'black' }}>
				{Object.keys(WidgetRegistry).map((item) => {
					const Widget = WidgetRegistry[item];
					return (
						<>
							<Space.Component size={SizeTypeTokens.XL} />
							<Typography.Component label={item} fontSize={FontSizeTokens.XL} />
							<Space.Component size={SizeTypeTokens.XL} />
							{Widget.Mock && <Widget.Component {...Widget.Mock.args} {...MockedWidgetProps} />}
							<Space.Component size={SizeTypeTokens.XL} />
							<Divider.Component size={DividerSizeTokens.LG} />
						</>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default App;
