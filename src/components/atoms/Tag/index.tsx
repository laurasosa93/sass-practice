import React from "react";

interface Props {
    tag: string;
}

export default function Tag(props: Props) {
    return (
        <span className='tag'>{props.tag}</span>
    )
}
