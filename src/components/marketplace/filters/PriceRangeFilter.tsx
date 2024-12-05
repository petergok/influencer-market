import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface PriceRangeFilterProps {
  onPriceChange?: (range: [number, number]) => void;
  priceRange?: [number, number];
  min?: number;
  max?: number;
}

const PriceRangeFilter = ({
  onPriceChange = () => {},
  priceRange = [0, 10000],
  min = 0,
  max = 10000,
}: PriceRangeFilterProps) => {
  const handleValueChange = (value: number[]) => {
    onPriceChange([value[0], value[1]]);
  };

  return (
    <Card className="w-[240px] bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Price Range</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-sm text-gray-600">
              ${priceRange[0].toLocaleString()}
            </Label>
            <Label className="text-sm text-gray-600">
              ${priceRange[1].toLocaleString()}
            </Label>
          </div>
          <Slider
            defaultValue={priceRange}
            max={max}
            min={min}
            step={100}
            value={priceRange}
            onValueChange={handleValueChange}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceRangeFilter;
