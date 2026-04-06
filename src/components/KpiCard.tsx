import { Card, CardContent, CardFooter, CardHeader } from "./ui"

interface KpiCardProps {
    title?:string,
    description?:string,
    color?:string,
    children:React.ReactNode
}

export function KpiCard({color='green',children}:KpiCardProps) {
    const colors:Record<string,string>= {
        green:'border-emerald-400',
        yellow:'border-amber-400',
        red:'border-red-600',
        blue:'border-cyan-400'
    }

    return (
    <Card className={`border-1 border-slate-100 h-75 border-l-5 ${colors[color] || 'border-slate-100'}`}>
        {children}
    </Card>
  )
}

KpiCard.Header = ({children}:{children:React.ReactNode}) => <CardHeader className='flex justify-between'>{children}</CardHeader>
KpiCard.Content = ({children}:{children:React.ReactNode}) => <CardContent className='py-0 h-50'>{children}</CardContent>
KpiCard.Footer = ({children}:{children:React.ReactNode}) => <CardFooter className='py-0'>{children}</CardFooter>