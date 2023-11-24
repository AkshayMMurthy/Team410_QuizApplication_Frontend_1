import '../design/first.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Startpage';
import Quiz from './quizrender';
import Result from './Score';

import { CheckUserExist } from '../functionsfetch/serverfunctions';


/** react routes */
const router = createBrowserRouter([

  {
    path : '/',
    element : <Main></Main>
  },
 
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;