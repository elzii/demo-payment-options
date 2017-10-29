import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
	max-width: 55rem;
	margin: 0 auto;
`

export const FlexRow = styled.div`
	display: flex;
	margin-left: -0.5rem;
	margin-right: -0.5rem;
`

export const FlexHalf = styled.div`
	width: 50%;
	padding: 0 0.5rem;
`


export const InputGroup = styled.div`
  position: relative;
  margin-top: ${props => (props.collapseMargins ? '8px' : '30px')};
  margin-bottom: ${props => (props.collapseMargins ? '8px' : '8px')};
`


export const Checkmark = styled.div`
	position: relative;
	display: block;
	width: 18px;
	height: 18px;
	border: ${props => props.isActive
		? '1px solid ${props.theme.PRIMARY}'
		: '1px solid #e2e2e2'
	};
	border-radius: 50%;
	background:  ${props => props.isActive
		? props.theme.PRIMARY
		: '#fafafa'
	};
	-webkit-touch-callout: none;

	&:after {
		position: absolute;
	  content: '';
	  border: 2px solid transparent;
	  border-top: none;
	  border-right: none;
	  position: absolute;
	  text-align: center;
	  width: 8px;
	  height: 5px;
	  left: 5px;
	  top: 50%;
	  margin-top: -3px;
	  border-color: ${props => props.isActive
			? '#ffffff'
			: 'transparent'
		};
	  transform: ${props => props.active
	  	? 'scale(0) rotate(-45deg)'
	  	: 'scale(1) rotate(-45deg)'
	  };

	  transition: all 100ms ease-in-out;
	}
`




export const Button = styled.button`
  width: ${props => (props.full ? '100%' : 'auto')};
  display: flex;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${props => props.theme.PRIMARY};
  color: ${props => props.theme.FOREGROUND};
  font-size: 15px;
  font-weight: 700;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  border-radius: 3px;

  transition: background 150ms ease-in-out;

  &:hover {

  }
`

export const ButtonLink = styled.button`
  width: auto;
  display: inline-block;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.PRIMARY};
  background: transparent;
  font-size: 14px;
  font-weight: 700;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  border-radius: 3px;

  transition: background 150ms ease-in-out;

  &:hover {

  }
`
