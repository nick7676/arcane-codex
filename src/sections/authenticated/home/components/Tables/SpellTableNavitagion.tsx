import { Button } from "@/components/ui/8bit/button";
import type { Result } from "@/libs/services/spell/getAllSpells/spellList";
import type { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SpellTableNavigationProps {
    table: Table<Result>
}

export default function SpellTableNavigation({ table }: SpellTableNavigationProps) {
    return (
        <div className="flex items-center justify-center gap-4">
            <Button onClick={() => table.previousPage()}>
                <ChevronLeft />
            </Button>
            <span className="whitespace-nowrap">
                {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
            </span>
            <Button onClick={() => table.nextPage()} disabled={table.getState().pagination.pageIndex === table.getPageCount() - 1}>
                <ChevronRight />
            </Button>
        </div>
    )
}
