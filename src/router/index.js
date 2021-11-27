import { createWebHistory, createRouter } from "vue-router";

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("../views/home"),
    },
    {
        path: "/sanpham/:id",
        name: "SanPham",
        component: () =>
            import ("../views/chitiet"),
    },
    {
        path: "/tintuc",
        name: "TinTuc",
        component: () =>
            import ("../views/tintuc"),
    },
    {
        path: "/cuahang",
        name: "CuaHang",
        component: () =>
            import ("../views/cuahang"),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;