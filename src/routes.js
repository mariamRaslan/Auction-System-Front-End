import React from 'react'

// Auctions Pages
const AuctionsList = React.lazy(() => import('./Pages/Auctions/AuctionsList'))
const AddAuctionItem = React.lazy(() => import('./Pages/Auctions/AddAuction'))
const EditAuction = React.lazy(() => import('./Pages/Auctions/EditAuction'))
const AuctionDetails = React.lazy(() => import('./Pages/Auctions/AuctionDetails'))
// Categories Pages
const CategoryList = React.lazy(() => import('./Pages/Categories/CategoryList'))
const AddCategory = React.lazy(() => import('./Pages/Categories/AddCategory'))
// Users Pages
const UsersList = React.lazy(() => import('./Pages/Users/UsersList'))
const AddUser = React.lazy(() => import('./Pages/Users/AddUser'))
const ViewUser = React.lazy(() => import('./Pages/Users/viewUser'))
// Products Pages
const ProductsList = React.lazy(() => import('./Pages/Products/ProductsList'))
const AddProduct = React.lazy(() => import('./Pages/Products/AddProduct'))
const EditProduct = React.lazy(() => import('./Pages/Products/EditProduct'))
const ProductDetails = React.lazy(() => import('./Pages/Products/ProductDetails'))
// ProductDetails Pages
const ProductsDetailsList = React.lazy(() => import('./Pages/ProductsDetails/DetailsList'))
const AddDetails = React.lazy(() => import('./Pages/ProductsDetails/AddDetails'))
const EditDetails = React.lazy(() => import('./Pages/ProductsDetails/EditDetails'))
const AuctionProductDetails = React.lazy(() => import('./Pages/ProductsDetails/AuctionProductDetails'))
// Dashboard
const Dashboard = React.lazy(() => import('./Pages/dashboard/Dashboard'))

//Reports pages
const MonthlyReports = React.lazy(() => import('./Pages/Reports/MonthlyReports/MonthlyReports'))
const Calender = React.lazy(() => import('./Pages/Reports/Calender/Calender'))
const YearlyReports = React.lazy(() => import('./Pages/Reports/YearlyReports/YearlyReports'))
const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Auctions
  { path: '/auctions', exact: true, name: 'AuctionsList', element: AuctionsList },
  { path: '/auctions/add', name: 'AddAuctionItem', element: AddAuctionItem },
  { path: '/auctions/edit/:auctionId', name: 'EditAuctionItem', element: EditAuction },
  { path: '/auctions/details/:auctionId', name: 'AuctionDetails', element: AuctionDetails },
  // Categories
  { path: '/category/list', exact: true, name: 'CategoryList', element: CategoryList },
  { path: '/category/add-category', name: 'AddCategory', element: AddCategory },
  // Users
  { path: '/users/list', exact: true, name: 'UsersList', element: UsersList },
  { path: '/users/add-user', name: 'AddUser', element: AddUser },
  { path: '/users/view-user/:id', name: 'ViewUser', element: ViewUser },
  // Products
  { path: '/products/list', exact: true, name: 'ProductsList', element: ProductsList },
  { path: '/products/add-product', name: 'AddProduct', element: AddProduct },
  { path: '/products/edit-product/:id', name: 'EditProduct', element: EditProduct },
  { path: '/products/product-details/:id', name: 'ProductDetails', element: ProductDetails },
  // Products Details
  { path: '/productsDetails/list', exact: true, name: 'ProductsDetailsList', element: ProductsDetailsList },
  { path: '/productsDetails/add-details', exact: true, name: 'AddDetails', element: AddDetails },
  { path: '/productsDetails/edit-details/:id', name: 'EditDetails', element: EditDetails },
  { path: '/productsDetails/product-details/:id', name: 'AuctionProductDetails', element: AuctionProductDetails},
  // Reports
  { path: '/reports/monthly-reports', name: 'MonthlyReports', element: MonthlyReports },
  { path: '/reports/calender', name: 'Calender', element: Calender },
  { path: '/reports/yearly-reports', name: 'YearlyReports', element: YearlyReports },
]

export default routes
