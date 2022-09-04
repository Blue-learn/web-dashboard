import { RouteMap } from '@blue-learn/platform';
import { onBoarding } from './onboarding';

export enum MFPageName {
	// MEMBERS_TAB = 'MEMBERS_TAB',
	ON_BOARDING = 'ON_BOARDING',
	// TEST_PAGE = 'TEST_PAGE',
	// DISCUSSION_SEARCH = 'DISCUSSION_SEARCH',
	// NEWS = 'NEWS',
}

export const MFPageMap: RouteMap = {
	// [MFPageName.DISCUSSION_SEARCH]: discussionTab,
	// [MFPageName.MEMBERS_TAB]: membersTab,
	// [MFPageName.NEWS]: News,
	[MFPageName.ON_BOARDING]: onBoarding,
	// [MFPageName.TEST_PAGE]: testPage,
};
