import Home from './Components/home/Home'
import Login from './Components/common/Login'
import Speakers from './Components/speakers/Speakers'
import RouteNotFound from './RouteNotFound'
import Customers from './Components/customers/Customers'
import ManageCustomers from './Components/customers/ManageCustomers'
import App from './Components/common/App'
import Calendar from './Components/Calendar/Calendar'
import Booking from './Components/Booking/Booking'

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
        ...Booking,
        path: '/booking',
        exact: true
      },
      {
        ...ManageCustomers,
        path: '/customer/:id',
        exact: true
      },
      {
        ...ManageCustomers,
        path: '/customer',
        exact: true
      },
      {
        ...Calendar,
        path: '/calendar',
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
