import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/8bit/table"
import type { SpellDamageRow } from "../../config/SpellDamageTableConfig"
import { flexRender, type Table as SpellDamageTableIstance } from "@tanstack/react-table";

interface spellDamageTableprops {
    table: SpellDamageTableIstance<SpellDamageRow>
}

export default function SpellDamageTable({ table }: spellDamageTableprops) {
    return (
        <div>
            <Table fullWidth className="table-fixed w-full">
                <TableHeader>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableHead key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="min-h-[800px]">
                    {table.getRowModel().rows.map(row => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}