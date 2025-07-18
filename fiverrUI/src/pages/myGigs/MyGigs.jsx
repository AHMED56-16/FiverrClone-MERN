import React from 'react'
import { Link } from "react-router-dom";
import './MyGigs.scss'
const MyGigs = () => {
  const currentUser = {
    id: 1,
    username: "Muhammad Ahmed Raza",
    isSeller: true,
  };
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="image" src="https://th.bing.com/th/id/OIP.R63GZqhEcMWoli9PqQ54mQHaEB?w=2558&h=1389&rs=1&pid=ImgDetMain" alt="" />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td>
              <img className="delete" src="./images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="image" src="https://th.bing.com/th/id/OIP.R63GZqhEcMWoli9PqQ54mQHaEB?w=2558&h=1389&rs=1&pid=ImgDetMain" alt="" />
            </td>
            <td>Ai generated concept art</td>
            <td>120.<sup>99</sup></td>
            <td>41</td>
            <td>
              <img className="delete" src="./images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="image" src="https://th.bing.com/th/id/OIP.R63GZqhEcMWoli9PqQ54mQHaEB?w=2558&h=1389&rs=1&pid=ImgDetMain" alt="" />
            </td>
            <td>High quality digital character</td>
            <td>79.<sup>99</sup></td>
            <td>55</td>
            <td>
              <img className="delete" src="./images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="image" src="https://th.bing.com/th/id/OIP.R63GZqhEcMWoli9PqQ54mQHaEB?w=2558&h=1389&rs=1&pid=ImgDetMain" alt="" />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>119.<sup>99</sup></td>
            <td>29</td>
            <td>
              <img className="delete" src="./images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="image" src="https://th.bing.com/th/id/OIP.R63GZqhEcMWoli9PqQ54mQHaEB?w=2558&h=1389&rs=1&pid=ImgDetMain" alt="" />
            </td>
            <td>Original ai generated digital art</td>
            <td>59.<sup>99</sup></td>
            <td>34</td>
            <td>
              <img className="delete" src="./images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="image" src="https://th.bing.com/th/id/OIP.R63GZqhEcMWoli9PqQ54mQHaEB?w=2558&h=1389&rs=1&pid=ImgDetMain" alt="" />
            </td>
            <td>Text based ai generated art</td>
            <td>110.<sup>99</sup></td>
            <td>16</td>
            <td>
              <img className="delete" src="./images/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs