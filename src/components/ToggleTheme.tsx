import { Switch } from './ui'
import { SunDim,MoonStar } from 'lucide-react'


export function ToggleTheme({handleDarkMode,darkMode}:{handleDarkMode:()=>void,darkMode:Boolean}) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="theme" className='data-[state=checked]:bg-orange-500' onCheckedChange={handleDarkMode} />
      {darkMode && <MoonStar className='text-black fill-white'></MoonStar>}
      {!darkMode && <SunDim className='fill-white'></SunDim>}
    </div>
  )
}

