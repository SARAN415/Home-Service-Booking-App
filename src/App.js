import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';
// import Navigation from './Navigation';
import AdmLog from './Component/AdmLog';
import Add from './Component/Add';
import Update from './Component/Update';
import ServTableOne from './Component/ServTableOne';
import UserAdd from './Component/UserAdd';
import SubmitTable from './Component/SubmitTable';
import ServiceTwo from './Component/ServiceTwo';
// import Service from './Service';
import ServmemLog from './Component/ServmemLog';
// import ServmemHome from './ServmemHome';
// import AdmHome from './AdmHome';
import ChatHome from './Component/ChatHome';
import ChatTable from './Component/ChatTable';
// import Chat from './Chat';
import DataBookTable from './Component/DataBookTable';
import DataLogTable from './Component/DataLogTable';
import Data from './Component/Data';
import DataLog from './Component/DataLog';
import DataBook from './Component/DataBook';
import DataOne from './Component/DataOne';
import DataOneService from './Component/DataOneService';
import DataOneServTable from './Component/DataOneServTable';
import DataThreeServTable from './Component/DataThreeServTable';
import DataTwoServTable from './Component/DataTwoServTable';
import DataHome from './Component/DataHome';
import DataOneHome from './Component/DataOneHome';
import DataLogOne from './Component/DataLogOne';
import DataLogBook from './Component/DataLogBook';
import DataBookOne from './Component/DataBookOne';
import DataLogTwo from './Component/DataLogTwo';
import DataLogThree from './Component/DataLogThree';
import DataLogFour from './Component/DataLogFour';
import File from './Component/File';
import ServMemShow from './Component/ServMemShow';
import ServShowTable from './Component/ServShowTable';
import AcceptTable from './Component/AcceptTable';
import AcceptBookTable from './Component/AcceptBookTable';
import UpdateTime from './Component/UpdateTime';
import AcceptedDet from './Component/AcceptedDet';
import AcceptedTableOne from './Component/AcceptedTableOne';
import DataScheduleTable from './Component/DataScheduleTable';
import CustomerLog from './Component/CustomerLog';
import CustLogTable from './Component/CustLogTable';
import DataTwoHome from './Component/DataTwoHome';
import CustMemLog from './Component/CustMemLog';
import SuccessMsg from './Component/SuccessMsg';
import ThemeToggle from './Component/ThemeToggle';
// import Search from './Search';

function App() {
  return (
    <Router>
      <div className="App">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ThemeToggle />
        <Routes>
          {/* <Route path="/search" element={<Search/>}/> */}
          <Route path="/success_msg" element={<SuccessMsg/>} />
          <Route path="/custmem_log" element={<CustMemLog/>} />
          <Route path="/datatwo_home" element={<DataTwoHome/>} />
          <Route path="/custlog_table" element={<CustLogTable/>} />
          <Route path="/customer_log" element={<CustomerLog/>} />
          <Route path="/dataschedule_table" element={<DataScheduleTable/>} />
          <Route path="/acceptedtable_one" element={<AcceptedTableOne/>} />
          <Route path="/accepted_det/:id" element={<AcceptedDet/>} />
          <Route path="/update_time/:id" element={<UpdateTime/>} />
          <Route path="/accept_table" element={<AcceptTable/>} />
          <Route path="/acceptbook_table" element={<AcceptBookTable/>} />
          <Route path="/servmem_show" element={<ServMemShow/>} />
          <Route path="/servshow_table" element={<ServShowTable/>} />
          <Route path="/upload/:id" element={<File/>} />
          <Route path="/datalog_four" element={<DataLogFour/>} />
          <Route path="/datalog_three" element={<DataLogThree/>} />
          <Route path="/datalog_book" element={<DataLogBook/>} />
          <Route path="/datalog_two/:id" element={<DataLogTwo/>} />
          <Route path="/databook_one" element={<DataBookOne/>} />
          <Route path="/datalog_one" element={<DataLogOne/>} />
          {/* <Route path="/service" element={<Service/>}/> */}
          <Route path="/dataone_home" element={<DataOneHome/>} />
          <Route path="/data_home" element={<DataHome/>} />
          <Route path="/data_three_table" element={<DataThreeServTable/>} />
          <Route path="/data_two_table" element={<DataTwoServTable/>} />
          <Route path="/data_one_table" element={<DataOneServTable/>} />
          <Route path="/data_one" element={<DataOne/>} />
          <Route path="/service_det" element={<DataOneService/>} />
          <Route path="/data" element={<Data/>} />
          <Route path="/userlog_det" element={<DataLog/>} />
          <Route path="/userbook_det" element={<DataBook/>} />
          <Route path="/datalog_table" element={<DataLogTable/>} />
          <Route path="/databook_table" element={<DataBookTable/>} />
          <Route path="/chat_table" element={<ChatTable/>} />
          <Route path="/chat_home" element={<ChatHome/>} />
          {/* <Route path="/chat" element={<Chat/>}/> */}
          {/* <Route path="/servmem_home" element={<ServmemHome/>}/> */}
          {/* <Route path="/adm_home" element={<AdmHome/>}/> */}
          <Route path="/servmem_log" element={<ServmemLog/>} />
          <Route path="/service_two" element={<ServiceTwo/>} />
          <Route path="/submit_table" element={<SubmitTable/>} />
          <Route path="/user_add/:id" element={<UserAdd/>} />
          <Route path="/servTableOne" element={<ServTableOne/>} />
          <Route path="/update/:id" element={<Update/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/admin_log" element={<AdmLog/>} />
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
