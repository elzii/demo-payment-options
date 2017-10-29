import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { Button } from '../Common'
import BankSVG from '../SVG/bank'

const PlaidLinkButton = styled(Button).attrs({
	type: "button"
})`
	color: ${props => props.theme.PRIMARY};
	background: white;
	border: 1px solid ${props => props.theme.BORDER_MUTED};
	margin: 30px auto;

	transition: border 150ms ease-in-out;

	&:hover {
		background: white;
		border-color: ${props => props.theme.PRIMARY};
	}

	svg path {
		fill: ${props => props.theme.PRIMARY};
	}
`

class PlaidLink extends Component {

	state = {}

	componentDidMount() {
		this.props.maybeSetFormData({
			id: 'payment_method',
			value: 'ach'
		})
	}

	_onClick = event => {
		event.preventDefault()
		this.props.fetchPlaidPublicToken()
	}

	render() {
		return <PlaidLinkButton onClick={this._onClick}>
			<BankSVG style={{ marginRight: '7px' }} />
			<span>Connect to Bank Account</span>
		</PlaidLinkButton>
	}
}

export default connect(
	null,
	{
		...actions
	}
)(PlaidLink)
