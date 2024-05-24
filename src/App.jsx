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
import AddUser from './Views/User/CreateUser'
import Coupon from './Views/Coupon/coupon'
import AddCoupon from './Views/Coupon/add'
import Payments from './Views/Payments/payments'
import AddPay from './Views/Payments/addPay'
import GestRoute from './utils/Route/GestRoute';
// import { ACCOUNT_TYPE } from './utils/helper';
import PageNotAccessible from './pages/PageNotAccessible';
import CustomerList from './Views/Customer/CustomerList';
import CreateCustomer from './Views/Customer/CreateCustomer';
import VehicleClass from './Views/Vehicle/VehicleClass';
import CreateVehicle from './Views/Vehicle/CreateVehicle';
import ExamBook from './Views/ExamBook/ExamBooks';
import CreateExamBook from './Views/ExamBook/CreateExamBook';
import ExamDates from './Views/ExamDate/ExamDates';
import CreateExamDate from './Views/ExamDate/CreateExamDate';
import CreateTrialDate from './Views/TrialDate/CreateTrialDate';
import TrialDate from './Views/TrialDate/TrialDate';
import LPBook from './Views/LPBook/LPBooks';
import CreateLPBook from './Views/LPBook/CreateLPBook';
import FilterExamBook from './Views/ExamBook/FilterExamBook';
import FilterLPBook from './Views/LPBook/FilteLPBook';
import ReExam from './Views/ReAttempt/ReExam';
import CreateReExam from './Views/ReAttempt/CreateReExam';
import FilterReExam from './Views/ReAttempt/FilterReExam';
import ReTrial from './Views/ReTrial/ReTrial';
import CreateReTrial from './Views/ReTrial/CreateReTrial';
import FilterReTrial from './Views/ReTrial/FilterReTrial';
import Profile from './Views/Customer/profile';

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
            <Dashboard />
          } />

          <Route path="/user" element={
            <User />
          } />

          <Route path="/createUser" element={
            <AddUser />
          } />

          <Route path="/role" element={
            <Roles />
          } />

          <Route path="/permission" element={
            <Permission />
          } />

          <Route path="/customer" element={
            <CustomerList/>
          } />

          <Route path="/createCustomer" element={
            <CreateCustomer/>
          } />

          <Route path="/profile" element={
            <Profile/>
          } />

          <Route path="/vehicleClass" element={
            <VehicleClass/>
          } />
          
          <Route path="/createVehicle" element={
            <CreateVehicle/>
          } />

          <Route path="/examBook" element={
            <ExamBook/>
          } />

           <Route path="/filterExamBook" element={
            <FilterExamBook/>
          } />

          <Route path="/createExamBook" element={
            <CreateExamBook/>
          } />
         
          <Route path="/examDate" element={
            <ExamDates/>
          } />
          <Route path="/createExamDate" element={
            <CreateExamDate/>
          } />
          <Route path="/trialDate" element={
            <TrialDate/>
          } />
          <Route path="/createTrialDate" element={
            <CreateTrialDate/>
          } />

          <Route path="/lpBook" element={
            <LPBook/>
          } />

          <Route path="/filterLPBook" element={
            <FilterLPBook/>
          } />

          <Route path="/createLPBook" element={
            <CreateLPBook/>
          } />
         
          <Route path="/reExam" element={
            <ReExam/>
          } />
          <Route path="/createReExam" element={
            <CreateReExam/>
          } />
          <Route path="/filterReExam" element={
            <FilterReExam/>
          } />
         
          <Route path="/filterReTrial" element={
            <FilterReTrial/>
          } />
          <Route path="/createReTrial" element={
            <CreateReTrial/>
          } />
          <Route path="/reTrial" element={
            <ReTrial/>
          } />

















          <Route path="/addcoupon" element={
            <AddCoupon />

          } />

          <Route path="/payments" element={
            <Payments/>
          } />
         

          <Route path="/addPay" element={
            <AddPay/>
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
