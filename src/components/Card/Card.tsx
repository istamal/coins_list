import { PropsWithChildren } from "react";

import "./Card.css";

type CardProps = PropsWithChildren<{
    title: string
}>

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="card layout">
            <div className="card__title">{title}</div>
            <div className="card__body">{children}</div>
        </div>
    )
};

export default Card;
