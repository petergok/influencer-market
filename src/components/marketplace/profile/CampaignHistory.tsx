import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CampaignHistoryProps {
  campaigns?: Array<{
    id: string;
    name: string;
    date: string;
    platform: string;
    engagement: {
      rate: number;
      change: number;
    };
    reach: number;
    revenue: number;
  }>;
}

const CampaignHistory = ({
  campaigns = [
    {
      id: "1",
      name: "Summer Collection Launch",
      date: "2024-03-15",
      platform: "Instagram",
      engagement: { rate: 5.2, change: 0.8 },
      reach: 250000,
      revenue: 12500,
    },
    {
      id: "2",
      name: "Wellness Product Review",
      date: "2024-02-28",
      platform: "YouTube",
      engagement: { rate: 4.8, change: -0.3 },
      reach: 180000,
      revenue: 8900,
    },
    {
      id: "3",
      name: "Travel Vlog Series",
      date: "2024-02-10",
      platform: "TikTok",
      engagement: { rate: 6.1, change: 1.2 },
      reach: 320000,
      revenue: 15600,
    },
  ],
}: CampaignHistoryProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card className="w-[760px] bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Campaign History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Engagement</TableHead>
              <TableHead>Reach</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>{formatDate(campaign.date)}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="capitalize">
                    {campaign.platform}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{campaign.engagement.rate}%</span>
                    <div
                      className={`flex items-center ${campaign.engagement.change >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {campaign.engagement.change >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="text-xs">
                        {Math.abs(campaign.engagement.change)}%
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{formatNumber(campaign.reach)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    {formatNumber(campaign.revenue)}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CampaignHistory;
