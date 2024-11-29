import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home'
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import AdminCompanies from './components/admin/AdminCompanies';
import AdminJobs from './components/admin/AdminJobs';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import PostJobs from './components/admin/PostJobs';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },

  //admin routes starts from here
  {
    path:'/admin/companies',
    element:<AdminCompanies/>
  },
  {
    path:'/admin/companies/create',
    element:<CompanyCreate/>
  },
  {
    path:'/admin/companies/:id',
    element:<CompanySetup/>
  },
  {
    path:'/admin/jobs',
    element:<AdminJobs/>
  },
  {
    path:'/admin/jobs/create',
    element:<PostJobs/>
  }
  
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
