import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CareerPage from './Components/CareerPage';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import JobDetail  from './Components/JobDetail';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CareerPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Career",

          children: [
            {
              index: true,
              element: <Jobs />,
            },
            {
              path: ":id",
              element: <JobDetail />,
            },
          ],
        },

      ],
      // editing content
      //path:
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
