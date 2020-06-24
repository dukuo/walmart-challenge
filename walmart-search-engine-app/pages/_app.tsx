import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import muiTheme from '../theme';

const selectedThemeVariant = 1 // 0 - Dark | 1 - Light (this could be enhanced with react context)

function App(props: any) {
    // const store = useStore(pageProps.initialReduxState)
    const { Component, pageProps } = props
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Walmart</title>
                {/* <meta name="theme-color" content={this.props.theme.palette.primary.main} /> */}

                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={muiTheme[selectedThemeVariant]}>
                <MuiThemeProvider theme={muiTheme[selectedThemeVariant]}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </MuiThemeProvider>
            </ThemeProvider>
        </>
    )
}

App.getInitialProps = async ({ Component, ctx }: any) => {

    return {
        pageProps: {
            // Call page-level getInitialProps
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        },
    };

};
export default App