import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/8bit/table"
import { Spinner } from "@/components/ui/8bit/spinner";
import SpellTableSkeleton from "./SpellTableSkeleton";
import type { Result } from "@/libs/services/spell/getAllSpells/spellList";
import { flexRender, type Table as SpellTableInstance } from "@tanstack/react-table";
import { TableCaption } from "@/components/ui/table";
import SpellTableNavigation from "./SpellTableNavitagion";
interface spellTableProps {
    table: SpellTableInstance<Result>
    isLoading?: boolean
}

const SKELETON_ROWS = 20;

export default function SpellTable({ table, isLoading }: spellTableProps) {
    const rows = table.getRowModel().rows;
    const colCount = table.getHeaderGroups()[0]?.headers.length ?? 2;
    return (
        <div className="w-full min-w-md max-w-xl">
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
                    {isLoading ? (
                        <SpellTableSkeleton skeletonRows={SKELETON_ROWS} colCount={colCount} />
                    ) : (
                        rows.map(row => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    )}
                </TableBody>
                <TableCaption>
                    {isLoading ? (
                        <div className="flex justify-center py-2">
                            <Spinner />
                        </div>
                    ) : (
                        <SpellTableNavigation table={table} />
                    )}
                </TableCaption>
            </Table>
        </div>
    );
}