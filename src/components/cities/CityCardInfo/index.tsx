import React, { useState } from "react";
import { City } from "../../../data/cities";
import Title from "../../atoms/Title";
import CityCardContainer from "../CityCardContainer";

interface Props {
    city: City;
}
export default function CityCard(props: Props) {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const temperature = "15ºC";
    const humidity = 15;
    const uvi = 15;
    const wind = "NW 15kmh";

    return (
        <CityCardContainer image={props.city.image} isHovered={isHovered} setIsHovered={setIsHovered}>
            <div className='city-card__title'>
                <Title title={props.city.name} />
                <span className='city-card__country'>{props.city.country}</span>
            </div>
            {isHovered ? (
                <div className='city-card__weather'>
                    <Title title={temperature} />
                    <span className='city-card__weather-text'>Humidity: {humidity}º</span>
                    <span className='city-card__weather-text'>UVI: {uvi}%</span>
                    <span className='city-card__weather-text'>Wind: {wind}</span>
                </div>
            ) :
                <span className='city-card__description'>{props.city.description}</span>
            }
        </CityCardContainer>

    )
}