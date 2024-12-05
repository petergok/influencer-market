import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  loading?: boolean;
}

const SearchBar = ({
  onSearch = () => {},
  placeholder = "Search for influencers...",
  loading = false,
}: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = (form.elements.namedItem("search") as HTMLInputElement).value;
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1200px] bg-white rounded-lg shadow-sm border border-gray-200 flex items-center gap-2 p-2"
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          name="search"
          className="w-full pl-10 pr-4 py-2 text-sm bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder={placeholder}
          type="text"
        />
      </div>
      <Button type="submit" className="px-6" disabled={loading}>
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span>Searching...</span>
          </div>
        ) : (
          "Search"
        )}
      </Button>
    </form>
  );
};

export default SearchBar;
