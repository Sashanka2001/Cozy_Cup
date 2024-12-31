import React from 'react'
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LatestArrivals from "../components/LatestArrivals";
import CommunitySection from "../components/CommunitySection";
import ConnectSection from "../components/ConnectSection";
import CategorySection from "../components/CategorySection";



function Home() {
    return (
        

        <div>
            
           <HeroSection/>
            <LatestArrivals/>
            <CommunitySection/>
            <CategorySection/>
            <ConnectSection/>
        
        </div>
    )
}

export default Home
