import React from "react";

interface Props {
    image: string;
    isHovered: boolean;
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
    children: any;
}
export default function CityCardContainer(props: Props) {

    const defaultGradient = `linear-gradient(180deg, #010202 0%, rgba(217, 217, 217, 0) 100%), url(${props.image})`;
    const hoverGradient = `
      linear-gradient(179.89deg, #006A6A 0.1%, rgba(0, 87, 87, 0.5) 39.48%),
      url(${props.image})
    `;

    const containerStyle = {
        backgroundImage: props.isHovered ? hoverGradient : defaultGradient,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'box-shadow 0.3s',
        boxShadow: props.isHovered ? '0px 4px 4px 0px #00000040 inset' : 'none'
    };


    return (
        <div
            className='city-card'
            style={containerStyle}
            onMouseEnter={() => props.setIsHovered(true)}
            onMouseLeave={() => props.setIsHovered(false)}>
            {props.children}
        </div>
    )
}