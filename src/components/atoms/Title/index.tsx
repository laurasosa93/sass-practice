import React from "react";

interface Props {
    title: string;
}

export default function Title(props: Props) {
    return (
        <span className='city-card__name'>{props.title}</span>
    )
}
