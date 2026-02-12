import { TableCell, TableRow } from "@/components/ui/8bit/table"
import { Skeleton } from "@/components/ui/skeleton"

interface SpellTableSkeletonProps {
    skeletonRows: number
    colCount: number
}

export default function SpellTableSkeleton({ skeletonRows, colCount }: SpellTableSkeletonProps) {
    return (
        <>
            {Array.from({ length: skeletonRows }).map((_, i) => (
                <TableRow key={`skeleton-${i}`}>
                    {Array.from({ length: colCount }).map((_, j) => (
                        <TableCell key={j}>
                            <Skeleton className="h-5 w-full" />
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    )
}
