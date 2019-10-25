import React from 'react'


const Item = (props) => {

    let desc;
    if (props.desc) {
        desc = <p>{props.desc}</p>
    }

    return (
        <div className={props.class} onClick={props.clicked}>
            <img src={props.thumb} alt={props.title}/>
            <div>
                <h3>{props.title}</h3>
                {desc}
            </div>
        </div>
    );
};

export default Item;
