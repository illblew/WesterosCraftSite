import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { RegionIcon } from '../icons/regionIcon';
import { useTheme } from 'emotion-theming';
import { LocationTypeIcon } from '../icons/locationTypeIcon/locationTypeIcon';
import Popup from 'reactjs-popup';
import { camelCaseFormatter } from '../../../utility/helpers';
import { DestinationStatusIcon } from '../icons/destinationStatusIcon/destinationStatusIcon';

export const EntryCard = ({ data }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        boxShadow: '0 0 0 1px #191a1b',
        padding: 0,
        background: data.projectDetails ? theme.colors[data.projectDetails[0].region] : '#333333',
        zIndex: 1,
        width: 'auto',
      }}
      mt={[5]}
      mr={[0, null, 5]}
    >
      <Box
        height={252}
        width={[1, null, 240]}
        sx={{
          cursor: 'pointer',
          boxShadow: ' 0 0 0 2px #333333',
          background: 'white',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
          '&:hover': {
            boxShadow: ' 0 0 0 2px #333333',
            transform: 'translate(-0.35em, -0.35em)',
          },
          '&:before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 0,
            paddingTop: '8rem',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 1,
            borderBottom: '2px solid #333333',
            backgroundImage: `url(${
              (data.images && data.images.length && data.images[0].url) ||
              'https://westeroscraft.com/web/assets/images/crafting-table.svg'
            })`,
            backgroundSize: data.images && data.images.length && data.images[0].url ? 'cover' : ['auto', null, '30%'],
            boxShadow: `inset 0 0.75rem 0 ${
              data.projectDetails ? theme.colors[data.projectDetails[0].region] : '#333333'
            }`,
          },
        }}
        pt={140}
        px={4}
        pb={5}
      >
        <Flex flexDirection="column">
          <Flex flexDirection="row">
            {data.typeHandle === 'wikiGuide' && (
              <Popup
                on="hover"
                position="bottom left"
                contentStyle={{
                  width: 'auto',
                  borderRadius: '4px',
                }}
                trigger={
                  <span style={{ height: '24px' }}>
                    <RegionIcon region="guide" width="24px" />
                  </span>
                }
              >
                <Text as="span" color="text" px={4}>
                  Guide
                </Text>
              </Popup>
            )}
            {data.typeHandle === 'wikiMiscellaneous' && (
              <Popup
                on="hover"
                position="bottom left"
                contentStyle={{
                  width: 'auto',
                  borderRadius: '4px',
                }}
                trigger={
                  <span style={{ height: '24px' }}>
                    <RegionIcon region="guide" width="24px" />
                  </span>
                }
              >
                <Text as="span" color="text" px={4}>
                  Guide
                </Text>
              </Popup>
            )}
            {data.projectDetails && data.projectDetails.length && (
              <Popup
                on="hover"
                position="bottom left"
                contentStyle={{
                  width: 'auto',
                  borderRadius: '4px',
                }}
                trigger={
                  <span style={{ height: '24px' }}>
                    <RegionIcon region={data.projectDetails.length && data.projectDetails[0].region} width="24px" />
                  </span>
                }
              >
                <Text as="span" color="text" px={4}>
                  {camelCaseFormatter(data.projectDetails[0].region)}
                </Text>
              </Popup>
            )}
            {data.projectDetails && data.projectDetails.length && (
              <Popup
                on="hover"
                position="bottom left"
                contentStyle={{
                  width: 'auto',
                  borderRadius: '4px',
                }}
                trigger={
                  <span style={{ height: '24px' }}>
                    <LocationTypeIcon
                      type={data.projectDetails[0].destinationType}
                      width="24px"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                }
              >
                <Text as="span" color="text" px={4}>
                  {camelCaseFormatter(data.projectDetails[0].destinationType)}
                </Text>
              </Popup>
            )}
            {data.projectDetails && data.projectDetails.length && (
              <Popup
                on="hover"
                position="bottom left"
                contentStyle={{
                  width: 'auto',
                  borderRadius: '4px',
                }}
                trigger={
                  <span style={{ height: '24px' }}>
                    <DestinationStatusIcon
                      status={data.projectDetails.length && data.projectDetails[0].destinationStatus}
                      width="24px"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                }
              >
                <Text as="span" color="text" px={4}>
                  {camelCaseFormatter(data.projectDetails[0].destinationStatus)}
                </Text>
              </Popup>
            )}
          </Flex>
          <Text mt={2} variant="heading6" fontSize="18px" fontWeight="bold" as="h6" color="text" fontFamily="heading">
            {data.title || ''}
          </Text>
          <Text mt={2} variant="paragraph" color="text">
            {data.projectDetails && data.projectDetails.length && data.projectDetails[0].house}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
