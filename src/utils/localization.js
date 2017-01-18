/* eslint-disable no-unused-vars */
/* global Promise */
import { addLocaleData } from 'react-intl';

const LOCALES = {
	en: () => require('react-intl/locale-data/en'),
	es: () => require('react-intl/locale-data/es'),
}

export const loadLanguages = (theme, locale) => {
	return new Promise((resolve) => {
		const baseLng = locale.split('-')[0]
		const MESSAGES = {
			default: loadDefaultMessages(locale, baseLng),
			gm: loadGmMessages(locale, baseLng),
		}
		if (!window.Intl) {
			require(['intl', 'intl/locale-data/jsonp/en.js', 'intl/locale-data/jsonp/es.js'], function(Intl) {
				window.Intl = Intl;
				MESSAGES[theme](resolve)
			});
		} else {
			MESSAGES[theme](resolve)
		}
	});
}

const loadDefaultMessages = (locale, baseLng) => (resolve) => {
	require.ensure([], require => {
		const messages = require(`../brands/default/labels/${locale}.js`).default
		const localeData = LOCALES[baseLng]()
		addLocaleData(localeData)
		resolve({messages})
	})
}

const loadGmMessages = (locale, baseLng) => (resolve) => {
	require.ensure([], require => {
		const messages = require(`../brands/gm/labels/${locale}.js`).default
		const localeData = LOCALES[baseLng]()
		addLocaleData(localeData)
		resolve({messages})
	})
}
