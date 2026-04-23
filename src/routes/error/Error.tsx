import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export default function Error() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <>
          <div>
            <h2>Seems like the address you are accessing doesn't exist :(</h2>
            <Link to="/">Go to Home</Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <h2>
              Unexpected error is thrown: {error.status} {error.statusText}
            </h2>
            <Link to="/">Go to Home</Link>
          </div>
        </>
      );
    }
  }

  return (
    <>
      Oops!
      <Link to="/">Go to Home</Link>
    </>
  );
}
