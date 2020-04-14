import React from "react";

const CardPic = (props) => {
    return (
        <div className='tc bg-light-blue dark-black dib br3 pa3 ma2 bw2 shadow-5 ba b--black'>
            <img className='br-100 ba grow b--black' alt='not load' src={`/${props.name}`} />
            <div>
                <h2> TAGS: </h2>
                <h5> {props.tags} </h5>
            </div>
        </div>

    )
}

export default CardPic;


