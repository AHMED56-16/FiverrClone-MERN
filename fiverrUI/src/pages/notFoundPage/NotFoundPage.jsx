import { useNavigate } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-icon">🔍</div>
        <h1 className="notfound-title">404 - Page Not Found</h1>
        <p className="notfound-text">
          Oops! Looks like the page you're looking for doesn't exist.
        </p>
        <button className="notfound-button" onClick={handleGoHome}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
