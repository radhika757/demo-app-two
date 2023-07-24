import { Link } from "react-router-dom";

const dummy_events = [
  {
    id: "e1",
    name: "party",
    decscription: "Party all night",
  },
  {
    id: "e2",
    name: "baby shower",
    decscription: "2 Baby showers",
  },
  {
    id: "e3",
    name: "Farewell",
    decscription: "Farewell for 10th std",
  },
];
const Events = () => {
  return (
    <div>
      <h2>Events page </h2>
      <ul>
        {dummy_events.map((eve) => (
          <li key={eve.id}>
            {/* {eve.name} - {eve.decscription} */}
            <Link to={`/events/${eve.id}`}>{eve.name} : {eve.decscription}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
