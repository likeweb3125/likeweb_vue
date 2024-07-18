import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const About = () =>
    import(/* webpackChunkName: "about" */ "@/views/about/index.vue");
const About1 = () =>
    import(/* webpackChunkName: "about1" */ "@/views/about/About1.vue");
// const About2 = () =>
//     import(/* webpackChunkName: "about2" */ "@/views/about/About2.vue");
const About3 = () =>
    import(/* webpackChunkName: "about3" */ "@/views/about/About3.vue");
const About4 = () =>
    import(/* webpackChunkName: "about4" */ "@/views/about/About4.vue");
const About5 = () =>
    import(/* webpackChunkName: "about5" */ "@/views/about/About5.vue");
const Portfolio = () =>
    import(/* webpackChunkName: "portfolio" */ "@/views/portfolio/index.vue");
const Portfolio1 = () =>
    import(/* webpackChunkName: "portfolio1" */ "@/views/portfolio/Portfolio1.vue");
const Works = () =>
    import(/* webpackChunkName: "works" */ "@/views/works/index.vue");
const Works1 = () =>
    import(/* webpackChunkName: "works1" */ "@/views/works/Works1.vue");
const Contact = () =>
    import(/* webpackChunkName: "contact" */ "@/views/contact/index.vue");
const Contact1 = () =>
    import(/* webpackChunkName: "contact1" */ "@/views/contact/Contact1.vue");
const Solution = () =>
    import(/* webpackChunkName: "solution" */ "@/views/solution/index.vue");
const Solution1 = () =>
    import(/* webpackChunkName: "solution1" */ "@/views/solution/Solution1.vue");
const Solution2 = () =>
    import(/* webpackChunkName: "solution2" */ "@/views/solution/Solution2.vue");
const Solution3 = () =>
    import(/* webpackChunkName: "solution3" */ "@/views/solution/Solution3.vue");
const Solution4 = () =>
    import(/* webpackChunkName: "solution4" */ "@/views/solution/Solution4.vue");
const ErrorPage = () =>
    import(/* webpackChunkName: "error" */ "@/views/error/Error.vue");

const routes = [
    {
        path: "/",
        name: "Home",
        meta: { title: "LIKEWEB" },
        component: Home,
    },
    {
        path: "/about",
        redirect: "/about/about_1",
        name: "About",
        meta: { title: "LIKEWEB || About" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About,
        children: [
            {
                path: "about_1",
                to: "/about/about_1",
                name: "회사 소개",
                component: About1,
                meta: { title: "LIKEWEB || 회사 소개" },
            },
            // {
            //     path: "about_2",
            //     to: "/about/about_2",
            //     name: "회사 연혁",
            //     component: About2,
            //     meta: { title: "LIKEWEB || 회사 연혁" },
            // },
            {
                path: "about_3",
                to: "/about/about_3",
                name: "조직도",
                component: About3,
                meta: { title: "LIKEWEB || 조직도" },
            },
            {
                path: "about_4",
                to: "/about/about_4",
                name: "채용정보",
                component: About4,
                meta: { title: "LIKEWEB || 채용정보" },
            },
            {
                path: "about_5",
                to: "/about/about_5",
                name: "오시는 길",
                component: About5,
                meta: { title: "LIKEWEB || 오시는 길" },
                bg: true,
            },
        ],
    },
    {
        path: "/solution",
        redirect: "/solution/solution_1",
        name: "Solution",
        meta: { title: "LIKEWEB || Solution" },
        component: Solution,
        children: [
            {
                path: "solution_1",
                to: "/solution/solution_1",
                name: "Shopping mall",
                component: Solution1,
                meta: { title: "LIKEWEB || Shopping mall" },
            },
            {
                path: "solution_2",
                to: "/solution/solution_2",
                name: "e-Learning Solutions",
                component: Solution2,
                meta: { title: "LIKEWEB || e-Learning Solutions" },
            },
            {
                path: "solution_3",
                to: "/solution/solution_3",
                name: "입찰/경매",
                component: Solution3,
                meta: { title: "LIKEWEB || 입찰/경매" },
            },
            {
                path: "solution_4",
                to: "/solution/solution_4",
                name: "ETC",
                component: Solution4,
                meta: { title: "LIKEWEB || ETC" },
            },
        ],
    },
    {
        path: "/portfolio",
        redirect: "/portfolio/portfolio_1",
        name: "Portfolio",
        meta: { title: "LIKEWEB || Portfolio" },
        component: Portfolio,
        children: [
            {
                path: "portfolio_1",
                component: Portfolio1,
                meta: { title: "LIKEWEB || Portfolio" },
            },
        ],
    },
    {
        path: "/works",
        redirect: "/works/works_1",
        name: "Works",
        meta: { title: "LIKEWEB || Works" },
        component: Works,
        children: [
            {
                path: "works_1",
                component: Works1,
                meta: { title: "LIKEWEB || Works" },
            },
        ],
    },
    {
        path: "/contact",
        redirect: "/contact/contact_1",
        name: "Contact",
        meta: { title: "LIKEWEB || CONTACT US" },
        component: Contact,
        children: [
            {
                path: "contact_1",
                component: Contact1,
                meta: { title: "LIKEWEB || CONTACT US" },
            },
        ],
    }
];

const errorRoutes = [
    {
        path: '/error',
        name: 'Error',
        component: ErrorPage,
        meta: { title: 'error' },
    },
    {
        path: '*',
        redirect: '/error',
    },
]

const router = new VueRouter({
    //mode: 'history',
    routes: [...routes, ...errorRoutes],
    base: process.env.BASE_URL,
});

let isErrorPage = false;

router.beforeEach((to, from, next) => {
    if (isErrorPage) {
        next();
        return;
    }

    const isValidRoute = router.resolve(to).resolved.matched.length > 0;
    document.title = to.meta.title;

    if (!isValidRoute) {
        isErrorPage = true;
        next('/error');
    } else {
        next();
        window.scrollTo({
            top: 0,
            left: 0,
            //behavior:'smooth'
        });
    }
});


export default router;
