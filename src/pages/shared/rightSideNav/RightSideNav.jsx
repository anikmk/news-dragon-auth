import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    
    return (
        <div className="border">
            <div className="mb-5 p-4">
            <h2 className="text-xl font-bold mb-4">Login With</h2>
            <div>
                
                <button className="btn btn-outline btn-primary uppercase w-full mb-2"><FaGoogle></FaGoogle>Login with google</button>
                <button className="btn btn-outline w-full"> <FaGithub></FaGithub> login with GitHub</button>
            </div>
            </div>

            {/* find us on */}
            <div className="mb-5 p-4">
            <h2 className="text-xl font-bold mb-4">Find Us On</h2>
            <div>

                    <a href="" className=" border rounded-t-lg flex items-center p-4">
                        <FaFacebook className="mr-2"></FaFacebook>
                        <span>Facebook</span>
                    </a>
                    <a href="" className="border-x-2 flex items-center p-4">
                        <FaTwitter className="mr-2"></FaTwitter>
                        <span>Twitter</span>
                    </a>
                    <a href="" className="border rounded-b-lg flex items-center p-4">
                        <FaInstagram className="mr-2"></FaInstagram>
                        <span>Facebook</span>
                    </a>
           
            </div>
            </div>

            {/* q zoon */}
            <div className="mb-5 p-4 bg-slate-200">
            <h2 className="text-xl font-bold mb-4">Q-Zoon</h2>
            <div className="space-y-12">
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            </div>

            {/* amazin news papper */}
            

        </div>
    );
};

export default RightSideNav;