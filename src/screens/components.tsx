import {
	Button,
	Divider,
	MockedWidgetProps,
	Space,
	Typography,
	WidgetRegistry,
} from '@blue-learn/component';
import {
	ButtonTypeTokens,
	DividerSizeTokens,
	FontSizeTokens,
	SizeTypeTokens,
} from '@blue-learn/schema';
import React from 'react';
import { ScrollView } from 'react-native';

const ComponentsScreen: React.FC<any> = ({ navigation }) => {
	return (
		<ScrollView style={{ flex: 1, padding: 24, backgroundColor: 'black' }}>
			<Button.Component
				label="Check out platform!"
				type={ButtonTypeTokens.SmallFilled}
				onPress={() => navigation.navigate('MicroFrontend')}
			/>
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
	);
};

export default ComponentsScreen;
