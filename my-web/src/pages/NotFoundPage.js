import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl">Oops! you have reached the end of this website</h1>
            <Link to="/" className="text-blue-500 mt-4">Back to Home page</Link>
        </div>
    );
}