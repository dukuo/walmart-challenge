import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { TEST_ID_APP_LAYOUT } from '../constants/testIds'
import AppBar from './AppBar'
import Footer from './Footer'
import InformationBar from './AppBar/InformationBar'

type LayoutProps = {
  children?: ReactNode
  title?: string
  onSearchSubmit?: any
}

const FullWidthContainer = styled.div`
  && {
    flex-grow: 1;
    background: ${props => props.theme.body.background};
  }
`

const Layout = ({ children, title = '#JuntosNosCuidamos', onSearchSubmit }: LayoutProps) => (
  <FullWidthContainer data-testid={TEST_ID_APP_LAYOUT}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <InformationBar />
    <AppBar submit={onSearchSubmit} />
    {children}
    <Footer />
  </FullWidthContainer>
)

export default Layout
