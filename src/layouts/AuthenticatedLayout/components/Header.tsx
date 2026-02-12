import DropDownMenuHeader from "./DropDownMenu";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <div className="border-b border-stone-400 p-4 flex items-center">
            <SearchBar />
            <div className="ml-auto">
                <DropDownMenuHeader />
            </div>
        </div>
    );
}
