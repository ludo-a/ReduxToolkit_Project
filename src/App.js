import PhoneView from "./app/features/phones/PhoneView";
import TvView from "./app/features/tvs/TvViews";
import AdminView from "./app/features/admin/AdminView";
import CommentsView from "./app/features/comments/CommentsView";

function App() {
  return (
    <>
      <div className="section-one">
        <PhoneView />
        <TvView />
      </div>
      <AdminView />
      <hr></hr>
      <CommentsView />
    </>
  );
}

export default App;
