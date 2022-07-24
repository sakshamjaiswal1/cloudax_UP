import './App.css';
// import Header from './components/Header/Header';
// import Payment from './pages/Deposit Flow/Payment';
// import AccountChangePin from './pages/profile/AccountChangePin';
import AccountEnterOtp from './pages/profile/AccountEnterOtp';
// import AccountSuccess from './pages/profile/AccountSuccess';
import Email from './pages/Login/Email'
import Activate from './pages/Login/Activate';
import Create from './pages/Login/Create'
import Login from './pages/Login/Login';
import Mobile from './pages/Login/Mobile'
import FacialVerification from './pages/Login/FacialVerification'
import FacialVerified from './pages/Login/FacialVerified'
import IdVerification from './pages/Login/IdVerification';
import KycVerification from './pages/Login/KycVerification'

const App = () => {
  return (
    <div className="App">
      {/* <Form1WithModal/> */}
      {/* <OTPBox/> */}
      {/* <TransactionPin/> */}
      {/* <OTPBoxSuccess/> */}
      {/* <PinSetupBox/> */}
      {/* <ConfirmFormWithModal/> */}
      {/* <SelectMerchant  /> */}
      {/* <SelectMerchant1  /> */}
      {/* <ConfirmForm1/> */}
      {/* <ConfirmFrom1/> */}
      {/* <Login/> */}
      {/* <Form/> */}
      {/* <Form1/> */}
      <Login/>
      {/* <Create/> */}
      <Mobile/>
      <Activate/>
      {/* <Email/> */}
      <KycVerification/>
      <IdVerification/>
      {/* <IdVerified/> */}
      {/* <KycVerified/> */}
      <FacialVerification/>
      {/* <FacialVerified/> */}
      {/* <Verified/> */}
      {/* <Transactions/> */}
      {/* <Wallet/> */}
      {/* <MainProfile/> */}
      {/* <AccountSetting/> */}
      {/* <FormTransaction/> */}
      {/* <Services/> */}
      {/* <Payment/> */}
      {/* <AccountEnterOtp/> */}
      {/* <Payment/> */}
      {/* <AccountSuccess/> */}
      {/* <AccountChangePin/> */}
    </div>
  );
};

export default App;
