import { ActionFunction } from '@blue-learn/platform'

export const TestCustomAction: ActionFunction = async (
	action,
	_datastore,
	utilities
): Promise<any> => {
	if (action.routeId != null) {
		// console.warn('*** getFromDatastore ***')
		// utilities.scrollToIndex({ routeId: action.routeId, index: 4 })
		// console.warn(
		// 	'*** getFromDatastore ***',
		// 	await utilities.getDatastore(`routeMap.${action.routeId}`)
		// )
		// await utilities.setDatastore(action.routeId, '1', {
		// 	label: 'Hello World',
		// })
		utilities.navigate('TEST_PAGE')
	}
}
