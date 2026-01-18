import { useEffect } from "react";
import { useNavigate, useRoutes, useLocation } from "react-router-dom";

// pages
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/user/Profile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/home";
import Repository from "./components/repo/repository";
import Issues from "./components/issue/issues"
import Pull from "./components/pull/Pull";
import Notification from "./components/notification/notification";

// auth
import { useAuth } from "./authContext";
import NewRepository from "./components/new/newRepository";
import AssignedToMe from "./components/issue/assignedToMe";
import CreatedByMe from "./components/issue/createdByMe";
import Mentioned from "./components/issue/mentioned";
import RecentActivity from "./components/issue/recentActivity";
import Saved from "./components/notification/saved.jsx";
import Inbox from "./components/notification/inbox.jsx";
import Done from "./components/notification/done.jsx";
import ProfileOverview from "./components/user/overview";
import ProfileRepositories from "./components/user/repositories";
import ProfileProject from "./components/user/project";
import ProfilePackage from "./components/user/package";
import ProfileStars from "./components/user/stars";
import MyContribution from "./components/repo/myRepositories";
import MyRepository from "./components/repo/myRepositories";
import MyForks from "./components/repo/myForks";
import AdminableMyByMe from "./components/repo/adminableByMe";



const ProjectRoutes = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const publicRoutes = ["/login", "/signup"];


        if (!currentUser && !publicRoutes.includes(location.pathname)) {
            navigate("/login", { replace: true });
        }

        if (currentUser && publicRoutes.includes(location.pathname)) {
            navigate("/", { replace: true });
        }
    }, [currentUser, location.pathname, navigate]);

    return useRoutes([
        {
            path: "/", element: <Dashboard />,
            children: [
                { index: true, element: <Home /> },
                { path: "createrepo", element: <NewRepository /> },
                {
                    path: "issue", element: <Issues />,
                    children: [
                        {
                            index: true, element: <AssignedToMe />
                        },
                        {
                            path: "createdByMe", element: <CreatedByMe />
                        },
                        {
                            path: "mentioned", element: <Mentioned />
                        },
                        {
                            path: "recentActivity", element: <RecentActivity />
                        }
                    ]
                },
                {
                    path: "repository", element: <Repository />,
                    children: [
                        {
                            index: true, element: <MyContribution />
                        },
                        {
                            path: "myrepository", element: <MyRepository />
                        },
                        {
                            path: "myforks", element: <MyForks />
                        },
                        {
                            path: "admibablebyme", element: <AdminableMyByMe />
                        }
                    ]
                },
                { path: "pull", element: <Pull /> },
                {
                    path: "profile", element: <Profile />,
                    children: [
                        {
                            index: true, element: <ProfileOverview />
                        },
                        {
                            path: "repositories", element: <ProfileRepositories />
                        },
                        {
                            path: "projects", element: <ProfileProject />
                        },
                        {
                            path: "packages", element: <ProfilePackage />
                        },
                        {
                            path: "stars", element: <ProfileStars />
                        }
                    ]
                },
                {
                    path: "notification", element: <Notification />,
                    children: [
                        {
                            index: true, element: <Inbox />
                        },
                        {
                            path: "saved", element: <Saved />
                        },
                        {
                            path: "done", element: <Done />
                        }
                    ]
                },
            ]
        },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
    ]);
};

export default ProjectRoutes;
