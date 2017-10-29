import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


import PaymentOption from './PaymentOption'

import {
  InputGroup,
  Checkmark,
  InputRadio,
  ButtonLink
} from '../Common'


const FakeComponent = styled.div`
	padding: 3rem 2rem;
	text-align: center;
`

const componentMap = {
	'cc': <FakeComponent>Credit Card Component</FakeComponent>,
	'ach': <FakeComponent>Bank Account Component</FakeComponent>,
  'paypal': <FakeComponent>PayPal Component</FakeComponent>,
	'applepay': <FakeComponent>ApplePay Component</FakeComponent>,
}

class PaymentOptions extends Component {

  static propTypes = {
  	options: PropTypes.arrayOf(
  		PropTypes.shape({
  			name: PropTypes.string.isRequired
  		})
  	).isRequired,
    reveal: PropTypes.number
  }

  state = {
    activeIndex: this.props.activeIndex || 0,
    revealRest: false
  }

  _onClick = index => {
    this.setState({
      activeIndex: index
    })
  }

  _handleReveal = event => {
    event.preventDefault()
  	this.setState({
  		revealRest: true
  	})
  }

  render() {

    const { options, reveal } = this.props
  	const { revealRest } = this.state

    const revealedOptions = [
      ...options.slice(0, reveal),
      ...options.slice(reveal, (revealRest && options.length))
    ]

    return (
      <InputGroup>
        {options && revealedOptions.map((paymentOption, i) => {
        	const { name } = paymentOption

        	return <PaymentOption key={name}
        		onClick={event => this._onClick(i)}
        		isActive={this.state.activeIndex === i}
        		{...paymentOption}
        	>
        		{componentMap[name] || <div>No Component Found</div>}
        	</PaymentOption>
        })}

        {
          !revealRest &&
          <div style={{ textAlign: 'center', margin: '10px auto' }}>
            <ButtonLink onClick={this._handleReveal}>
              More Payment Options
            </ButtonLink>
          </div>
        }
      </InputGroup>
    )
  }
}

PaymentOptions.defaultProps = {
  reveal: 3
}

export default PaymentOptions


// export default connect(
//   state => ({
//     data: state.form.data,
//     _statusPlaid: state.form._statusPlaid,
//     _statusStripe: state.form._statusStripe,
//     _statusPaymentOption: state.form._statusPaymentOption,
//   }),
//   {
//     ...actions,
//   },
// )(PaymentOptions)
