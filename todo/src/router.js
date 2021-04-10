import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';


const Routers = [
    {
        link: '/',
        component: <Home/>,
        name: 'Home'
    },
    {
        link: '/error',
        name: 'Page not found',
        component: <PageNotFound/>,
        hidden: true // from navbar
    },
];


export default Routers;