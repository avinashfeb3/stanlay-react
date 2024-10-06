import React, {useEffect} from 'react'
import Layout from '../../components/Layout';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
      // Check if the user is authenticated
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (!isAuthenticated) {
        navigate('/'); // Redirect to login if not authenticated
      }
    }, [navigate]);
    const handleLogout = () => {
        // Clear authentication status
        localStorage.removeItem('isAuthenticated');
        navigate('/'); // Redirect to login after logout
      };
  return (
    <>
     <Helmet>
        <title>Dashboard - Asian Contec Ltd</title>
        <meta name="description" content="Welcome to your dashboard." />
        <meta name="keywords" content="dashboard, analytics, user" />
      </Helmet>
        <Layout>
        <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <p className="mt-4">This is the dashboard content.</p>
    </div>
    <button
          className="bg-red-500 text-white py-2 px-4 rounded mt-10"
          onClick={handleLogout}
        >
          Logout
        </button>
        </Layout>
    </>
  );
}

export default Dashboard;