import React from "react";
import { City } from "../../../data/cities";
import CityCardInfo from "../CityCardInfo";

interface Props {
    cities: City[];
}

export default function CityList(props: Props) {
    return (
        <div className='city-list'>
            {props.cities.map((city: City) => (
                <CityCardInfo city={city} />
            ))}
        </div>
    )
}
