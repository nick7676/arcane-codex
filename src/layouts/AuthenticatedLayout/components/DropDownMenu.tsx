import { Button } from "@/components/ui/8bit/button";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

export default function DropDownMenuHeader() {
    return (
        <div>
            <Button variant={"ghost"}>
                <Avatar>
                    <AvatarImage src="avatar.png" />
                </Avatar>
            </Button>
        </div>
    );
}