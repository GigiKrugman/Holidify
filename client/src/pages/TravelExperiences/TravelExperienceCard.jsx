export default function TravelExperienceCard({ experience }) {
  return (
    <div>
      <img className="" src={experience.images[0]} />
      <h3>{experience.name}</h3>
      <p>{experience.location}</p>
      <p>{experience.price}</p>
    </div>
  );
}
