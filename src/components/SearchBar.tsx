'use client'

import { Search, MapPin, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    console.log(`Searching for: ${searchQuery}`);
    
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
      console.log(`Search completed for: ${searchQuery}`);
    }, 2000);
  };

  const handleLocationSearch = () => {
    console.log("Finding nearby locations...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location found:", position.coords);
      },
      (error) => {
        console.log("Location access denied");
      }
    );
  };

  return (
    <div className="relative mb-8 animate-fade-in w-full overflow-x-hidden">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <div className="relative flex-1 min-w-0">
          <Search 
            size={20} 
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ${
              isSearching ? 'animate-spin text-green-500' : ''
            }`} 
          />
          <Input
            type="text"
            placeholder="Search locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-12 pr-4 py-4 sm:pl-16 sm:pr-5 sm:py-6 text-base sm:text-xl border-gray-200 rounded-3xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:shadow-xl focus:shadow-2xl"
          />
          <Button
            onClick={handleSearch}
            disabled={isSearching}
            className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-2xl px-3 sm:px-7 py-2 sm:py-3 text-sm sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </div>
        
        <div className="flex gap-2 sm:gap-3">
          <Button
            onClick={handleLocationSearch}
            variant="outline"
            className="px-3 sm:px-5 py-4 sm:py-5 rounded-2xl border-gray-200 hover:border-green-500 hover:text-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <MapPin size={20} className="sm:w-7 sm:h-7" />
          </Button>
          
          <Button
            variant="outline"
            className="px-3 sm:px-5 py-4 sm:py-5 rounded-2xl border-gray-200 hover:border-green-500 hover:text-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Filter size={20} className="sm:w-7 sm:h-7" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

