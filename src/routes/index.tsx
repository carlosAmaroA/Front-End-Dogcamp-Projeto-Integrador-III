import { Routes, Route, Navigate } from "react-router";
import { Login } from '../pages/Login'
import { MainLayout } from "@/layouts/MainLayout";
import { Dashboard } from "@/pages/Dashboard";
import { Hospedagem } from "@/pages/Hospedagem";
import { Reservas } from "@/pages/Reservas";
import { Pets } from "@/pages/Pets";
import { Servicos } from "@/pages/Servicos";
import { Financeiro } from "@/pages/Financeiro";
import { PetDetails } from "@/pages/PetDetails";

export function AppRoutes() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Navigate to='/Dashboard'></Navigate>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Hospedagem' element={<Hospedagem/>}></Route>
          <Route path='/Reservas' element={<Reservas/>}></Route>
          <Route path='/Pets' element={<Pets/>}>
            <Route path=':id' element={<PetDetails/>}></Route>
          </Route>
          <Route path='/Servicos' element={<Servicos/>}></Route>
          <Route path='/Financeiro' element={<Financeiro/>}></Route>
          <Route path='/Settings' element={<Dashboard/>}></Route>
        </Route>
    </Routes>
  )
}

