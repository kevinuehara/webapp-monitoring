import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-screen h-16 bg-indigo-700 rounded-sm">
      <div className="flex h-full items-center text-white justify-between">
        <h1 className="ml-2">Application Monitoring</h1>
        <ul className="flex text-sm mr-5">
          <li className="cursor-pointer pr-3 hover:text-indigo-100">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-indigo-100">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
