import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface PlatformFilterProps {
  onPlatformsChange?: (platforms: string[]) => void;
  selectedPlatforms?: string[];
}

const PlatformFilter = ({
  onPlatformsChange = () => {},
  selectedPlatforms = ["instagram", "tiktok"],
}: PlatformFilterProps) => {
  const platforms = [
    { id: "instagram", label: "Instagram" },
    { id: "tiktok", label: "TikTok" },
    { id: "youtube", label: "YouTube" },
    { id: "twitter", label: "Twitter" },
    { id: "twitch", label: "Twitch" },
  ];

  return (
    <Card className="w-[240px] bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Platforms</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Label className="text-sm font-medium">Social Networks</Label>
          <div className="grid gap-2">
            {platforms.map((platform) => (
              <div key={platform.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`platform-${platform.id}`}
                  checked={selectedPlatforms.includes(platform.id)}
                  onCheckedChange={(checked) => {
                    const newPlatforms = checked
                      ? [...selectedPlatforms, platform.id]
                      : selectedPlatforms.filter((p) => p !== platform.id);
                    onPlatformsChange(newPlatforms);
                  }}
                />
                <label
                  htmlFor={`platform-${platform.id}`}
                  className="text-sm text-gray-600"
                >
                  {platform.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformFilter;
