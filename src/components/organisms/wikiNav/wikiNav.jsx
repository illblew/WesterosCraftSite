import React, { useState } from 'react';
import { Box, Text, Flex } from 'rebass';
import { Link } from 'gatsby';
import { IoMdArrowDropdown } from 'react-icons/io';
import Search from '../search';

const WikiNavGroup = ({ navItem }) => {
  const [open, setOpen] = useState(true);
  const buildLink = (child) => {
    switch (child.parent.title) {
      case 'Miscellaneous':
        return `/wiki/miscellaneous/${child.element.slug}`;
      case 'Guides':
        return `/wiki/guides/${child.element.slug}`;
      default:
        return `/wiki/${child.element.slug}`;
    }
  };

  return (
    <>
      <Box
        className="wiki-nav-group"
        key={navItem.title}
        sx={{ boxShadow: ['none', null, 'inset -1px 0 0 rgba(48,48,49,0.2)'] }}
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          mb={2}
          className="group-title"
          onClick={() => {
            setOpen(!open);
          }}
          sx={{
            cursor: 'pointer',
          }}
        >
          <Text variant="heading6" fontSize="18px" fontWeight="bold">
            {navItem.title}
          </Text>
          <IoMdArrowDropdown size="24px" style={{ transform: !open ? 'scaleY(-1)' : '' }} />
        </Flex>
        {open && (
          <Flex
            className="group-items"
            flexDirection="column"
            as="ol"
            pl={[0, null, null, 5]}
            pb={3}
            pr={5}
            sx={{
              listStyleType: 'none',
            }}
          >
            {navItem.children.map((child) => (
              <Box as="li" key={child.title}>
                <Link to={buildLink(child)}>
                  <Text
                    py={1}
                    color="gray.100"
                    sx={{
                      '&:hover': {
                        color: 'red.medium',
                      },
                    }}
                  >
                    {child.title}
                  </Text>
                </Link>
              </Box>
            ))}
          </Flex>
        )}
      </Box>
    </>
  );
};

export const WikiNav = ({ navData }) => {
  const searchIndices = [{ name: `Wiki`, title: `Destinations`, hitComp: `DestinationHit` }];

  return (
    <Flex
      flexDirection="column"
      as="nav"
      className="wiki-nav"
      maxWidth={['100%', null, 320]}
      sx={{ position: 'relative', flexShrink: 0, flexGrow: 1 }}
    >
      <Search collapse indices={searchIndices} />
      <Box className="wiki-nav-container" width={1} display={['none', null, 'block']}>
        {navData.craft.wikiNav.map((navItem, i) => (
          <WikiNavGroup navItem={navItem} key={i} />
        ))}
      </Box>
    </Flex>
  );
};
