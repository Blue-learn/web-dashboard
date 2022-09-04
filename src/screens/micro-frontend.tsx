import React from 'react';
import { MFPageName, MFPageMap } from '../micro_frontend';
import { MicroFrontend } from '@blue-learn/platform';
import { WidgetRegistry } from '@blue-learn/component';

const MicroFrontendScreen = () => (
	<MicroFrontend
		widgetRegistry={WidgetRegistry}
		extraProps={{}}
		routeCurrent={MFPageName.ON_BOARDING}
		routeMap={MFPageMap}
	/>
);

export default MicroFrontendScreen;
