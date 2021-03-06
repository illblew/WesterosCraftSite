import React from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex, Text } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from '../components/atoms/button';
import { BsTriangleFill } from 'react-icons/bs';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import SEO from '../components/organisms/seo/seo';
import Pixel from '../images/bright-squares.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const IndexPage = ({ data }) => {
  const homepageData = data.craft.entry.homePageContent[0];

  return (
    <>
      <SEO
        title={data.craft.entry.pageTitle || data.craft.entry.title}
        description={data.craft.entry.pageDescription}
        image={data.craft.entry.pageEntry && data.craft.entry.pageImage[0].url}
      />
      <Flex
        as="section"
        className="homepage-hero"
        flexDirection="column"
        width={1}
        pt={6}
        px={5}
        height={['calc(100vh - 72px)', 'calc(100vh - 124px)']}
        justifyContent="space-between"
        sx={{
          position: 'relative',
        }}
      >
        <Box textAlign="center">
          <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce>
            <Heading as="h1" variant="heading1">
              {homepageData.heading || ''}
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={600} animateOnce>
            <Heading as="h2" variant="heading2" mt={5}>
              {homepageData.subheading || ''}
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce>
            <AniLink to="/launcher" cover duration={0.5} bg="#9E1E22" direction="right">
              <Button
                variant="red"
                mt={9}
                as="div"
                onClick={() => {
                  trackCustomEvent({
                    category: 'Button',
                    action: 'Click',
                    label: `homepage-top-cta-launcher-button`,
                  });
                }}
              >
                Start Exploring
              </Button>
            </AniLink>
            <AniLink to="/wiki" cover duration={0.5} bg="#9E1E22" direction="right">
              <Button
                variant="white"
                mt={9}
                as="div"
                onClick={() => {
                  trackCustomEvent({
                    category: 'Button',
                    action: 'Click',
                    label: `homepage-cta-wiki-button`,
                  });
                }}
              >
                <BsTriangleFill
                  size="16px"
                  style={{ transform: 'rotate(90deg)', marginRight: '6px', marginTop: '-1px', marginBottom: '-2px' }}
                  color="#333333"
                />
                Explore the Wiki
              </Button>
            </AniLink>
          </ScrollAnimation>
        </Box>
        <Box
          className="hero-image-gradient"
          width="100%"
          height="100%"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: -1,
            backgroundColor: 'rgba(81, 179, 255, 0.14)',
            backgroundImage: `linear-gradient(to top, transparent 40%, white 60%), url(${Pixel})`,
          }}
        />
        <Box
          className="hero-image-container"
          sx={{
            left: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            maxWidth: '100vw',
            position: 'relative',
            right: '50%',
            width: '100vw',
            imageRendering: 'pixelated',
          }}
        >
          <LazyLoadImage
            className="hero-image"
            loading="eager"
            srcSet="https://westeroscraft.com/web/assets/website/wall-light-520.png 520w, https://westeroscraft.com/web/assets/website/wall-light-1200.png 1200w, https://westeroscraft.com/web/assets/website/wall-light-1920.png 1920w"
            alt="The Wall"
            placeholderSrc="https://westeroscraft.com/web/assets/website/wall-light-loading-1920.png"
            src="https://westeroscraft.com/web/assets/website/wall-light-1920.png"
            width="100%"
            height="100%"
          />
        </Box>
      </Flex>
      <Flex alignItems="center" flexDirection="column" mx="auto" className="homepage-content" px={5}>
        <SliceZone slices={data.craft.entry.pageSlices} />
      </Flex>
      <Box>
        <Box sx={{ position: 'relative' }} maxWidth={1120} px={5} mx="auto" width={1}>
          <Box
            width={1 / 2}
            sx={{ position: 'absolute', top: [0, null, null, null, 65], right: 0, zIndex: 50 }}
            maxWidth={1120}
            pr={5}
            display={['none', null, null, 'block']}
            textAlign="right"
            className="footer-cta"
          >
            <Text variant="heading4" fontWeight="bold" as="h4">
              Get started with WesterosCraft
            </Text>
            <Text variant="heading5" mt={4} as="h5" pl={5} lineHeight="1.5">
              Ready to start exploring? All you need is a copy of{' '}
              <Box
                as="a"
                color="green"
                fontWeight="500"
                sx={{ cursor: 'pointer', zIndex: 50 }}
                href="https://www.minecraft.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Minecraft Java Edition
              </Box>
            </Text>
            <Button
              variant="red"
              mt={7}
              href="/launcher"
              onClick={() => {
                trackCustomEvent({
                  category: 'Button',
                  action: 'Click',
                  label: `homepage-bottom-cta-launcher-button`,
                });
              }}
            >
              Get the Launcher
            </Button>
          </Box>
        </Box>
        <Box className="footer-image" sx={{ transform: 'scaleX(-1)' }}>
          <LazyLoadImage
            srcSet="https://westeroscraft.com/web/assets/website/redkeep-520.png 520w, https://westeroscraft.com/web/assets/website/redkeep-1640.png 1640w"
            alt="Red Keep"
            placeholderSrc="https://westeroscraft.com/web/assets/website/redkeep-loading-1640.png"
            src="https://westeroscraft.com/web/assets/website/redkeep-1640.png"
            width="100%"
            height="100%"
            wrapperClassName="lazy-loaded-image-span"
            threshold={300}
            style={{ display: 'block' }}
          />
        </Box>
      </Box>
    </>
  );
};

export const pageQuery = graphql`
  query homeQuery {
    craft {
      entry(site: "westeroscraft", section: "home") {
        ... on Craft_home_home_Entry {
          pageTitle
          pageDescription
          pageImage {
            url
          }
          homePageContent {
            ... on Craft_homePageContent_hero_BlockType {
              heading
              subheading
              heroImage {
                url
              }
              footerImage {
                url
              }
            }
            ... on Craft_homePageContent_homebar_BlockType {
              children {
                ... on Craft_homePageContent_homeBarItem_BlockType {
                  heading
                  thumbnail {
                    url
                  }
                  singleLink
                }
              }
            }
          }
          pageSlices {
            ... on Craft_pageSlices_banner_BlockType {
              ...banner
            }
            ... on Craft_pageSlices_destinationSlider_BlockType {
              ...destinationSlider
            }
            ... on Craft_pageSlices_twoColumnText_BlockType {
              ...twoColumnText
            }
            ... on Craft_pageSlices_twoColumnVideo_BlockType {
              ...twoColumnVideo
            }
            ... on Craft_pageSlices_text_BlockType {
              ...text
            }
            ... on Craft_pageSlices_video_BlockType {
              ...video
            }
            ... on Craft_pageSlices_timeline_BlockType {
              ...timeline
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
