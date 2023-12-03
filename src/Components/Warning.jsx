import "../assets/style/bookManager.css";

const Warning = ({ rol }) => {
  return (
    <div className="warning">
      <p>Debes ser {rol} para ver esta sección.</p>
    </div>
  );
};

export default Warning;
