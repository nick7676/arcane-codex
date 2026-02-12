import { createFileRoute } from '@tanstack/react-router'
import useGetSpells from '@/libs/services/spell/getAllSpells/queries/useGetSpells'
import { SpellTableConfig } from '@/sections/authenticated/home/config/SpellTableConfig'
import SpellCard from '@/sections/authenticated/home/components/Cards/SpellCard'
import SpellTable from '@/sections/authenticated/home/components/Tables/SpellTable'

export const Route = createFileRoute('/_authenticated/')({
  component: HomePage,
})

function HomePage() {
  const { data, isPending } = useGetSpells()
  const table = SpellTableConfig(data)

  return (
    <div>
      <div className="flex p-10">
        <SpellTable table={table} isLoading={isPending} />
        <div className='flex ml-10'>
          <SpellCard />
        </div>
      </div>
    </div>
  )
}
