import { useCallback, useEffect, useMemo, useState } from "react";
import { addYears, differenceInYears, isAfter, parseISO,format } from 'date-fns';
import { ptBR } from 'date-fns/locale'



export function usePetDetails(id:string){
    const [data,setData] = useState<any[]>([])
    const [loading,setLoading] = useState(false)

    const fetchPets = useCallback(async ()=>{
        setLoading(true)
        const res = await fetch('http://localhost:3000/pets')
        const result = await res.json()
        setData(result)
        setLoading(false)
    },[])

    useEffect(()=>{
        fetchPets()
    },[fetchPets])

    const stats = useMemo(()=>{
        const r= data.find((e)=>e.id===id)
        if(data.length != 0){
            r.age = differenceInYears(new Date(),parseISO(r.birth))
            r.required = r.required.map((e:Record<string,any>)=>{
                if(e.data){
                    const e_data = parseISO(e.data)
                    const exp_data = addYears(e_data,1)
                    const expired = isAfter(new Date(),exp_data)
                    e.exp_data= format(exp_data,'dd/MM/yyyy',{locale:ptBR})
                    e.expired = expired
                    e.text = expired?'Precisa de reforço':'Em dia'
                }else{
                    e.expired = true 
                    e.exp_data= 'N/A'
                    e.text = 'Nunca'
                }
                
                return e
            })
            return r
        }
        return r
    },[data])

    return {stats,loading}
}