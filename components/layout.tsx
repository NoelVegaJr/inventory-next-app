import React from 'react';
import { useQuery } from '@tanstack/react-query';
const Layout = () => {
  const { isLoading, error, data } = useQuery(['auth'], async () => {
    const response = await fetch('/api/auth/session');
    const data = await response.json();
    return data;
  });
  return <div>Layout</div>;
};

export default Layout;
