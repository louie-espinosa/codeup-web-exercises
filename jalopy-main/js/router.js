import home, {homeEvents} from "./views/Home.js";
import aboutHTMLFunction, {aboutJSFunction} from "./views/About.js";
import Error404 from "./views/Error404.js";
import loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import userIndex, {userEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import quotesView from "./views/Quotes.js";
import addQuoteView, {addQuoteEvent} from "./views/Add_quote.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: home,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: homeEvents
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/',
            title: 'Logout',
            viewEvent: LogoutEvents
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/users': {
            returnView: userIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: userEvents
        },
        '/about': {
            returnView: aboutHTMLFunction,
            state: {},
            uri: '/about',
            title: 'About',
            viewEvent: aboutJSFunction
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/quotes': {
            returnView: quotesView,
            state: {
                quotes: {
                    url: "https://quotes.fulgentcorp.com:12250/v1/quotes?random=false&limit=20",
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': QUOTE_API_KEY
                    }
                }

            },
            uri: "/quotes",
            title: 'Quotes',
        },
        '/addQuote': {
            returnView: addQuoteView,
            state: {},
            uri: "/addQuote",
            title: 'Add a new quote',
            viewEvent: addQuoteEvent
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}