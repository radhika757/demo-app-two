// Challenge / Exercise

// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditEvent from "./pages/EditEvent";
import NewEvent from "./pages/NewEvent";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div>
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/events"
            element={<Events />}
            loader={async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                setError("Fetching events failed.");
              } else {
                const resData = await response.json();
                setFetchedEvents(resData.events);
              }
            }}
          />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/events/new" element={<NewEvent />} />
          <Route path="/events/:id/edit" element={<EditEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
