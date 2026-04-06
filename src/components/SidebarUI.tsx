import { Link, useLocation } from "react-router"
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader } from "./ui"
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator, SidebarTrigger } from "./ui/sidebar"
import { Calendar, ClipboardList, DollarSign, Hotel, LayoutDashboard, PawPrint, Settings } from "lucide-react"
import Logo from '../assets/PetHub.png'

export function SidebarUI() {
    const location = useLocation()

    const selectStyle = (name:string)=>{
        const selected = location.pathname === name
        return `${selected
            ?'bg-orange-400 text-zinc-50 hover:bg-orange-500 hover:text-zinc-50 dark:hover:bg-orange-500'
            :'hover:bg-gray-200 dark:hover:bg-zinc-800 text-slate-900 dark:text-slate-50'}`
    }
  return (
    <div className='relative'>
        <SidebarTrigger size='lg' className='fixed z-50 top-[5px] md:hidden m-2 bg-orange-500 text-white hover:bg-orange-400 hover:text-white dark:hover:bg-orange-300 dark:bg-zinc-900 dark:text-zinc-50 dark:border-zinc-50 dark:hover:bg-zinc-800'>
            <PawPrint></PawPrint>
        </SidebarTrigger>
        <Sidebar className='border-slate-200 bg-slate-50 dark:bg-zinc-900 dark:border-zinc-800' collapsible="offcanvas">
            <SidebarHeader>
                <div className='flex justify-between'>
                    <img className='w-full' src={Logo} alt="" />
                    <div className='relative'>
                        <SidebarTrigger className='fixed top-[11px] p-[20px] ml-10 dark:bg-zinc-900 dark:text-zinc-50 dark:border-zinc-50 bg-orange-500 text-white hover:bg-orange-400 hover:text-white dark:hover:bg-zinc-800' size={'icon-lg'}></SidebarTrigger>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem><SidebarMenuButton className={`${selectStyle('/Dashboard')}`} size='lg'><LayoutDashboard/><Link to='/Dashboard'>Dashboard</Link></SidebarMenuButton></SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarSeparator></SidebarSeparator>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem><SidebarMenuButton className={`${selectStyle('/Hospedagem')}`} size='lg'><Hotel/><Link to='/Hospedagem'>Hospedagem</Link></SidebarMenuButton></SidebarMenuItem>
                        <SidebarMenuItem><SidebarMenuButton className={`${selectStyle('/Reservas')}`} size='lg'><Calendar/><Link to='/Reservas'>Reservas</Link></SidebarMenuButton></SidebarMenuItem>
                        <SidebarMenuItem><SidebarMenuButton className={`${selectStyle('/Pets')}`} size='lg'><PawPrint/><Link to='/Pets'>Pets</Link></SidebarMenuButton></SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarSeparator></SidebarSeparator>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem><SidebarMenuButton className={`${selectStyle('/Servicos')}`} size='lg'><ClipboardList/><Link to='/Servicos'>Serviços</Link></SidebarMenuButton></SidebarMenuItem>
                        <SidebarMenuItem><SidebarMenuButton className={`${selectStyle('/Financeiro')}`} size='lg'><DollarSign/><Link to='/Financeiro'>Financeiro</Link></SidebarMenuButton></SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem><SidebarMenuButton size='lg'><Link to='/settings' className='flex gap-3 dark:text-zinc-50 items-center hover:text-gray-600'>
                        <div className='bg-orange-500 p-2 rounded-lg text-zinc-50 dark:hover:bg-zinc-800'><Settings></Settings></div>
                        <span className='dark:hover:text-zinc-50'>Configurações</span>
                    </Link></SidebarMenuButton></SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    </div>
  )
}
