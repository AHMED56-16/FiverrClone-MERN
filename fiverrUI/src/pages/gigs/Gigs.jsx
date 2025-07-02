import { useEffect, useRef, useState } from 'react';
import './Gigs.scss';
import GigCard from '../../components/gigCard/GigCard.jsx';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';
import { useLocation } from 'react-router-dom';

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs', search, sort],
    enabled: false,
    queryFn: () => {
      const min = minRef.current?.value || 0;
      const max = maxRef.current?.value || 1000000;

      const params = new URLSearchParams(search);
      params.set('min', min);
      params.set('max', max);
      params.set('sort', sort);

      const url = `/gigs?${params.toString()}`;
      console.log("Fetching:", url);

      return newRequest.get(url).then(res => {
        console.log("Response:", res.data);
        return res.data;
      });
    },
  });

  useEffect(() => {
    refetch(); 
  }, [sort, search]);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    refetch();
  };

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">FIVERR {'>'} GRAPHICS & DESIGN {'>'}</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Liverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder="min" ref={minRef} />
            <input type="number" placeholder="max" ref={maxRef} />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./images/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales"
                  ? <span onClick={() => reSort("createdAt")}>Newest</span>
                  : <span onClick={() => reSort("sales")}>Best Selling</span>}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "Loading"
            : error
              ? "Something went wrong"
              : data?.map((gig) => (
                <GigCard key={gig._id} item={gig} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
