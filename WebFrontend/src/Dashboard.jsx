import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import UserDashboard from './user/UserDashboard';
import AdminDashboard from './admin/AdminDashboard';

const Dashboard = () => {
  const { state } = useLocation();  // Use location to retrieve state
  const role = state?.role;  // Extract role from state

  return (
    <div>
      <Header user={role} />
      <main style={{ marginTop: '150px' }}>
        {role === 'admin' ? <AdminDashboard /> : <UserDashboard />}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
