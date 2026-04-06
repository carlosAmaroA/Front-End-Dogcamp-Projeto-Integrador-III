import { ToggleTheme } from "./ToggleTheme"
import { NavigationMenu } from "./ui"

export function Navbar({darkMode,handleDarkMode}:{darkMode:boolean,handleDarkMode:()=>void}) {

  return (
    <div>
      <div className='h-16'></div>
      <div className='fixed top-0 left-0 right-0 w-full'>
        <div className='flex justify-center'>
            <NavigationMenu className='
                w-full h-16 max-w-none justify-end px-6
                bg-white/90 border-b border-slate-200 shadow-sm md:border md:shadow-md
                dark:bg-zinc-900 dark:border-zinc-800
                dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
                md:mx-0 dark:md:border'>
                <ToggleTheme handleDarkMode={handleDarkMode} darkMode={darkMode}></ToggleTheme>
            </NavigationMenu>
        </div>
      </div>
    </div>
  )
}