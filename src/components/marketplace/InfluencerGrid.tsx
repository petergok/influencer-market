import { ScrollArea } from "@/components/ui/scroll-area";
import InfluencerCard from "./InfluencerCard";

interface InfluencerGridProps {
  influencers?: Array<{
    id: string;
    name: string;
    avatar: string;
    followers: number;
    engagementRate: number;
    categories: string[];
    platforms: string[];
    priceRange: [number, number];
    isBookmarked: boolean;
  }>;
  onContactInfluencer?: (id: string) => void;
  onBookmarkInfluencer?: (id: string) => void;
  loading?: boolean;
}

const InfluencerGrid = ({
  influencers = [
    {
      id: "1",
      name: "Sarah Johnson",
      avatar: "https://dummyimage.com/150x150/e6e6e6/666666&text=SJ",
      followers: 125000,
      engagementRate: 4.8,
      categories: ["Fashion", "Lifestyle", "Travel"],
      platforms: ["instagram", "tiktok"],
      priceRange: [1000, 5000],
      isBookmarked: false,
    },
    {
      id: "2",
      name: "Mike Chen",
      avatar: "https://dummyimage.com/150x150/e6e6e6/666666&text=MC",
      followers: 250000,
      engagementRate: 5.2,
      categories: ["Tech", "Gaming", "Education"],
      platforms: ["youtube", "twitch"],
      priceRange: [2000, 8000],
      isBookmarked: true,
    },
    {
      id: "3",
      name: "Emma Davis",
      avatar: "https://dummyimage.com/150x150/e6e6e6/666666&text=ED",
      followers: 75000,
      engagementRate: 6.1,
      categories: ["Beauty", "Wellness", "Fitness"],
      platforms: ["instagram", "youtube"],
      priceRange: [800, 3000],
      isBookmarked: false,
    },
  ],
  onContactInfluencer = () => {},
  onBookmarkInfluencer = () => {},
  loading = false,
}: InfluencerGridProps) => {
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <ScrollArea className="w-full h-full bg-white px-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {influencers.map((influencer) => (
          <InfluencerCard
            key={influencer.id}
            name={influencer.name}
            avatar={influencer.avatar}
            followers={influencer.followers}
            engagementRate={influencer.engagementRate}
            categories={influencer.categories}
            platforms={influencer.platforms}
            priceRange={influencer.priceRange}
            isBookmarked={influencer.isBookmarked}
            onContact={() => onContactInfluencer(influencer.id)}
            onBookmark={() => onBookmarkInfluencer(influencer.id)}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default InfluencerGrid;
