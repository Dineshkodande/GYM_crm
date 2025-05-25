import { useNavigate } from "react-router-dom";
import { ROUTE_LOGIN } from "../../constants/pathConstants";
import './page-not-found.css'
const PageNotFound = () => {
  const navigate = useNavigate();

  const navToLogin = () => {
    navigate(ROUTE_LOGIN);
  };

  return (
    <div className="page-not-found">
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
   
            </div>
            <div className="col-md-6 align-self-center">
              <h1>404</h1>
              <h2>UH OH! You're lost.</h2>
              <p>
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <button className="btn green" onClick={()=>{navToLogin()}}>HOME</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound;
