import { Card,CardHeader,CardContent,CardFooter,CardTitle } from "@/components/ui"
import { usePetDetails } from "@/hooks/usePetDetails"
import { MailIcon, PhoneIcon, Syringe, Bug } from "lucide-react"
import { useParams } from "react-router"
import { Link } from "react-router"

export function PetDetails() {
    const { id } = useParams()
    const { stats, loading } = usePetDetails(id ?? '')
    console.log(stats)
    const sizes:Record<string,string> = {
        's':'Pequeno',
        'm':'Médio',
        'l':'Grande',
        'g':'Muito Grande'
    }
  return (
    <div className='flex flex-col w-full items-center'>
        <div className='flex flex-col mt-5 w-11/12 items-center lg:items-stretch'>
            <div className='flex flex-col items-center gap-5 lg:gap-0 lg:flex-row lg:justify-between lg:items-stretch w-full mb-10'>
                <span className='font-light text-3xl'>Detalhes do pet</span>
                <div className='hidden lg:flex flex flex-col items-center gap-5 lg:items-stretch lg:flex-row lg:gap-2'>
                    <Link className='border-slate-400 border rounded-lg text-center px-4 py-1 bg-white hover:bg-slate-200 text-zinc-800 dark:bg-zinc-900 dark:text-slate-100 dark:hover:bg-zinc-950' to='#'>Enviar mensagem para o dono</Link>
                    <Link className='border-slate-400 border rounded-lg text-center px-4 py-1 bg-white hover:bg-slate-200 text-zinc-800 dark:bg-zinc-900 dark:text-slate-100 dark:hover:bg-zinc-950' to='#'>Editar</Link>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col w-full items-center lg:item lg:w-120 lg:items-stretch'>
                    <div className='flex items-center'>
                        <img className='rounded-4xl h-110 w-100' src={stats?stats.image:null}></img>
                    </div>
                    <Card className='mt-5 w-100'>
                        <CardHeader>
                            <CardTitle className='text-3xl font-medium text-center'>
                                {stats?stats.name.toUpperCase():null}, {stats?stats.race.toUpperCase():null}
                            </CardTitle>
                            <CardContent className='flex flex-col gap-5'>
                                <span className='text-xl'>Informações:</span>
                                <div className='flex items-center'>
                                    <div className='w-10 h-10 bg-emerald-100 rounded-full flex justify-center items-center'>
                                        <PhoneIcon className='text-emerald-800'></PhoneIcon>
                                    </div>
                                    <span className='ml-5 text-lg'>{stats?stats.phone:null}</span>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center'>
                                        <MailIcon className='text-blue-800'></MailIcon>
                                    </div>
                                    <span className='ml-5 text-lg'>{stats?stats.email:null}</span>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </div>
                <div className='flex flex-col h-fit w-100 items-center xl:items-stretch xl:w-full mt-5 xl:ml-5 xl:mt-0'>
                    <div className='flex flex-col w-full h-fit xl:h-50'>
                        <Card className='w-full h-fit xl:h-50'>
                            <CardHeader>
                                <CardTitle className='font-bold text-2xl text-center xl:text-left xl:mb-3'>Visão Geral</CardTitle>
                            </CardHeader>
                            <CardContent className='flex h-fit flex-col xl:flex-row items-center justify-center xl:justify-start xl:items-stretch'>
                                <div className='grid grid-cols-[repeat(3,max-content)] xl:flex justify-between w-full gap-5 xl:gap-0'>
                                    <div className='flex flex-col mr-5 xl:mr-12'>
                                        <span className='text-2xl mb-3'>Raça</span>
                                        <span className='w-full xl:text-center text-lg'>{stats?stats.race:null}</span>
                                    </div>
                                    <div className='flex flex-col mr-5 xl:mr-12'>
                                        <span className='text-2xl mb-3'>Idade</span>
                                        <span className='w-full xl:text-center text-lg'>{stats?stats.age:null} anos</span>
                                    </div>
                                    <div className='flex flex-col mr-5 xl:mr-12'>
                                        <span className='text-2xl mb-3'>Sexo</span>
                                        <span className='w-full xl:text-center text-lg'>{stats?(stats.sex=='m'?'Macho':'Femea'):null}</span>
                                    </div>
                                    <div className='flex flex-col mr-5 xl:mr-12'>
                                        <span className='text-2xl mb-3'>Tamanho</span>
                                        <span className='w-full xl:text-center text-lg'>{stats?sizes[stats.size]:null}</span>
                                    </div>
                                    <div className='flex flex-col mr-5 xl:mr-12'>
                                        <span className='text-2xl mb-3'>Tutor</span>
                                        <span className='w-full xl:text-center text-lg'>{stats?stats.owner:null}</span>
                                    </div>
                                    <div className='flex flex-col mr-5 xl:mr-12'>
                                        <span className='text-2xl mb-3'>Cor</span>
                                        <span className='w-full xl:text-center text-lg'>{stats?stats.color:null}</span>
                                    </div>
                                    <div className='flex flex-col mr-5 xl:mr-12'>
                                        <span className='text-2xl mb-3'>Peso</span>
                                        <span className='w-full xl:text-center text-lg'>{stats?stats.weight:null}Kg</span>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                    <div className='flex w-full xl:h-fit mt-5'>
                        <div className='h-fit xl:h-115 w-120'>
                            <Card>
                                <CardHeader>
                                    <CardTitle className='text-xl'>Saúde & Bem-Estar</CardTitle>
                                </CardHeader>
                                <CardContent className='flex flex-col gap-5'>
                                    <div className='flex gap-5'>
                                        <div className={`rounded-full p-2 ${
                                            !stats?.required[0]?.expired 
                                                ? 'bg-emerald-300' 
                                                : 'bg-red-300'
                                            } text-zinc-900`}>
                                            <Syringe ></Syringe>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div>
                                                <span className='text-lg mr-3'>Vacina Polivalente</span>
                                                <span>Expira: {stats?.required[0]?.exp_data}</span>                
                                            </div>
                                            <div>
                                                <span>Status: <span className={`rounded-full p-2 ${
                                                    !stats?.required[0]?.expired 
                                                    ? 'text-emerald-800 dark:text-emerald-200' 
                                                    : 'text-red-800 dark:text-red-200'
                                                }`}>{stats?.required[0]?.text}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className={`rounded-full p-2 ${
                                            !stats?.required[1]?.expired 
                                                ? 'bg-emerald-300' 
                                                : 'bg-red-300'
                                            } text-zinc-900`}>
                                            <Syringe ></Syringe>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div>
                                                <span className='text-lg mr-3'>Vacina de Raiva</span>
                                                <span>Expira: {stats?.required[1]?.exp_data}</span>                
                                            </div>
                                            <div>
                                                <span>Status: <span className={`rounded-full p-2 ${
                                                    !stats?.required[1]?.expired 
                                                    ? 'text-emerald-800 dark:text-emerald-200' 
                                                    : 'text-red-800 dark:text-red-200'
                                                }`}>{stats?.required[1]?.text}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className={`rounded-full p-2 ${
                                            !stats?.required[2]?.expired 
                                                ? 'bg-emerald-300' 
                                                : 'bg-red-300'
                                            } text-zinc-900 text`}>
                                            <Bug ></Bug>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div>
                                                <span className='text-lg mr-3'>Controle de Parasitas</span>
                                                <span>Expira: {stats?.required[2]?.exp_data}</span>                
                                            </div>
                                            <div>
                                                <span>Status: <span className={`rounded-full p-2 ${
                                                    !stats?.required[2]?.expired 
                                                    ? 'text-emerald-800 dark:text-emerald-200' 
                                                    : 'text-red-800 dark:text-red-200'
                                                }`}>{stats?.required[2]?.text}</span></span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </CardContent>
                            </Card>
                        </div> 
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
  )
}