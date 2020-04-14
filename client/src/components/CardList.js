import React from "react";
import CardPic from "./CardPic";


const CardList = (props) => {
    return (
        <div>
            {props.pics.map(
                (pic, index) =>
                    <CardPic
                        key={index}
                        tags={pic.tags}
                        name={pic.name} />)}
        </div>
    )
}

export default CardList;


