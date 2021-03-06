import React from 'react';
import Helmet from 'react-helmet';

import { StaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';
import { GlobalStyle } from '../theme/global';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme/theme';
import { Box } from 'rebass';

import { Header } from '../components/organisms/header';
import { Footer } from '../components/organisms/footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        craft {
          navData: nodes(navHandle: "mainNav", level: 1) {
            title
            url
            type
            element {
              slug
            }
            ... on Craft_mainNav_Node {
              navLogo {
                url
              }
            }
            children {
              title
              url
              type
              element {
                slug
              }
            }
          }
          footerData: nodes(navHandle: "mainFooter") {
            title
            url
            type
            element {
              slug
            }
            children {
              title
              url
              type
              element {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900|Sen:400,700,800&display=swap"
            rel="stylesheet"
          />
          <html lang="en" />
        </Helmet>
        <Header links={data.craft.navData} />
        <Box
          as="main"
          className={`page-wrapper`}
          sx={{
            margin: `0 auto`,
            position: 'relative',
            overflow: 'hidden',
          }}
          pt={[3, null, 10]}
          bg="#FFFFFF"
        >
          {children}
        </Box>
        <Footer links={data.craft.navData} />
      </ThemeProvider>
    )}
  />
);

export default Layout;
