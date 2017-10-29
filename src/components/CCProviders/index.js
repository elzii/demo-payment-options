import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Amex from '../SVG/amex'
import Visa from '../SVG/visa'
import Discover from '../SVG/discover'
import MasterCard from '../SVG/mastercard'

const MAX_PIXEL_VALUE = 50

const Wrapper = styled.div`
	margin: 0;
	font-size: 0; /* combat inline-block */

	svg {
		margin: 0 ${props => props.scale ? props.scale * 5 : 5}px;
		width: auto;
		max-width: ${MAX_PIXEL_VALUE * 1.5}px;
		height: ${props => props.scale ? (props.scale * MAX_PIXEL_VALUE) : MAX_PIXEL_VALUE}px;
	}
`


export default ({ style, logos, scale, ...props }) => {

	let providers = !!logos
		? logos
		: [ 'visa', 'mastercard', 'amex', 'discover' ]

	return <Wrapper
		className={'DNTLY-cc-provider-logos'}
		style={style}
		scale={scale}
	>
		{ providers.map((provider, i) => {
			if ( provider === 'visa' ) {
				return <Visa key={i} />
			}
			if ( provider === 'mastercard' ) {
				return <MasterCard key={i} />
			}
			if ( provider === 'amex' ) {
				return <Amex key={i} />
			}
			if ( provider === 'discover' ) {
				return <Discover key={i} />
			}
		}) }
	</Wrapper>
}
