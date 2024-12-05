import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Filter, X } from "lucide-react";
import DemographicFilter from "./filters/DemographicFilter";
import PlatformFilter from "./filters/PlatformFilter";
import PriceRangeFilter from "./filters/PriceRangeFilter";

interface FilterPanelProps {
  onAgeChange?: (ages: string[]) => void;
  onLocationChange?: (location: string) => void;
  onPlatformsChange?: (platforms: string[]) => void;
  onPriceChange?: (range: [number, number]) => void;
  selectedAges?: string[];
  selectedLocation?: string;
  selectedPlatforms?: string[];
  priceRange?: [number, number];
  isOpen?: boolean;
  onClose?: () => void;
}

const FilterPanel = ({
  onAgeChange = () => {},
  onLocationChange = () => {},
  onPlatformsChange = () => {},
  onPriceChange = () => {},
  selectedAges = ["18-24", "25-34"],
  selectedLocation = "United States",
  selectedPlatforms = ["instagram", "tiktok"],
  priceRange = [0, 10000],
  isOpen = true,
  onClose = () => {},
}: FilterPanelProps) => {
  return (
    <div
      className={`w-[280px] h-[800px] bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="lg:hidden"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-4 py-6">
        <div className="space-y-6">
          <DemographicFilter
            onAgeChange={onAgeChange}
            onLocationChange={onLocationChange}
            selectedAges={selectedAges}
            selectedLocation={selectedLocation}
          />
          <Separator className="my-6" />
          <PlatformFilter
            onPlatformsChange={onPlatformsChange}
            selectedPlatforms={selectedPlatforms}
          />
          <Separator className="my-6" />
          <PriceRangeFilter
            onPriceChange={onPriceChange}
            priceRange={priceRange}
          />
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Active Filters:</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm text-blue-600 hover:text-blue-700"
            onClick={() => {
              onAgeChange([]);
              onLocationChange("");
              onPlatformsChange([]);
              onPriceChange([0, 10000]);
            }}
          >
            Clear All
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {selectedAges.length > 0 && (
            <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
              {selectedAges.length} Age Groups
            </div>
          )}
          {selectedLocation && (
            <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
              {selectedLocation}
            </div>
          )}
          {selectedPlatforms.length > 0 && (
            <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
              {selectedPlatforms.length} Platforms
            </div>
          )}
          {(priceRange[0] > 0 || priceRange[1] < 10000) && (
            <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
              ${priceRange[0].toLocaleString()} - $
              {priceRange[1].toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
