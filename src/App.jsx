import { useState } from "react";
import useQuery from "./useQuery";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  const {
    data: guests,
    loading: guestsLoading,
    error: guestsError,
  } = useQuery("/guests");

  const {
    data: selectedGuest,
    loading: detailsLoading,
    error: detailsError,
  } = useQuery(selectedGuestId ? `/guests/${selectedGuestId}` : null);

  if (guestsLoading || (selectedGuestId && detailsLoading)) {
    return <p>Loading guest information...</p>;
  }

  if (guestsError) {
    return <p>Error loading guests: {guestsError}</p>;
  }
  if (selectedGuestId && detailsError) {
    return <p>Error loading guest details: {detailsError}</p>;
  }

  if (!guests) {
    return <p>No guests data available.</p>;
  }

  return (
    <div>
      <h1>Fullstack Convention Center Guests</h1>
      {selectedGuestId && selectedGuest ? (
        <div>
          <GuestDetails guest={selectedGuest} />
          <button onClick={() => setSelectedGuestId(null)}>
            Back to Guest List
          </button>
        </div>
      ) : (
        <GuestList guests={guests} onSelectGuest={setSelectedGuestId} />
      )}
    </div>
  );
}
