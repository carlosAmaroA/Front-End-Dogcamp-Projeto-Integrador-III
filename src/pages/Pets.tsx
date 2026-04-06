import { Outlet } from "react-router";

export function Pets() {
  return (
    <div className='min-h-screen w-full bg-slate-200 dark:bg-zinc-800'>
      <Outlet/>
    </div>
  )
}