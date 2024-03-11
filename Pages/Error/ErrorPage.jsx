import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <main className="container-fluid d-flex align-items-center justify-content-center bg-light vh-100">
        <div className="text-center">
          <p className="h1 text-base font-weight-bold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-weight-bold text-dark">
            Page not found
          </h1>
          <p className="mt-6 text-base text-dark">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 d-flex align-items-center justify-content-center gap-3">
            <Link to="/home" className="btn btn-primary mt-3">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
export default ErrorPage;
