import { useMemo } from "react";
import type { Spell } from "@/libs/services/spell/getSpell/spell";
import { getCoreRowModel, getPaginationRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import { Popover, PopoverTrigger } from "@/components/ui/8bit/popover";
import { PopoverContent } from "@/components/ui/popover";
import { useTranslation } from "react-i18next";
import { SquareArrowOutUpRight } from "lucide-react";

export interface SpellInfoRow {
    ritual: string;
    materials: string;
    school: string;
    classes: string;
}

export default function SpellInfoTableConfig(data: Spell | undefined) {

    const { t } = useTranslation("card")

    const columns = useMemo<ColumnDef<SpellInfoRow>[]>(() => [
        {
            accessorKey: "ritual",
            header: "ritual",
        },
        {
            accessorKey: "materials",
            header: "materials",
            cell: ({ row }) => {
                const value = row.getValue("materials") as string;
                if (!value) return null;
                return (
                    <Popover>
                        <PopoverTrigger>{t('info.materialList')}<SquareArrowOutUpRight /></PopoverTrigger>
                        <PopoverContent>
                            {value}
                        </PopoverContent>
                    </Popover>
                );
            },
        },
        {
            accessorKey: "school",
            header: "school",
            cell: ({ row }) => {
                const value = row.getValue("school") as string;
                if (!value) return null;
                return (
                    <Popover>
                        <PopoverTrigger>{t('info.schools')}<SquareArrowOutUpRight /></PopoverTrigger>
                        <PopoverContent>
                            {value}
                        </PopoverContent>
                    </Popover>
                );
            },
        },
        {
            accessorKey: "classes",
            header: "classes",
        },
    ], [t]);

    const tableData = useMemo(() => [{
        ritual: data?.ritual ? t('info.yes') : t('info.no'),
        materials: data?.material ?? "",
        school: data?.school?.name ?? "",
        classes: Array.isArray(data?.classes) ? data.classes.map(cls => cls.name).join(", ") : "",
    }], [data?.ritual, data?.material, data?.school?.name, data?.classes, t]);

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return table;

}