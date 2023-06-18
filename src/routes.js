import React from 'react'

// Auctions Pages
const AuctionsList = React.lazy(() => import('./Pages/DashoardPages/Auctions/AuctionsList'))
const AddAuctionItem = React.lazy(() => import('./Pages/DashoardPages/Auctions/AddAuction'))
const EditAuction = React.lazy(() => import('./Pages/DashoardPages/Auctions/EditAuction'))
const AuctionDetails = React.lazy(() => import('./Pages/DashoardPages/Auctions/AuctionDetails'))
// Categories Pages
const CategoryList = React.lazy(() => import('./Pages/DashoardPages/Categories/CategoryList'))
const AddCategory = React.lazy(() => import('./Pages/DashoardPages/Categories/AddCategory'))
// Users Pages
const UsersList = React.lazy(() => import('./Pages/DashoardPages/Users/UsersList'))
const AddUser = React.lazy(() => import('./Pages/DashoardPages/Users/AddUser'))
const ViewUser = React.lazy(() => import('./Pages/DashoardPages/Users/viewUser'))
const AssignPermission = React.lazy(()=> import('./Pages/DashoardPages/Users/AssignPermissions'))
// Products Pages
const ProductsList = React.lazy(() => import('./Pages/DashoardPages/Products/ProductsList'))
const AddProduct = React.lazy(() => import('./Pages/DashoardPages/Products/AddProduct'))
const EditProduct = React.lazy(() => import('./Pages/DashoardPages/Products/EditProduct'))
const ProductDetails = React.lazy(() => import('./Pages/DashoardPages/Products/ProductDetails'))
// ProductDetails Pages
const ProductsDetailsList = React.lazy(() => import('./Pages/DashoardPages/ProductsDetails/DetailsList'))
const AddDetails = React.lazy(() => import('./Pages/DashoardPages/ProductsDetails/AddDetails'))
const EditDetails = React.lazy(() => import('./Pages/DashoardPages/ProductsDetails/EditDetails'))
const AuctionProductDetails = React.lazy(() => import('./Pages/DashoardPages/ProductsDetails/AuctionProductDetails'))
// Dashboard
const Dashboard = React.lazy(() => import('./Pages/DashoardPages/dashboard/Dashboard'))

//Reports pages
const MonthlyReports = React.lazy(() => import('./Pages/Reports/MonthlyReports/MonthlyReports'))
const Calender = React.lazy(() => import('./Pages/Reports/Calender/Calender'))
const YearlyReports = React.lazy(() => import('./Pages/Reports/YearlyReports/YearlyReports'))
// Home
const Home=React.lazy(()=>import('./Pages/WebsitePages/Home/Home'))

// Website Bidding
const Bidding = React.lazy(() =>
  import("./Pages/WebsitePages/Bidding/Bidding")
);

// Website AddCredit
const CreditCardForm = React.lazy(() =>
  import("./Pages/WebsitePages/CreditCardForm/CreditCardForm")
);

// Website Payment
const Payment = React.lazy(() =>
  import("./Pages/WebsitePages/Payment/Payment")
);

// Website VerificationCode
const VerificationCode = React.lazy(() =>
  import("./Pages/WebsitePages/VerificationCode/VerificationCode")
);

// Website NotFound
const NotFound = React.lazy(() =>
  import("./Pages/WebsitePages/NotFound/NotFound")
);


//User Profile
const UserProfile=React.lazy(()=>import('./Pages/WebsitePages/UserProfile/UserProfile'))
const UserProfileEdit=React.lazy(()=>import('./Pages/WebsitePages/UserProfile/UserProfileEdit'))

// Biddings
const BiddingsList = React.lazy(() => import('./Pages/DashoardPages/Biddings/BiddingsList'))
//Routes
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
  { path: '/users/assign-permission/:id', name: 'AssignPermission', element: AssignPermission },
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

  //Home
  { path: '/home', name: 'Home', element: Home },

  //User Profile
  { path: '/profile', name: 'UserProfile', element: UserProfile },
  { path: '/edit-profile/:id', name: 'UserProfileEdit', element: UserProfileEdit },

  //Website Bidding
  { path: "/bidding", name: "Bidding", element: Bidding },

  //Website AddCredit
  { path: "/credit-card-form", name: "CreditCardForm", element: CreditCardForm },

  //Website Payment
  { path: "/payment", name: "Payment", element: Payment },

  //Website VerificationCode
  { path: "/verification-code", name: "VerificationCode", element: VerificationCode },

  //Website NotFound
  { path: "/not-found", name: "NotFound", element: NotFound },

 //Biddings
  { path: '/dashboard/biddings', exact: true, name: 'BiddingsList', element: BiddingsList },

]

export default routes
