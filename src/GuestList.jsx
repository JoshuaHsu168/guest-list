import GuestCard from "./GuestCard";

export default function GuestList({ guests, onSelectGuest }) {
  return (
    <section>
      <h2>Attendees</h2>
      {guests.map((guest) => (
        <GuestCard key={guest.id} guest={guest} onSelectGuest={onSelectGuest} />
      ))}
    </section>
  );
}
