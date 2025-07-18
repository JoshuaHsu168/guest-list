export default function GuestCard({ guest, onSelectGuest }) {
  return (
    <article className="guest-card" onClick={() => onSelectGuest(guest.id)}>
      <h3>{guest.name}</h3>
      <p>Email: {guest.email}</p>
    </article>
  );
}
