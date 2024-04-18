import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import UserDashboard from './user/UserDashboard';
import AdminDashboard from './admin/AdminDashboard';

const Dashboard = ({ role }) => {
  return (
    <div>
      <Header user={role} />
      <main>
        {role === 'admin' ? <AdminDashboard /> : <UserDashboard />}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
