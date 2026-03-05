import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";

//라이터(컨ㄴ트롤러 대상이 되는 패이지를 가져와야한다)
const MainPage = lazy(()=>import("../pages/MainPage"));
const AboutPage = lazy(()=>import("../pages/AboutPage"));
const LoginPage = lazy(()=>import("../pages/LoginPage"));
const ListPage = lazy(()=>import("../pages/todo/ListPage"));
const ReadPage = lazy(()=>import("../pages/todo/ReadPage"));
const Modify = lazy(()=>import("../pages/todo/Modify"));

const Root = createBrowserRouter([
    {
        path:"/",
        element :(
            <Suspense fallback={<Loading />}>
                <MainPage />
            </Suspense>
        )
    },
    {
        path:"/about",
        element :(
            <Suspense fallback={<Loading />}>
                <AboutPage />
            </Suspense>
        )
    },
    {
        path:"/login",
        element :(
            <Suspense fallback={<Loading />}>
                <LoginPage />
            </Suspense>
        )
    },
    {
        path:"/todo/list",
        element :(
            <Suspense fallback={<Loading />}>
                <ListPage />
            </Suspense>
        )
    },
    {
        path:"/todo/read/:tno",
        element :(
            <Suspense fallback={<Loading />}>
                <ReadPage />
            </Suspense>
        )
    },
    {
        path:"/todo/modify/:tno",
        element :(
            <Suspense fallback={<Loading />}>
                <Modify />
            </Suspense>
        )
    },
]);
export default Root;