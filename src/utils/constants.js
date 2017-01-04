const SUBDOMAINS = ['gm']
const LOCALES = ['en-us', 'en-ca', 'es-es']

export default {
	screen_sm_max: 767,
	screen_md_min: 768,
	screen_md_max: 1224,
	screen_lg_min: 1225
}

export const getTheme = () => {
	const subdomain = location.hostname.split('.')[0]
	if(SUBDOMAINS.includes(subdomain)) {
		return subdomain
	}
	return 'default'
}

export const getLocale = () => {
	let subdomainLocale = location.hostname.split('.')[1]
	if(LOCALES.includes(subdomainLocale)) {
		const parts = subdomainLocale.split('-')
		return `${parts[0]}-${parts[1].toUpperCase()}`
	}
	const locale = navigator.language
	if(LOCALES.includes(locale.toLowerCase())) {
		return locale
	}
	return 'en-US'
}

export const getThemeCss = (theme) => {
	return (theme == 'default') ? '/styles.css' : `/styles_${theme}.css`
}
