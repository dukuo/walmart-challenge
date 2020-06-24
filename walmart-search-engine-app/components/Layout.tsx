import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import AppBar from './AppBar'
import Footer from './Footer'
import InformationBar from './AppBar/InformationBar'

type Props = {
  children?: ReactNode
  title?: string
}

const FullWidthContainer = styled.div`
  flex-grow: 1;
`

const Layout = ({ children, title = '#JuntosNosCuidamos' }: Props) => (
  <FullWidthContainer>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <InformationBar />
    <AppBar />
    {children}
    <Footer />
  </FullWidthContainer>
)

export default Layout
