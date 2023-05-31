import React from 'react'

// Auctions Pages
const AuctionsItems = React.lazy(() => import('./Pages/Auctions/AuctionsList'))
const AddAuctionItem = React.lazy(() => import('./Pages/Auctions/AddAuction'))
const EditAuction = React.lazy(() => import('./Pages/Auctions/EditAuction'))
// Categories Pages
const CategoryList = React.lazy(() => import('./Pages/Categories/CategoryList'))
const AddCategory = React.lazy(() => import('./Pages/Categories/AddCategory'))
// Users Pages
const UsersList = React.lazy(() => import('./Pages/Users/UsersList'))
const AddUser = React.lazy(() => import('./Pages/Users/AddUser'))
// Products Pages
const ProductsList = React.lazy(() => import('./Pages/Products/ProductsList'))
const AddProduct = React.lazy(() => import('./Pages/Products/AddProduct'))

const Dashboard = React.lazy(() => import('./Pages/dashboard/Dashboard'))

//Reports pages
const MonthlyReports = React.lazy(() => import('./Pages/Reports/MonthlyReports/MonthlyReports'))
const Calender = React.lazy(() => import('./Pages/Reports/Calender/Calender'))
const YearlyReports = React.lazy(() => import('./Pages/Reports/YearlyReports/YearlyReports'))
const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Auctions
  { path: '/auctions/items', exact: true, name: 'AuctionsItems', element: AuctionsItems },
  { path: '/auctions/add-auction', name: 'AddAuctionItem', element: AddAuctionItem },
  { path: '/auctions/edit-auction', name: 'EditAuctionItem', element: EditAuction },
  // Categories
  { path: '/category/list', exact: true, name: 'CategoryList', element: CategoryList },
  { path: '/category/add-category', name: 'AddCategory', element: AddCategory },
  // Users
  { path: '/users/list', exact: true, name: 'UsersList', element: UsersList },
  { path: '/users/add-user', name: 'AddUser', element: AddUser },
  // Products
  { path: '/products/list', exact: true, name: 'ProductsList', element: ProductsList },
  { path: '/products/add-product', name: 'AddProduct', element: AddProduct },
  // Reports
  { path: '/reports/monthly-reports', name: 'MonthlyReports', element: MonthlyReports },
  { path: '/reports/calender', name: 'Calender', element: Calender },
  { path: '/reports/yearly-reports', name: 'YearlyReports', element: YearlyReports },
]

export default routes
