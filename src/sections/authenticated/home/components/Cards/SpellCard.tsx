import { Tabs, TabsList } from "@/components/ui/8bit/tabs"
import { TabsContent, TabsTrigger } from "@/components/ui/tabs"
import { useSpellSelection } from "@/context/SpellsSelectionContext"
import useGetSpell from "@/libs/services/spell/getSpell/queries/useGetSpell"
import SpellInfoCard from "./SpellInfoCard"
import { useTranslation } from "react-i18next"
import SpellMechanicsCard from "./SpellMechanicsCard"

export default function SpellCard() {

    const { selectedSpellIndex: selectedSpellUrl } = useSpellSelection()
    const { data, isPending } = useGetSpell(selectedSpellUrl ?? "")
    const { t } = useTranslation("card")

    return (
        <div className="w-[1100px]">
            <Tabs defaultValue="info">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="info">{t('info.title')}</TabsTrigger>
                    <TabsTrigger value="mechanics">{t('mechanics.title')}</TabsTrigger>
                </TabsList>
                <TabsContent value="info">
                    <SpellInfoCard data={data} />
                </TabsContent>
                <TabsContent value="mechanics">
                    <SpellMechanicsCard key={selectedSpellUrl ?? ""} data={data} isLoading={isPending} />
                </TabsContent>

            </Tabs>
        </div>
    )
}