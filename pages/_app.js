import '../styles/globals.css'
import {MainHead} from "../components";

const MyApp = ({Component, pageProps}) => {
    return (
        <>
            <MainHead appName='talentCoach' themeColor='#f8f8f8'/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
