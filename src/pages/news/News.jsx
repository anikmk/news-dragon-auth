import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";


const News = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2>more details for news</h2>
            <div className="grid md:grid-cols-4">
                <div className="grid md:col-span-3">
                    <h1>test</h1>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;