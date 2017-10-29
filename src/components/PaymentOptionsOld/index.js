import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  InputGroup,
} from '../Common'

import CCProviders from '../CCProviders'

import {
  Tab,
  TabsMenu,
  TabsMenuItem
} from '../Tabs'


const FakeComponent = styled.div`
	padding: 3rem 2rem;
	text-align: center;
`

const componentMap = {
	'cc': (
    <FakeComponent>
  		<CCProviders scale={0.5} style={{ marginBottom: '15px'}} />
  		<span>Credit Card Component</span>
  	</FakeComponent>
  ),
	'ach': <FakeComponent>Bank Account Component</FakeComponent>,
  'paypal': <FakeComponent>PayPal Component</FakeComponent>,
}

class PaymentOptions extends Component {

  static propTypes = {
  	options: PropTypes.arrayOf(
  		PropTypes.shape({
  			name: PropTypes.string.isRequired
  		})
  	).isRequired
  }

  state = {
    activeTabName: this.props.activeTabName || Object.keys(componentMap)[0]
  }

  componentDidMount() {

  }

  _onClick = name => {
  	this.setState({
  		activeTabName: name
  	})
  }

  render() {

  	const { options, joined } = this.props

    return (
      <InputGroup>
      	<TabsMenu joined={joined}>
      	  {
      	    options && options.map((paymentOption, i) => {
      	    	const { name, label } = paymentOption

      	    	return <TabsMenuItem
      	        key={name}
      	        joined={joined}
      	        isActive={this.state.activeTabName === name}
      	        onClick={event => this._onClick(name)}
      	      >
      	        {label}
      	      </TabsMenuItem>
      	    })
      	  }
      	</TabsMenu>

      	<Tab joined={joined}>
      		{componentMap[this.state.activeTabName] || <div>No Component Found</div>}
      	</Tab>


      </InputGroup>
    )
  }
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
