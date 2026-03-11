import Header from "../../include/Header";
import AddComponent from "../../components/todo/AddComponent";
import "./AddPage.css";

const AddPage = () => {
  return (
    <div className="list-page-container">
      <Header />
      <main className="list-content-area">
        <div className="list-wrapper">
          <AddComponent />
        </div>
      </main>
    </div>
  );
};
export default AddPage;
