import Profile from './Profile.jsx'
import ErrorPage from './ErrorPage.jsx'
import Root from './root.jsx'
import Contact from './contact.jsx'

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  }
]

export default routes;