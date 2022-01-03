import Head from "next/head";
import PropTypes from 'prop-types';

const MainHead = ({themeColor, appName}) => {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=yes,user-scalable=no"/>
            <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" type="image/png" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="36x36" href="/favicon/android-icon-36x36.png"/>
            <link rel="icon" type="image/png" sizes="48x48" href="/favicon/android-icon-48x48.png"/>
            <link rel="icon" type="image/png" sizes="72x72" href="/favicon/android-icon-72x72.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/android-icon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="144x144" href="/favicon/android-icon-144x144.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
            <meta name="msapplication-TileColor" content={themeColor}/>
            <meta name="theme" content={themeColor}/>
            <meta name="application-name" content={appName}/>
            <meta property="og:site_name" content={appName}/>
            <meta property="og:image:type" content="image/png"/>
            <meta property="og:image:width" content="64"/>
            <meta property="og:image:height" content="64"/>
            <meta property="og:locale" content="fa_IR.UTF-8"/>
            <meta property="og:locale:alternate" content="en_US.UTF-8"/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content={appName}/>

        </Head>
    )
}

MainHead.propTypes = {
    themeColor: PropTypes.string.isRequired,
    appName: PropTypes.string.isRequired,
};
export default MainHead;