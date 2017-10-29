import React from 'react'

import {
  AccordionItem,
  AccordionItemIcon,
  AccordionItemLogo,
  AccordionItemTitle,
  AccordionItemTitleWrapper,
  AccordionItemBadge,
  AccordionItemHeader,
  AccordionItemContent,
} from '../Accordion'

import {
  Checkmark,
} from '../Common'


export const PaymentOption = ({ onClick, isActive, icon, logo, label, badge, name, children, ...props }) => {
  return <AccordionItem>
    <AccordionItemHeader onClick={onClick} isActive={isActive} >
      <AccordionItemTitleWrapper>
        <Checkmark
          isActive={isActive}
        />
        { icon &&
          <AccordionItemIcon>
            {icon}
          </AccordionItemIcon>
        }
        { logo &&
          <AccordionItemLogo>
            {logo}
          </AccordionItemLogo>
        }
        {
          !logo &&
          <AccordionItemTitle>{label}</AccordionItemTitle>
        }
      </AccordionItemTitleWrapper>
      <AccordionItemBadge>
        {badge}
      </AccordionItemBadge>
    </AccordionItemHeader>
    <AccordionItemContent isActive={isActive}>
      {children}
    </AccordionItemContent>
  </AccordionItem>
}

export default PaymentOption