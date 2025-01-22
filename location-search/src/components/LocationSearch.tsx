import { Fragment, useState } from "react";

// Local imports
import type { Place } from "@/typings";
import { search } from "@/api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

function renderedPlaces(places: Place[], onPlaceClick: (place: Place) => void) {
  return places.map((place) => {
    return (
      <Fragment key={place.id}>
        <p className="text-sm">{place.name}</p>
        <button
          className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
          onClick={() => onPlaceClick(place)}
        >
          Go
        </button>
        <div className="border-b w-full col-span-2"></div>
      </Fragment>
    );
  });
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!term.trim()) {
      setError("Please enter a valid search term.");
      return;
    }

    try {
      const results = await search(term);
      setPlaces(results);
    } catch (err) {
      setError("Failed to fetch locations. Please try again later.");
    } finally {
      setTerm(""); // Reset search term
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="term" className="font-bold">
          Search
        </label>
        <input
          type="text"
          placeholder="Location"
          id="term"
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <h1 className="font-bold mt-6">Found Locations</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {renderedPlaces(places, onPlaceClick)}
      </div>
    </div>
  );
}
