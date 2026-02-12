import { useMemo } from "react";
import type { Spell } from "@/libs/services/spell/getSpell/spell";
import { getCoreRowModel, getPaginationRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";

export interface SpellDamageRow {
    level: string;
    dice: string;
}

const columns: ColumnDef<SpellDamageRow>[] = [
    {
        accessorKey: "level",
        header: "level",
    },
    {
        accessorKey: "dice",
        header: "dice"
    }
]

export function SpellDamageTableConfig(data: Spell | undefined) {

    const slotLevel = data?.damage?.damage_at_slot_level
    const rows = useMemo<SpellDamageRow[]>(() => slotLevel
        ? Object.entries(slotLevel).map(([level, dice]) => ({ level, dice }))
        : [], [slotLevel])

    const table = useReactTable({
        data: rows,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return table

}