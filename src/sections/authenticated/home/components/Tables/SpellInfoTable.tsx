
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/8bit/table";
import type { SpellInfoRow } from "../../config/SpellInfoTableConfig";
import { flexRender, type Table as SpellInfoTableInstance } from "@tanstack/react-table";

interface SpellInfoTableProps {
    table: SpellInfoTableInstance<SpellInfoRow>;
}

export default function SpellInfoTable({ table }: SpellInfoTableProps) {
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
                <TableBody className="min-h-[200px]">
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