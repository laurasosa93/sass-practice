import React from "react";

interface Props {
    tag: string;
}

export default function TagOption(props: Props) {
    return (
        <span className='tag-option'>{props.tag}</span>
    )
}
