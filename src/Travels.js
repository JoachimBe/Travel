import React from "react";

import Travel from "./Travel"

const travels =[
    {
        destination:"Tokyo",
        country:"Japon",
        image:"https://i.gifer.com/NlYA.gif",
        distance: "22000"
    },
    {
        destination:"Oulan Bator",
        country:" Mongolie",
        image:"https://www.geo.fr/var/geo/storage/images/photos/reportages-geo/le-nouvel-age-d-or-de-la-mongolie/oulan-bator-la-capitale/1197490-1-fre-FR/oulan-bator-la-capitale_940x705.jpg",
        distance:"20000"
    },
    {
        destination:"pole sud",
        country:"none",
        image:"https://cdn-s-www.leprogres.fr/images/B82EE773-6620-486E-954F-7FC6F2B51A0B/LPR_v1_02/l-exposition-temporaire-quot-a-la-conquete-du-pole-sud-quot-est-visible-a-partir-de-ce-mardi-au-musee-des-confluences-a-lyon-photo-stephane-guiochon-1479278308.jpg",
        distance:"??"
    },
    {
        destination:"",
        country:"iran",
        image:"https://img.bfmtv.com/c/1000/600/08a1/e12fe1ee730e87edd59da5d8fa9d.jpeg",
        distance:"",

    }

]

const Travels = () => (
    <div>
        {travels.map(travel => ( 
            <Travel destination={travel.destination} image={travel.image} country={travel.country} distance={travel.distance} />
        ))}
    </div>
);

export default Travels