import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import MainComponent from './Components/AllFunctionCall/MainComponent'
import AdminDashboard from './Components/AdminDashboard';
import AddEmployee from './Components/AddEmployee';
import CreateCompany from './Components/CreateCompany';
import CreateDesignation from './Components/CreateDesignation';
import CreateDepartment from './Components/CreateDepartment';
import Home from './Components/Home';

function App() {
 
  return (
    <> 
    <div id="companyname">GLOBAL CONSTRUCTION</div> 
    <Routes> 
      <Route path="/" element={<MainComponent />} /> 
      <Route path="/admin/dashboard" element={<AdminDashboard />} /> 
      <Route path="/addemployee" element={<AddEmployee />} /> 
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/createcompany" element={<CreateCompany />} />
      <Route path="/createdesignation" element={<CreateDesignation />} />
      <Route path="/createdepartment" element={<CreateDepartment />} />
      <Route path="/home" element={<Home/>} />

    </Routes> </>
  )
}

export default App
