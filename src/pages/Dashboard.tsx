import { KpiCard } from "@/components/KpiCard"
import { CardContent, CardTitle } from "@/components/ui"
import { useDashboardData } from "@/hooks/useDashboardData"
import { AlertTriangle, CalendarClock, PawPrint, TrendingUp } from "lucide-react"

export function Dashboard() {
  
  const {stats} = useDashboardData()
  return (
    <div className='flex flex-1 w-full bg-slate-100 dark:bg-zinc-900'>
      <div className='grid w-full gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-5 mx-5'>
        {/* Cards para os kpis, Aqui estão os primeiros quatros, eles utilizam os dados obtidos pelos hooks */}
        <KpiCard color='green'>
          <KpiCard.Header>
            <CardTitle className='pb-0 text-md'>RECEITA MENSAL</CardTitle>
            <TrendingUp className='text-emerald-500'></TrendingUp>
          </KpiCard.Header>
          <KpiCard.Content>
            <div className='flex justify-between'>
              <div className='font-light text-3xl'>R$ 15000</div>
              <div className='font-light text-lg bg-emerald-100 text-emerald-800 rounded-lg py-1 px-3'>+12%</div>
            </div>
            <div className='bg-emerald-50 h-40 rounded-lg mt-2'></div>
          </KpiCard.Content>
          <KpiCard.Footer><div>Planos Ativos: 20</div></KpiCard.Footer>
        </KpiCard>

        <KpiCard color='yellow'>
          <KpiCard.Header>
            <CardTitle className='pb-0 text-md'>OCUPAÇÃO DIÁRIA</CardTitle>
            <PawPrint className='text-yellow-500'></PawPrint>
          </KpiCard.Header>
          <KpiCard.Content>
            <div className='flex justify-between'>
              <span className='font-light text-2xl'>10/20</span>
              <span className='font-light text-lg bg-amber-100 text-amber-800 rounded-lg px-3 py-1'>50%</span>
            </div>
            <div className='bg-emerald-50 h-40 rounded-lg mt-2'></div>
          </KpiCard.Content>
          <KpiCard.Footer><div>Ativos Agora</div></KpiCard.Footer>
        </KpiCard>

        <KpiCard color='red'>
          <KpiCard.Header>
            <CardTitle className='pb-0 text-md'>ALERTAS DE SAÚDE</CardTitle>
            <AlertTriangle className='text-red-500'></AlertTriangle>
          </KpiCard.Header>
          <KpiCard.Content>
            <div className='font-light text-2xl'>3 Alertas</div>
            <div className='bg-emerald-50 h-40 rounded-lg mt-2'></div>
          </KpiCard.Content>
          <KpiCard.Footer><div>Cachorros sem vacina</div></KpiCard.Footer>
        </KpiCard>

        <KpiCard color='blue'>
          <KpiCard.Header>
            <CardTitle className='pb-0 text-md'>PRÓXIMOS CHECK-INS</CardTitle>
            <CalendarClock className='text-cyan-500'/>
          </KpiCard.Header>
          <KpiCard.Content>
            <div className='font-light text-2xl'>5 Pets</div>
            <div className='bg-emerald-50 h-40 rounded-lg mt-2'></div>
          </KpiCard.Content>
          <KpiCard.Footer><div>Próximas 24 horas</div></KpiCard.Footer>
        </KpiCard>
      </div>
    </div>
    
  )
}

