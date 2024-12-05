import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface DemographicFilterProps {
  onAgeChange?: (ages: string[]) => void;
  onLocationChange?: (location: string) => void;
  selectedAges?: string[];
  selectedLocation?: string;
}

const DemographicFilter = ({
  onAgeChange = () => {},
  onLocationChange = () => {},
  selectedAges = ["18-24", "25-34"],
  selectedLocation = "United States",
}: DemographicFilterProps) => {
  const ageRanges = [
    { id: "13-17", label: "13-17" },
    { id: "18-24", label: "18-24" },
    { id: "25-34", label: "25-34" },
    { id: "35-44", label: "35-44" },
    { id: "45+", label: "45+" },
  ];

  const locations = [
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
    { value: "Global", label: "Global" },
  ];

  return (
    <Card className="w-[240px] bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Demographics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label className="text-sm font-medium">Age Range</Label>
          <div className="grid gap-2">
            {ageRanges.map((age) => (
              <div key={age.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`age-${age.id}`}
                  checked={selectedAges.includes(age.id)}
                  onCheckedChange={(checked) => {
                    const newAges = checked
                      ? [...selectedAges, age.id]
                      : selectedAges.filter((a) => a !== age.id);
                    onAgeChange(newAges);
                  }}
                />
                <label
                  htmlFor={`age-${age.id}`}
                  className="text-sm text-gray-600"
                >
                  {age.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-medium">Location</Label>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemographicFilter;
