import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../Redux/Reducers/FetchReducer";
import { ColorRing } from "react-loader-spinner";

import Search from "../Images/Search.png"
import Card from "./Card"
import Navbar from "./Navbar";


const HomePage =()=>{

    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);
    
  
    useEffect(() => {
      dispatch(fetchPosts());
    }, [dispatch]);
  
    if (loading) {
      return <div style={{width:"100%", height:"100vh", textAlign:"center"}}><ColorRing
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    /></div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
        <div>
          <Navbar />

          <div className="page-content">
            <div className="page-side-heading">Social Media For Travellers...</div>
            <div className="search-bar">
            <button><img src={Search} alt="icon" /></button>
                <input type="text"  placeholder="Search here..."/>
            </div>
          </div>
          <Card posts={posts}/>

        </div>
      );
}


export default HomePage