import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input } from "@/components/ui"
import { Label } from "@/components/ui"
import type React from "react"
import { useRef, useState } from "react"
import { useNavigate } from "react-router"
import { ToggleTheme } from "@/components/ToggleTheme"

export function Login() {
    const navigate = useNavigate()
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [darkMode,setDarkMode] = useState(false)
    const handleLogin = (e:React.FormEvent)=>{
        e.preventDefault()
        console.log(email.current?.value)
        console.log(password.current?.value)
        navigate('/')
    }
    const handleDarkMode = ()=>{
        setDarkMode(!darkMode)
        console.log(darkMode)
    }
  return (
    <div className={`${darkMode?'dark':''} ${darkMode?'bg-zinc-950':'bg-slate-200'} flex flex-col min-h-screen w-full`}>
        <div className='flex w-full justify-end mt-5 px-5'>
            <ToggleTheme handleDarkMode={handleDarkMode} darkMode={darkMode}></ToggleTheme>
        </div>
        <div className='flex flex-1 flex-col h-full justify-center items-center'>
            <Card className='max-w-sm w-full shadow-xl shadow-orange-200 border-1 border-orange-200 dark:shadow-orange-400 dark:border-orange-300'>
                <form className='flex flex-col gap-1'  onSubmit={handleLogin}>
                    <CardHeader className='flex flex-col gap-2 justify-center items-center mb-10'>
                        <CardTitle className='text-2xl'>Acessar Conta</CardTitle>
                        <CardDescription>Insira seus dados para entrar.</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-8 justify-center items-center'>
                        <div className='flex flex-col gap-3 w-11/12'>
                            <Label className='text-gray-600 dark:text-gray-300' htmlFor="email">Email:</Label>
                            <Input className='border-1 border-gray-400 dark:border-gray-200 h-9' id='email' type='email' placeholder="exemplo@email.com" required></Input>
                        </div>
                        <div className='flex flex-col gap-3 w-11/12'>
                            <Label className='text-gray-600 dark:text-gray-300' htmlFor="senha">Senha:</Label>
                            <Input className='border-1 border-gray-400 dark:border-gray-200 h-9' id='senha' type='password' required></Input>
                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col justify-center mt-3 border-t-orange-200 gap-8 mb-8 dark:bg-[rgb(28,25,23)] dark:border-orange-300'>
                        <Button className='w-11/12 border-1 border-orange-600 h-9 text-orange-700 hover:text-white hover:bg-orange-600 dark:text-black dark:bg-orange-400 dark:hover:bg-orange-500' type='submit' variant='outline'>Entrar</Button>
                        <a className='text-gray-400 hover:underline' href='#'>Esqueceu sua senha?</a>
                    </CardFooter>
                </form>
            </Card>
        </div>
        

    </div>
  )
}

