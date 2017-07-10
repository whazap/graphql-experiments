
// TODO: should be fixed in newest eslint
/* eslint-disable no-unused-expressions */

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';
import styledNormalize from 'styled-normalize';

injectGlobal`
    ${styledNormalize};

    body {
        color: #000;
        background-color: #fff;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
`;

export default class MyDocument extends Document {
    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        const styleTags = sheet.getStyleElement();

        return (
            <html lang="en">
                <Head>
                    <title>Next/Graphql/Apollo/StyledComponents Experiment</title>
                    {styleTags}
                </Head>
                <body>
                    {main}
                    <NextScript />
                </body>
            </html>
        );
    }
}
