import React from 'react'

// Auctions Pages
const AuctionsItems = React.lazy(() => import('./Pages/Auctions/AuctionsItems/AuctionsItems'))
const AddAuctionItem = React.lazy(() => import('./Pages/Auctions/AddAuctions/AddAuctions'))

// Categories Pages
const CategoryList = React.lazy(() => import('./Pages/Categories/CategoryList/CategoryList'))
const AddCategory = React.lazy(() => import('./Pages/Categories/AddCategory/AddCategory'))
// Users Pages
const UsersList = React.lazy(() => import('./Pages/Users/UsersList/UsersList'))
const AddUser = React.lazy(() => import('./Pages/Users/AddUser/AddUser'))
// Products Pages
const ProductsList = React.lazy(() => import('./Pages/Products/ProductsList/ProductsList'))
const AddProduct = React.lazy(() => import('./Pages/Products/AddProduct/AddProduct'))

const Dashboard = React.lazy(() => import('./Pages/dashboard/Dashboard'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Auctions
  { path: '/auctions/items', exact: true, name: 'AuctionsItems', element: AuctionsItems },
  { path: '/auctions/add-auction', name: 'AddAuctionItem', element: AddAuctionItem },
  // Categories
  { path: '/category/list', exact: true, name: 'CategoryList', element: CategoryList },
  { path: '/category/add-category', name: 'AddCategory', element: AddCategory },
  // Users
  { path: '/users/list', exact: true, name: 'UsersList', element: UsersList },
  { path: '/users/add-user', name: 'AddUser', element: AddUser },
  // Products
  { path: '/products/list', exact: true, name: 'ProductsList', element: ProductsList },
  { path: '/products/add-product', name: 'AddProduct', element: AddProduct },
]

export default routes
