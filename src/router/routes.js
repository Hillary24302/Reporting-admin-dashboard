import React, { lazy } from 'react';
import { CheckAuth } from '../hooks/useAuth';
import Loadable from '../layouts/shared/loadable';
import { Navigate } from 'react-router-dom';
import { paths } from './paths';

//Layouts
const FullLayout = Loadable(lazy(() => import('../layouts/fullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blankLayout')));

//Pages
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard/dashboard')));
const LoginPage = Loadable(lazy(() => import('../pages/Auth/login')));
const MerchantPage = Loadable(lazy(() => import('../pages/Merchant/merchant')));
const AgentPage = Loadable(lazy(() => import('../pages/Agent/agent')));
const ManageUsers = Loadable(lazy(() => import('../pages/ManageUser/manage-user')));
const SettingsPage = Loadable(lazy(() => import('../pages/Settings/settings')));
const SuportPage = Loadable(lazy(() => import('../pages/Support/support')));


  const WebRoutes = [
      {
        path: '/',
        element: <CheckAuth layout={FullLayout}/>,
        children: [
          { path: '/', element: <Navigate to={paths.login} />},
          { path: paths.dashboard, exact: true, element: <Dashboard />},
          { path: paths.merchant, exact: true, element: <MerchantPage />},
          { path: paths.agent, exact: true, element: <AgentPage />},
          { path: paths.manage, exact: true, element: <ManageUsers />},
          { path: paths.settings, exact: true, element: <SettingsPage />},
          { path: paths.support, exact: true, element: <SuportPage />},
        ]
      },
      {
        path: '/auth',
        element: <BlankLayout />,
        children: [
          { path: '/auth/login', element: <LoginPage />},
        ]
      }
  ]
  
  
  export default WebRoutes;



