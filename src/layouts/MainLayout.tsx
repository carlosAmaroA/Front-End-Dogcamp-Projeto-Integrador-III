import { Outlet } from 'react-router'
import { SidebarUI } from "@/components/SidebarUI";
import { Navbar } from '../components/Navbar'
import { SidebarProvider } from '@/components/ui';
import { SidebarInset } from '@/components/ui/sidebar';
import { useEffect, useState } from 'react';

export function MainLayout() {
  const [darkMode,setDarkMode] = useState(false)
  const handleDarkMode = ()=>{
    setDarkMode(!darkMode)
  }

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[darkMode])

  return (
    <SidebarProvider>
        <SidebarUI />
        <SidebarInset className='flex flex-col flex-1'>
          <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
          <main className='flex flex-1'>
              <Outlet/>
          </main>
        </SidebarInset>
        
    </SidebarProvider>
  )
}
