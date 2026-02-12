import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/8bit/card"
import { Separator } from "@/components/ui/8bit/separator"
import type { Spell } from "@/libs/services/spell/getSpell/spell"
import SpellInfoTable from "../Tables/SpellInfoTable"
import SpellInfoTableConfig from "../../config/SpellInfoTableConfig"
import ReactMarkdown from "react-markdown"

interface SpellInfoCardProps {
    data?: Spell | undefined
}

export default function SpellInfoCard({ data }: SpellInfoCardProps) {

    const table = SpellInfoTableConfig(data)

    if (!data || !data.index) {
        return null
    }

    const descText = Array.isArray(data.desc) ? data.desc.join("\n\n") : data.desc ?? ""
    const higherLevelText = Array.isArray(data.higher_level) ? data.higher_level.join("\n\n") : data.higher_level ?? ""

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{data.name}</CardTitle>
                    <ReactMarkdown>{descText}</ReactMarkdown>
                    {higherLevelText && (
                        <>
                            <Separator />
                            <ReactMarkdown>{higherLevelText}</ReactMarkdown>
                        </>
                    )}
                </CardHeader>
                <CardContent>
                    <Separator className="my-2" />
                    <SpellInfoTable table={table} />
                </CardContent>
            </Card>
        </div>
    )
}