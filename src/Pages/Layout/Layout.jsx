import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Aside from '../../Components/Aside/Aside';
import Spinner from '../../Components/Spinner/Spinner';
import './Layout.css';

export default function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="bg-black text-white" style={{ padding: '20px' }}>
      <div className="layout-container">
        <Aside />

        {/* Use CSS class 'content-area' instead of inline margin */}
        <div className="bg-dark rounded p-4 position-relative content-area" style={{ minHeight: '94.5vh' }}>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
