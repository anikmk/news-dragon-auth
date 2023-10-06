import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import MiddleNews from "../shared/middleNews/MiddleNews";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    const newses = useLoaderData()
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="border">
                <LeftSideNav></LeftSideNav>
                </div>
                <div className="border md:col-span-2">
                {
                    newses.map(news=><MiddleNews
                         key={news._id}
                         news={news}
                         ></MiddleNews>)
                }
                </div>
                <div className="">
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;