import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const MiddleNews = ({news}) => {
    
    const {title,thumbnail_url,details,_id} = news
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={thumbnail_url}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          {
            details.length > 200 ?  <p>{details.slice(0,200)} <Link
             className="text-blue-600 font-semibold"
             to={`/news/${_id}`}
             >Read More...</Link></p> : 
            <p>{details}</p>
          }
          
        </div>
      </div>
    </div>
  );
};

export default MiddleNews;
MiddleNews.propTypes = {
    news:PropTypes.object
}
