
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import AboutDetails from './Pages/AboutDetails.js';
import PageNotFound from './Pages/PageNotFound.js';


const Routers = [
    {
        link: '/',
        component: <Home/>,
        name: 'Home'
    },
    {
        link: '/about',
        component: <About/>,
        name: 'About Page'
    },
    {
        link: '/about/:id',
        component: <AboutDetails/>,
        name: 'About Page With ID',
        hidden: true // from navbar
    }, 
    {
        link: '/error',
        name: 'Page not found',
        component: <PageNotFound/>,
        hidden: true // from navbar
    },
    // {
    //     link: '*',
    //     name: 'No Match',
    //     component: <PageNotFound/>,
    //     hidden: true // from navbar
    // }
];

export default Routers;