import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Flex, Text, Box } from 'rebass'
import { IoMdFunnel } from 'react-icons/io'

export const TableHeaderContainer = ({ children, ...props }) => (
  <Flex
    className="progress-table-columns"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-around"
    py={3}
    width={1}
    bg="white"
    sx={{
      //   borderBottom: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
      //   borderTop: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
      position: 'sticky',
      top: 0,
    }}
    {...props}
  >
    {' '}
    {children}{' '}
  </Flex>
)
export const TableHeader = ({ children, ...props }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <Flex
      flexDirection="row"
      width={1}
      px={4}
      alignItems="center"
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Text
        variant="progress"
        fontWeight="bold"
        color={hovered ? 'brandRed' : 'textGray'}
        mr={2}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        {' '}
        {children}{' '}
      </Text>{' '}
      <IoMdFunnel color={hovered ? '#9B1313' : 'inherit'} />
    </Flex>
  )
}
export const TableCell = ({ children, key, ...props }) => (
  <Box width={1} px={4} key={key} className="progress-table-cell">
    <Text variant="progress" as="p" {...props}>
      {' '}
      {children}{' '}
    </Text>{' '}
  </Box>
)