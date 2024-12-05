import { useState } from "react";
import SearchBar from "./marketplace/SearchBar";
import FilterPanel from "./marketplace/FilterPanel";
import InfluencerGrid from "./marketplace/InfluencerGrid";
import InfluencerProfile from "./marketplace/InfluencerProfile";
import ContactModal from "./marketplace/ContactModal";

interface HomeProps {
  onSearch?: (query: string) => void;
  loading?: boolean;
}

const Home = ({ onSearch = () => {}, loading = false }: HomeProps) => {
  const [showFilters, setShowFilters] = useState(true);
  const [selectedInfluencer, setSelectedInfluencer] = useState<string | null>(
    null,
  );
  const [showContactModal, setShowContactModal] = useState(false);
  const [filters, setFilters] = useState({
    ages: ["18-24", "25-34"],
    location: "United States",
    platforms: ["instagram", "tiktok"],
    priceRange: [0, 10000] as [number, number],
  });

  const handleContactInfluencer = (id: string) => {
    setSelectedInfluencer(id);
    setShowContactModal(true);
  };

  const handleBookmarkInfluencer = (id: string) => {
    // Implement bookmark logic
  };

  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col">
      {/* Search Bar */}
      <div className="w-full border-b border-gray-200 bg-white py-4 px-6">
        <SearchBar onSearch={onSearch} loading={loading} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Filter Panel */}
        <FilterPanel
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
          selectedAges={filters.ages}
          selectedLocation={filters.location}
          selectedPlatforms={filters.platforms}
          priceRange={filters.priceRange}
          onAgeChange={(ages) => setFilters({ ...filters, ages })}
          onLocationChange={(location) => setFilters({ ...filters, location })}
          onPlatformsChange={(platforms) =>
            setFilters({ ...filters, platforms })
          }
          onPriceChange={(priceRange) => setFilters({ ...filters, priceRange })}
        />

        {/* Influencer Grid */}
        <div className="flex-1 overflow-hidden">
          <InfluencerGrid
            loading={loading}
            onContactInfluencer={handleContactInfluencer}
            onBookmarkInfluencer={handleBookmarkInfluencer}
          />
        </div>
      </div>

      {/* Modals */}
      {selectedInfluencer && (
        <InfluencerProfile
          open={!!selectedInfluencer}
          onClose={() => setSelectedInfluencer(null)}
          onContact={() => setShowContactModal(true)}
        />
      )}

      <ContactModal
        open={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </div>
  );
};

export default Home;
