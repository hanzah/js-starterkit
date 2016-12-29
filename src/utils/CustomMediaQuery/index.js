import customMediaQuery from './CustomMediaQuery'
import CONSTANTS from 'utils/constants'

export const DesktopMediaQuery = customMediaQuery(CONSTANTS.screen_lg_min, null)
export const TabletMediaQuery = customMediaQuery(CONSTANTS.screen_md_min, CONSTANTS.screen_md_max)
export const MobileMediaQuery = customMediaQuery(null, CONSTANTS.screen_sm_max)
