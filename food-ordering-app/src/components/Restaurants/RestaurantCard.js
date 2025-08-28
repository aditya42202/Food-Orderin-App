import { Link } from 'react-router-dom';
import './RestaurantCard.css';
const RestaurantCard = ({id, resName, cuisine, rating, eta, image}) =>{
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={resName}/>
            </div>
            <div className="card-info">
                <h2>{resName}</h2>
                <p>{cuisine}</p>
                <p>⭐ {rating} | ⏱ {eta}</p>
                {/* Link to View Menu */}
                <Link to={`/restaurants/${id}`} className="view-menu">View Menu</Link>
            </div>
        </div>
    );
};

export default RestaurantCard;