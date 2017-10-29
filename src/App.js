import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Container, FlexRow, FlexHalf } from './components/Common'
import CCProviders from './components/CCProviders'
import Paypal from './components/SVG/paypal'
import ApplePay from './components/SVG/applepay'

import PaymentOptionsNew from './components/PaymentOptionsNew'
import PaymentOptionsOld from './components/PaymentOptionsOld'


const THEME_DEFAULT = {
  FOREGROUND    : '#FFFFFF',
  PRIMARY       : '#06cc82',
  TEXT          : '#374246',
  TEXT_MUTED    : '#b8c5c9',
  BORDER_MUTED  : '#dee9ed',
}

const PAYMENT_OPTIONS = [
	{
		name: 'cc',
		label: 'Credit Card',
		badge: <CCProviders scale={0.35} />
	},
	{
		name: 'ach',
		label: 'Bank Account',
	},
	{
		name: 'paypal',
		label: 'PayPal',
		logo: <Paypal />
	},
	{
		name: 'applepay',
		label: 'ApplePay',
		logo: <ApplePay />
	},
]

export default () => {
	return <ThemeProvider theme={THEME_DEFAULT}>
		<Container>
			<FlexRow>
				<FlexHalf>
					<h2>Payment Options V1</h2>
					<h4>Unjoined menu items</h4>
					<PaymentOptionsOld options={PAYMENT_OPTIONS.slice(0,2)} joined={false} />
					<h4>Joined menu items</h4>
					<PaymentOptionsOld options={PAYMENT_OPTIONS.slice(0,2)} joined={true} activeTabName='ach' />
				</FlexHalf>
				<FlexHalf>
					<h2>Payment Options V2</h2>
					<PaymentOptionsNew options={PAYMENT_OPTIONS} />
				</FlexHalf>
			</FlexRow>
		</Container>
	</ThemeProvider>
}
