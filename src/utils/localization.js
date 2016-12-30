/* eslint-disable no-unused-vars */
/* global Promise */
import { addLocaleData } from 'react-intl';

export const loadLanguages = (theme, locale) => {
	return new Promise((resolve) => {
		const baseLng = locale.split('-')[0]
		require.ensure([], require => {
			const LOCALES = {
				en: () => require('react-intl/locale-data/en'),
				es: () => require('react-intl/locale-data/es'),
			}
			const messages = require(`../brands/${theme}/labels/${locale}.js`).default
			const localeData = LOCALES[baseLng]()
			addLocaleData(localeData)
			resolve({messages})
		})
	});
}
