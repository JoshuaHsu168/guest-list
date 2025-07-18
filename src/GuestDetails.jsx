export default function GuestDetails({ guest }) {
  if (!guest) {
    return <p>No guest selected.</p>;
  }

  return (
    <section className="guest-details">
      <h2>{guest.name}</h2>
      <p>
        <strong>Email:</strong> {guest.email}
      </p>
      <p>
        <strong>Phone:</strong> {guest.phone}
      </p>
      <p>
        <strong>Job:</strong> {guest.job}
      </p>
      <p>
        <strong>Bio:</strong> {guest.bio}
      </p>
    </section>
  );
}
