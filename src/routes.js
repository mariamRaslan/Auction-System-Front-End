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
//product
const Product=React.lazy(()=>import('./Pages/WebsitePages/product/product'))
//auction
const Auction=React.lazy(()=>import('./Pages/WebsitePages/Auction/auction'))
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
//website live stream
const ShowLiveStream=React.lazy(() => import('./Pages/WebsitePages/LiveStream/LiveStream'))
//dashboard live stream
const CreateLiveStream=React.lazy(() => import('./Pages/DashoardPages/LiveStream/LiveStream'))
//Routes
const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Auctions
  { path: 'dashboard/auctions', exact: true, name: 'AuctionsList', element: AuctionsList },
  { path: 'dashboard/auctions/add', name: 'AddAuctionItem', element: AddAuctionItem },
  { path: 'dashboard/auctions/edit/:auctionId', name: 'EditAuctionItem', element: EditAuction },
  { path: 'dashboard/auctions/details/:auctionId', name: 'AuctionDetails', element: AuctionDetails },
  // Categodashboardries
  { path: 'dashboard/category/list', exact: true, name: 'CategoryList', element: CategoryList },
  { path: 'dashboard/category/add-category', name: 'AddCategory', element: AddCategory },
  // Usersdashboard
  { path: 'dashboard/users/list', exact: true, name: 'UsersList', element: UsersList },
  { path: 'dashboard/users/add-user', name: 'AddUser', element: AddUser },
  { path: 'dashboard/users/view-user/:id', name: 'ViewUser', element: ViewUser },
  { path: 'dashboard/users/assign-permission/:id', name: 'AssignPermission', element: AssignPermission },
  // Producdashboardts
  { path: 'dashboard/products/list', exact: true, name: 'ProductsList', element: ProductsList },
  { path: 'dashboard/products/add-product', name: 'AddProduct', element: AddProduct },
  { path: 'dashboard/products/edit-product/:id', name: 'EditProduct', element: EditProduct },
  { path: 'dashboard/products/product-details/:id', name: 'ProductDetails', element: ProductDetails },
  // Producdashboardts Details
  { path: 'dashboard/productsDetails/list', exact: true, name: 'ProductsDetailsList', element: ProductsDetailsList },
  { path: 'dashboard/productsDetails/add-details', exact: true, name: 'AddDetails', element: AddDetails },
  { path: 'dashboard/productsDetails/edit-details/:id', name: 'EditDetails', element: EditDetails },
  { path: 'dashboard/productsDetails/product-details/:id', name: 'AuctionProductDetails', element: AuctionProductDetails},
  // Reportdashboards
  { path: 'dashboard/reports/monthly-reports', name: 'MonthlyReports', element: MonthlyReports },
  { path: 'dashboard/reports/calender', name: 'Calender', element: Calender },
  { path: 'dashboard/reports/yearly-reports', name: 'YearlyReports', element: YearlyReports },
  //dashboard live stream
  {path:'dashboard/live-stream/create',exact:true,name:'CreateLiveStream',element:CreateLiveStream},

  //Home
  { path: '/home', name: 'Home', element: Home },
  //product
  { path: '/products', name: 'Product', element: Product },
  //auction
  { path: '/auctions', name: 'Auction', element: Auction },

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

 //Biddings
  { path: '/dashboard/biddings', exact: true, name: 'BiddingsList', element: BiddingsList },

  //website live stream
  {path:'/live-stream/show',exact:true,name:'ShowLiveStream',element:ShowLiveStream},

  
   //Website NotFound
   { path: "*", name: "NotFound", element: NotFound },

]

export default routes
