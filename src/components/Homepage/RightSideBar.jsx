import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSideBar = () => {
    return (
        <div className="col-span-3">
            <h4 className="text-xl text-gray-700 font-semibold mb-4">Login With</h4>
            {/* Google */}
            <div className='space-y-2 text-sm font-light'>
                <button className="btn bg-transparent w-full text-blue-500 border-blue-500">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn bg-transparent w-full text-gray-700 border-gray-700">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>

        </div>
    );
};

export default RightSideBar;