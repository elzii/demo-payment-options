import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Checkmark } from './Common'

export const AccordionItem = styled.div`
	border: 1px solid ${props => props.theme.BORDER_MUTED};
	margin: 10px 0;
	border-radius: 4px;
`


export const AccordionItemHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: white;
	padding: 12px 12px;
	min-height: 42px;
	cursor: pointer;
	border-radius: ${props => props.isActive ? '4px 4px 0 0' : '4px'};
	border-bottom: ${props => props.isActive ? '1px solid' + props.theme.BORDER_MUTED : '1px solid transparent'};

	transition: border 0ms linear;
	transition-delay: ${props => props.isActive ? '120ms' : '120ms'};

	&:hover ${Checkmark} {
		transition: border 100ms ease-in-out;
		border-color: ${props => props.theme.PRIMARY};
	};
`

export const AccordionItemBadge = styled.div`

`

export const AccordionItemIcon = styled.span`
	margin-right: 5px;
`

export const AccordionItemLogo = styled.div`
	margin-left: 10px;
	max-height: 20px;
`

export const AccordionItemTitleWrapper = styled.span`
	display: flex;
	align-items: center;
`


export const AccordionItemTitle = styled.span`
	font-size: 12px;
	text-transform: uppercase;
	margin-left: 10px;
	-webkit-touch-callout: none;
`


export const AccordionItemContent = styled.div`
	height: auto;
	overflow:hidden;

	max-height: ${props => props.isActive ? '500px' : '0'};
	opacity: ${props => props.isActive ? '1' : '0'};
	position: relative;

	transition-property: opacity, max-height;
	transition-duration: 300ms, 200ms;
	transition-timing-function: ease, ease;
	transition-delay: ${props => props.isActive ? '120ms, 100ms' : '0ms, 120ms'};

`
