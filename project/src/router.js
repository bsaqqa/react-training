
import Home from "./Pages/Home";
import CaseStudy from "./Pages/CaseStudy";


export default [
    {
        link: '/',
        component: <Home/>,
        name: 'Home'
    },
    {
        link: '/case-study',
        component: <CaseStudy/>,
        name: 'Case Study Page',
        hidden: true
    },

    // {
    //     link: '/error',
    //     name: 'Page not found',
    //     component: <PageNotFound/>,
    //     hidden: true // from navbar
    // },
    //
];
