import { useCallback, useEffect, useMemo, useState } from "react"
import { compareAsc, isAfter, isSameMonth,parseISO, subDays, subMonths} from 'date-fns'


export function useDashboardData(){
    const [data,setData] = useState<any[]>([])
    const [loading,setLoading] = useState(false)
    const fetchData = useCallback(async ()=>{
        setLoading(true)
        const res = await fetch('http://localhost:3000/services')
        const rawData = await res.json()
        setData(rawData)
        setLoading(false)
    },[])
    
    useEffect(()=>{
        fetchData()
    },[fetchData])

    const stats = useMemo(()=>{
        if(data.length>0){
            const services = data.filter((s)=>{
                return isSameMonth(parseISO(s.date),new Date())
            })
            const dailyDictionary: Record<string, number> = {}
            const month_receipt = services.reduce(({acc,x}:{acc:any,x:any})=>acc+x)
            const perDay = data.forEach((service) => {
                const dateKey = service.date; 

                if (dateKey) {
                    if (!dailyDictionary[dateKey]) {
                        dailyDictionary[dateKey] = 0;
                    }
                    dailyDictionary[dateKey] += service.price;
                }
            });
            console.log(perDay)
            console.log(month_receipt)
            return{ services, month_receipt, perDay}
        }
        
        return {data}
    },[data])

    return { stats }
}