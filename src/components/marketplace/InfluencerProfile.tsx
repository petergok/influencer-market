import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Share2, X } from "lucide-react";
import AudienceMetrics from "./profile/AudienceMetrics";
import CampaignHistory from "./profile/CampaignHistory";

interface InfluencerProfileProps {
  open?: boolean;
  onClose?: () => void;
  onContact?: () => void;
  onBookmark?: () => void;
  onShare?: () => void;
  influencer?: {
    name: string;
    avatar: string;
    bio: string;
    followers: number;
    engagementRate: number;
    categories: string[];
    platforms: string[];
    priceRange: [number, number];
    isBookmarked: boolean;
    demographics: {
      ageGroups: Array<{ age: string; percentage: number }>;
      locations: Array<{ country: string; percentage: number }>;
      engagement: {
        rate: number;
        trend: number;
      };
    };
    campaigns: Array<{
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
  };
}

const InfluencerProfile = ({
  open = true,
  onClose = () => {},
  onContact = () => {},
  onBookmark = () => {},
  onShare = () => {},
  influencer = {
    name: "Sarah Johnson",
    avatar: "https://dummyimage.com/200x200/e6e6e6/666666&text=SJ",
    bio: "Lifestyle and fashion content creator passionate about sustainable living and mindful consumption.",
    followers: 125000,
    engagementRate: 4.8,
    categories: ["Fashion", "Lifestyle", "Sustainability"],
    platforms: ["instagram", "tiktok", "youtube"],
    priceRange: [1000, 5000],
    isBookmarked: false,
    demographics: {
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
    campaigns: [
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
  },
}: InfluencerProfileProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] p-0 bg-white">
        <div className="relative p-6 border-b border-gray-200">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex items-start gap-6">
            <img
              src={influencer.avatar}
              alt={influencer.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {influencer.name}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    {influencer.platforms.map((platform) => (
                      <Badge
                        key={platform}
                        variant="secondary"
                        className="text-xs capitalize"
                      >
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onShare}
                    className="text-gray-500"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onBookmark}
                    className={`${influencer.isBookmarked ? "text-red-500" : "text-gray-500"}`}
                  >
                    <Heart
                      className="h-5 w-5"
                      fill={influencer.isBookmarked ? "currentColor" : "none"}
                    />
                  </Button>
                  <Button onClick={onContact} className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{influencer.bio}</p>

              <div className="mt-6 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Followers</p>
                  <p className="text-lg font-semibold">
                    {formatNumber(influencer.followers)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Engagement Rate</p>
                  <p className="text-lg font-semibold">
                    {influencer.engagementRate}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price Range</p>
                  <p className="text-lg font-semibold">
                    ${influencer.priceRange[0].toLocaleString()} - $
                    {influencer.priceRange[1].toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="audience" className="p-6">
          <TabsList className="mb-6">
            <TabsTrigger value="audience">Audience Insights</TabsTrigger>
            <TabsTrigger value="campaigns">Campaign History</TabsTrigger>
          </TabsList>
          <TabsContent value="audience">
            <AudienceMetrics demographics={influencer.demographics} />
          </TabsContent>
          <TabsContent value="campaigns">
            <CampaignHistory campaigns={influencer.campaigns} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default InfluencerProfile;
