import { MouseEventHandler } from "react";
import "./css/Card.css";

type CardProps = {
  title: string;
  description: string;
  alt?: string;
  image: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};
export const Card = ({ title, description, image, onClick }: CardProps) => {
  return (
    <div onClick={onClick} className="card-movies">
      <img className="img-movies" src={image} alt="card" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
// crée moi le css pour le composant Card
