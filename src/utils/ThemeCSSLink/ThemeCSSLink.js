import React, { PropTypes } from 'react'

const { string } = PropTypes

const ThemeCSSLink = ({theme}) => {
	const link = (theme == 'default') ? '/styles.css' : `/styles_${theme}.css`
  return (
    <link rel="stylesheet" type="text/css" href={link} />
  );
}

ThemeCSSLink.propTypes = {
  theme: string
}

export default ThemeCSSLink
