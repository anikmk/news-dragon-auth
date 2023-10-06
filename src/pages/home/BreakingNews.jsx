import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    const btnStyle = {
        color: 'white',
        backgroundColor: '#D72050',
        padding: '9px 20px',
        fontSize: '20px',
        fontWeigth: 500
        
      };
    return (
        <div className="flex bg-[#F3F3F3] p-4">
           <button style={btnStyle}>Latest</button>
           <Marquee pauseOnHover={true} speed={100} className="text-black">
            <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
          </Marquee>
        </div>
    );
};

export default BreakingNews;