import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NotFound = ({
  title = "404",
  message = "Page Not Found",
  description = "The page you are looking for does not exist.",
  redirectTo = "/",
}) => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <button
        className="back-btn"
        type="button"
        onClick={() => navigate(redirectTo)}
        aria-label="Go home"
      >
        <IoChevronBackOutline />
      </button>

      <h1>{title}</h1>
      <h3>{message}</h3>
      <p>{description}</p>
    </div>
  );
};

export default NotFound;