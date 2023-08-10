import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link} from 'react-router-dom'
import Banner from "../images/pic1.jpg";
import "../styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
      <div className= "home"  style={{ backgroundImage: `url(${Banner})` }}>
      <div className="headerContainer">
      <h1>Delicious Recipes</h1>
      <p>Best food in India</p>
          <Link to="/menu">
            <button>CHECK OUR MENU</button>
          </Link>
      </div>
      </div>
    </Layout>
  )
}

export default Home;
