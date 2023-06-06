import { useRouteError } from "react-router-dom"
import Header from "../components/layouts/Header"
import Footer from "../components/layouts/Footer"
export default function ErrorPage(){
    const error = useRouteError()

    return (
        <>
            <Header/>
            <section id="error-page" className="container mx-auto text-center text-light-grey-2">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </section>
            <Footer/>
        </>
    )
}