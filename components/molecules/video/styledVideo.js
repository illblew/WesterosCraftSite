import styled from 'styled-components';
import { Flex } from 'rebass';

export const VideoThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${props => (props.display ? 'hidden' : 'visible')};
  filter: blur(2px);
  transition: all 150ms linear 0s;
`;

export const VideoWrapper = styled(Flex)`
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover ${VideoThumbnail} {
    filter: blur(0px);
  }

  &:hover .play-button {
    transform: scale(1.1);
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  visibility: ${props => (props.display ? 'hidden' : 'visible')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  z-index: 500;
  background: linear-gradient(109.6deg, rgb(127, 228, 152) 11.2%, rgb(42, 186, 140) 91.1%);
  /* background-image: linear-gradient(to bottom, #7fe498, #2aba8c); */
`;