import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
// ... other imports

function SecondPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      // Redirect to the first page with a message
      navigate('/', { state: { message: 'Please provide your details before accessing this page.' } });
    }
  }, [navigate]);

  return (
    <div>
      <h2>Second Page</h2>
      {/* Render the nested routes */}
      <Outlet />
    </div>
  );
}

export default SecondPage;
