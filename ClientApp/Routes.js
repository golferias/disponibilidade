import Home from './Components/home/Home'
import Login from './Components/common/Login'
import Speakers from './Components/speakers/Speakers'
import RouteNotFound from './RouteNotFound'
import Customers from './Components/customers/Customers'

import App from './Components/common/App'

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/home',
        exact: true
      },
      {
        ...Customers,
        path: '/',
        exact: true
      },
      {
        ...Login,
        path: '/login',
        exact: true
      },
      {
        ...Speakers,
        path: '/speakers',
        exact: true
      },
      {
        ...RouteNotFound
      }
    ]
  }
]
