import Home from './Pages/Home/index';
import TodoDetails from './Pages/TodoDetails';
import PageNotFound from './Pages/PageNotFound';


const Routers = [
    {
        link: '/',
        component: <Home/>,
        name: 'Home'
    },
    {
        link: '/todo/details',
        component: <TodoDetails/>,
        name: 'Details'
    },
    {
        link: '/error',
        name: 'Page not found',
        component: <PageNotFound/>,
        hidden: true // from navbar
    },
];


export default Routers;