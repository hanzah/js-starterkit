const SUBDOMAINS = ['gm']
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
