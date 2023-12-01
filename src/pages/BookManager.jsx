import ManagerForm from "../Components/ManagerForm";
import "../assets/style/bookManager.css";

const BookManager = () => {
  return (
    <div>
       <div>
        <ManagerForm />
      </div>
      <div className="warning">
        <p>Debes ser administrador para ver esta sección.</p>
      </div>
    </div>
  );
};

export default BookManager;
