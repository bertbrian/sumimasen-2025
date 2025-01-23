function TestiCard({ description, name, rate }) {
  return (
    <div>
      <b>{description}</b>
      <p>{name}</p>
      <p>{rate} stars</p>
    </div>
  );
}

export default TestiCard;
