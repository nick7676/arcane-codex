import { useSpellSelection } from "@/context/SpellsSelectionContext";
import type { Result } from "@/libs/services/spell/getAllSpells/spellList";
import {
    useReactTable,
    getCoreRowModel,
    type ColumnDef,
    getPaginationRowModel,
} from "@tanstack/react-table";
import { useTranslation } from "react-i18next";

export function SpellTableConfig(data: Result[] | undefined) {

    const { setSelectedSpellIndex } = useSpellSelection();

    const { t } = useTranslation("table")

    const columns: ColumnDef<Result>[] = [
        {
            accessorKey: "name",
            header: t('name'),
            cell: ({ getValue, row }) => (
                <button
                    type="button"
                    className="text-left hover:underline cursor-pointer"
                    onClick={() => setSelectedSpellIndex(row.original.url)}
                >
                    {getValue() as string}
                </button>
            ),
        },
        {
            accessorKey: "level",
            header: () => <div className="text-right">{t('level')}</div>,
            cell: ({ getValue }) => <div className="text-right">{getValue() as string}</div>,
            size: 80,
        }
    ]

    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 20,
                pageIndex: 0
            }
        }
    })

    return table
}
