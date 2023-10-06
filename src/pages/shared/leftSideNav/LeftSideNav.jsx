import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [menuCategory,setMenuCategory] = useState([]);

    useEffect(()=>{
        const categoryData = 'categories.json'
        fetch(categoryData)
        .then(res=>res.json())
        .then(data=>{setMenuCategory(data)});

    },[])
    return (
        <div className="p-4 space-y-6">
            <h2 className="text-xl">All Categorys</h2>
            <button className="btn">National News</button>
            {
                menuCategory.map(category=>(<NavLink to={`/category/${category.id}`} className="flex text-slate-500 px-4 text-xl font-medium" key={category.id}>{category.name}</NavLink>))
            }

        </div>
    );
};

export default LeftSideNav;