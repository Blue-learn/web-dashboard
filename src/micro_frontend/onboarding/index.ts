import { Action, Layout, LAYOUTS, PageType, POSITION, WidgetItem } from '@blue-learn/platform';
import {
	ButtonProps,
	ButtonTypeTokens,
	ButtonWidthTypeToken,
	FontFamilyTokens,
	FontSizeTokens,
	IconAlignmentTokens,
	IconProps,
	IconTokens,
	LottieProps,
	LottieSizeTokens,
	TypographyProps,
	WIDGET,
	WidgetProps,
} from '@blue-learn/schema';
import { TestCustomAction } from './actions';

enum OnBoardingActions {
	TEST = 'OnBoard/Test',
}
const text: WidgetItem = { id: '1', type: WIDGET.TEXT };
const textProps: TypographyProps = {
	label: 'Join India’s most active student community with 80,000+ members ',
	fontSize: FontSizeTokens.XXL,
	fontFamily: FontFamilyTokens.manropeBold,
};
const subText: WidgetItem = { id: '2', type: WIDGET.TEXT };
const subTextProps: TypographyProps = {
	label:
		'Make smart friends, learn from experts, and network like you’ve never done before. It’s a place to have fun, get amazing opportunities, and make new friends!',
	fontSize: FontSizeTokens.XL,
	fontFamily: FontFamilyTokens.manropeRegular,
};
const lottieIcon: WidgetItem = { id: '3', type: WIDGET.LOTTIE };
const lottieProps: LottieProps = {
	uri: require('../../welcome.json'),
	size: LottieSizeTokens.FULL,
};

const GoogleIcon: IconProps = {
	name: IconTokens.Fire,
	align: IconAlignmentTokens.left,
};
const googleButton: WidgetItem = {
	id: '4',
	type: WIDGET.BUTTON,
	position: POSITION.FIXED_BOTTOM,
};
const googleBtnTapAction: Action<any> = {
	type: OnBoardingActions.TEST,
	routeId: 'ON_BOARDING', //pass in string
	payload: { hello: 'world', custom_route: 'darshil' },
};
const googleButtonProps: ButtonProps & WidgetProps = {
	type: ButtonTypeTokens.LargeFilled,
	label: 'Open Modal',
	icon: GoogleIcon,
	width: ButtonWidthTypeToken.FULL,
	action: googleBtnTapAction,
	// onPress: () => console.warn('Google Login Action'),
};

const layoutList: Layout = {
	id: 'ON_BOARDING',
	type: LAYOUTS.LIST,
	widgets: [
		lottieIcon,
		text,
		subText,
		googleButton,
		// lottieIcon,
		text,
		subText,
	],
};

export const onBoarding: PageType<any> = {
	async onLoad(_) {
		return {
			layout: layoutList,
			datastore: {
				'1': textProps,
				'3': lottieProps,
				'2': subTextProps,
				'4': googleButtonProps,
				['ON_BOARDING']: { backgroundColor: 'black' },
			},
		};
	},
	actions: {
		[OnBoardingActions.TEST]: TestCustomAction,
	},
};
