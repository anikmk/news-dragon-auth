import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    
    return (
        <div>
            <div className="flex justify-center items-center pt-14 pb-8 text-center">
                <div>
                <img  src={logo} alt="" />
                <p className="text-xl mb-2 mt-5 text-[#706F6F]">Journalism Without Fear or Favour</p>
                <p className="text-[20px]">{moment().format("dddd, MMMM Do, YYYY, h:mm:ss a")}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;