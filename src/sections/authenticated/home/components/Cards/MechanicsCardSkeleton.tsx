import { Card, CardContent } from "@/components/ui/8bit/card"
import { Skeleton } from "@/components/ui/8bit/skeleton"

interface MechanicsCardSkeletonProps {
    isloading: boolean | undefined
}

export default function MechanicsCardSkeleton({ isloading }: MechanicsCardSkeletonProps) {
    if (isloading) {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Skeleton className="h-[800px] w-full" />
                    </CardContent>
                </Card>
            </div>
        )
    }
}