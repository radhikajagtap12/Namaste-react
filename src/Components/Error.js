import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err); // This will log null if no error is thrown

    // Check if `err` is null or undefined before accessing its properties
    if (!err) {
        return (
            <div>
                <h1>Error</h1>
                <p>Something went wrong, but we couldn't retrieve the error details.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Error {err.status || 500}</h1>
            <p>{err.statusText || "An unexpected error occurred"}</p>
        </div>
    );
};

export default Error;
