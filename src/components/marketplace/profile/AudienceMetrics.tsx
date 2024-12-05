import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Globe2, TrendingUp } from "lucide-react";

interface AudienceMetricsProps {
  demographics?: {
    ageGroups: Array<{ age: string; percentage: number }>;
    locations: Array<{ country: string; percentage: number }>;
    engagement: {
      rate: number;
      trend: number;
    };
  };
}

const AudienceMetrics = ({
  demographics = {
    ageGroups: [
      { age: "18-24", percentage: 35 },
      { age: "25-34", percentage: 45 },
      { age: "35-44", percentage: 15 },
      { age: "45+", percentage: 5 },
    ],
    locations: [
      { country: "United States", percentage: 60 },
      { country: "United Kingdom", percentage: 20 },
      { country: "Canada", percentage: 15 },
      { country: "Other", percentage: 5 },
    ],
    engagement: {
      rate: 4.8,
      trend: 0.5,
    },
  },
}: AudienceMetricsProps) => {
  return (
    <Card className="w-[760px] bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Audience Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-6">
        {/* Age Demographics */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-500" />
            <h3 className="font-medium">Age Distribution</h3>
          </div>
          <div className="space-y-3">
            {demographics.ageGroups.map((group) => (
              <div key={group.age} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{group.age}</span>
                  <span className="font-medium">{group.percentage}%</span>
                </div>
                <Progress value={group.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe2 className="h-5 w-5 text-gray-500" />
            <h3 className="font-medium">Geographic Distribution</h3>
          </div>
          <div className="space-y-3">
            {demographics.locations.map((location) => (
              <div key={location.country} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{location.country}</span>
                  <span className="font-medium">{location.percentage}%</span>
                </div>
                <Progress value={location.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-gray-500" />
            <h3 className="font-medium">Engagement Metrics</h3>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-600">Average Engagement Rate</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  {demographics.engagement.rate}%
                </span>
                <span
                  className={`text-sm ${demographics.engagement.trend >= 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {demographics.engagement.trend >= 0 ? "+" : ""}
                  {demographics.engagement.trend}%
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-500">vs. last 30 days</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudienceMetrics;
