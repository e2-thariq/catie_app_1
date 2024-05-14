import './App.css';
import LoginPage from './components/LoginPage/LoginPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Activities from './components/Activities & Weather/Activities/Activities.jsx';
import Weather from './components/Activities & Weather/Weather/Weather.jsx'
import HomePage from './components/HomePage/Homepage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path: '/', element: <LoginPage />, errorElement: <ErrorPage />},

  {
    path: '/home',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children:[
      { path: 'activities', element: <Activities />, errorElement: <ErrorPage /> },
      { path: 'weather', element: <Weather />, errorElement: <ErrorPage /> },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;