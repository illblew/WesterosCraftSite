import React from 'react'
import { Box, Flex } from 'rebass'
import { FooterFrame } from '../../atoms/icons/footerFrame/footerFrame'
import { ShieldLogo } from '../../atoms/icons/shieldLogo/shieldLogo'

export const Footer = () => (
  <Box bg="gray.300" height={376} pt={['20vh']} sx={{ position: 'relative', zIndex: 500 }} as="footer">
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="gray.300"
      width={200}
      height={200}
      mx="auto"
      sx={{ position: 'absolute', borderRadius: '100%', top: -60, left: 0, right: 0 }}
    >
      <ShieldLogo style={{ width: '78px', height: '94px' }} />
    </Flex>
    <FooterFrame
      style={{
        width: '88px',
        height: '100px',
        position: 'absolute',
        left: 16,
        top: 16,
        transform: 'scaleX(-1)',
      }}
    />
    <FooterFrame style={{ width: '88px', height: '100px', position: 'absolute', right: 16, top: 16 }} />
    <FooterFrame
      style={{
        width: '88px',
        height: '100px',
        position: 'absolute',
        left: 16,
        bottom: 16,
        transform: 'scaleX(-1) scaleY(-1)',
      }}
    />
    <FooterFrame
      style={{
        width: '88px',
        height: '100px',
        position: 'absolute',
        right: 16,
        bottom: 16,
        transform: 'scaleY(-1)',
      }}
    />
  </Box>
)
