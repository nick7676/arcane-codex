import { Card, CardContent } from "@/components/ui/card";
import type { Spell } from "@/libs/services/spell/getSpell/spell";
import SpellDamageTable from "../Tables/SpellDamageTable";
import { SpellDamageTableConfig } from "../../config/SpellDamageTableConfig";
import MechanicsCardSkeleton from "./MechanicsCardSkeleton";

interface SpellMechanicsCardProps {
    data?: Spell | undefined;
    isLoading?: boolean;
}

export default function SpellMechanicsCard({ data, isLoading }: SpellMechanicsCardProps) {

    const table = SpellDamageTableConfig(data)

    if (isLoading) {
        return <MechanicsCardSkeleton isloading={isLoading} />
    }

    if (!data || !data.damage || !data.damage.damage_at_slot_level) {
        return null
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <SpellDamageTable table={table} />
                </CardContent>
            </Card>
        </div>
    )
}