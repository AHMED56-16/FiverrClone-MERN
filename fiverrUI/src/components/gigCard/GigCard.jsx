import { useQuery } from '@tanstack/react-query';
import './GigCard.scss'
import { Link } from 'react-router-dom'
import newRequest from "../../utils/newRequest.js";
const GigCard = ({ item }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [item.userId],
        queryFn: () =>
            newRequest.get(`/users/${item.userId}`).then((res) => {
                return res.data;
            }),
    });
    return (
        <Link to="/gig/123" className='link'>
            <div className='gigCard'>
                <img src={item.cover} alt="" />
                <div className="info">
                    {isLoading ? "Loading" : error ? "Something went wrong" : <div className="user">
                        <img src={data.image || "/images/noavatar.jpg"} alt="" />
                        <span>{data.username}</span>
                    </div>}
                    <p>{item.desc}</p>
                    <div className="star">
                        <img src="./images/star.png" alt="" />
                        <span>{!isNaN(item.totalStars / item.starNumber) &&
                            Math.round(item.totalStars / item.starNumber)}</span>
                    </div>
                </div>

                <hr />

                <div className="details">
                    <img src="./images/heart.png" alt="" />
                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>${item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GigCard