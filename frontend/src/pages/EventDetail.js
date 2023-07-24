import { useParams } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  return (
    <div>
      <h2>EventDetail page </h2>
      <p>Event ID : {params.id}</p>
    </div>
  );
};

export default EventDetail;
