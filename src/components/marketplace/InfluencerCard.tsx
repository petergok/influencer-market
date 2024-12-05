import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, TrendingUp } from "lucide-react";

interface InfluencerCardProps {
  name?: string;
  avatar?: string;
  followers?: number;
  engagementRate?: number;
  categories?: string[];
  platforms?: string[];
  priceRange?: [number, number];
  onContact?: () => void;
  onBookmark?: () => void;
  isBookmarked?: boolean;
}

const InfluencerCard = ({
  name = "Sarah Johnson",
  avatar = "https://dummyimage.com/150x150/e6e6e6/666666&text=SJ",
  followers = 125000,
  engagementRate = 4.8,
  categories = ["Fashion", "Lifestyle", "Travel"],
  platforms = ["instagram", "tiktok"],
  priceRange = [1000, 5000],
  onContact = () => {},
  onBookmark = () => {},
  isBookmarked = false,
}: InfluencerCardProps) => {
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
    <Card className="w-[380px] h-[420px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt={name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              <div className="flex items-center gap-2 mt-1">
                {platforms.map((platform) => (
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
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onBookmark}
            className={`${isBookmarked ? "text-red-500" : "text-gray-500"}`}
          >
            <Heart
              className="h-5 w-5"
              fill={isBookmarked ? "currentColor" : "none"}
            />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Followers</p>
            <p className="text-lg font-semibold">{formatNumber(followers)}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <p className="text-sm text-gray-500">Engagement</p>
            </div>
            <p className="text-lg font-semibold">{engagementRate}%</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-500">Categories</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-500">Collaboration Price Range</p>
          <p className="text-lg font-semibold">
            ${priceRange[0].toLocaleString()} - $
            {priceRange[1].toLocaleString()}
          </p>
        </div>

        <Button onClick={onContact} className="w-full gap-2">
          <MessageCircle className="h-4 w-4" />
          Contact for Collaboration
        </Button>
      </CardContent>
    </Card>
  );
};

export default InfluencerCard;
