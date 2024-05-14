import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/mainLayouts';
import useScript from './hooks/useScript';
import Dashboard from './Views/Dashboard';
import PageNotFound from './pages/PageNotFound';
import LockScreen from './pages/LockScreen';
import LoginScreen from './pages/LoginScreen';
import Roles from './Views/Role/roles'
import Permission from './Views/Permission/permissions'
import Setting from './Views/settings/Settings'
import User from './Views/User/users'
import Service from './Views/Service/service';
import AddService from './Views/Service/AddService';
import Coupon from './Views/Coupon/coupon'
import AddCoupon from './Views/Coupon/add'
import Order from './Views/Order/order'
import Payments from './Views/Payments/payments'
import Addpay from './Views/Payments/addpay'



import GestRoute from './utils/Route/GestRoute';
// import { ACCOUNT_TYPE } from './utils/helper';
import PageNotAccessible from './pages/PageNotAccessible';

function App() {
  useScript("assets/libs/feather-icons/feather.min.js");

  return (
    <>
      {/* <Dashboard></Dashboard> */}
      <Routes>

        <Route element={<MainLayout />} >
          {/* <Route path="/dashboard" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ALL]}>
            <Dashboard />
            // </ProtectedRoute>
          } /> */}

          <Route path="/dashboard" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <Dashboard />
            // </ProtectedRoute>

          } />


          <Route path="/addcoupon" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <AddCoupon />
            // </ProtectedRoute>

          } />


          <Route path="/role" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <Roles />
            // </ProtectedRoute>

          } />

          <Route path="/order" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <Order />
            // </ProtectedRoute>

          } />

          <Route path="/payments" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <Payments/>
            // </ProtectedRoute>

          } />

          <Route path="/addpay" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <Addpay/>
            // </ProtectedRoute>

          } />


          <Route path="/permission" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <Permission />
            // </ProtectedRoute>

          } />
          <Route path="/user" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <User />
            // </ProtectedRoute>

          } />

          <Route path="/service" element={
            <Service />
          } />

          <Route path="/addservice" element={
            <AddService />
          } />



          <Route path="/setting" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <Setting />
            // </ProtectedRoute>
          } />
          <Route path="/coupon" element={
            // <ProtectedRoute type={[ACCOUNT_TYPE.ADMIN]}>
            <Coupon />
            // </ProtectedRoute>
          } />
        </Route>

        <Route path="/" element={
          <GestRoute>
            <LoginScreen />
          </GestRoute>
        } />
        <Route path="/lockscreen" element={

          <GestRoute>
            <LockScreen />
          </GestRoute>

        } />
        <Route path="/no-access" element={
          <PageNotAccessible />
        } />
        <Route path="*" element={

          <PageNotFound />

        } />

      </Routes>

      {/* <script>feather.replace();</script> */}
    </>
  );
}

export default App
