import { useState } from "react";

// Local imports
import LocationSearch from "@components/LocationSearch";
import Map from "@components/Map";
import { Place } from "@/typings";

const App = () => {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <>
      <header className="h-screen w-screen grid grid-cols-12">
        <div className="col-span-3 p-2">
          <LocationSearch onPlaceClick={(p) => setPlace(p)} />
        </div>
        <div className="col-span-9">
          <Map place={place} />
        </div>
      </header>
    </>
  );
};

export default App;
