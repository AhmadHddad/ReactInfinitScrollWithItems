import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import img from '../../assets/svg/backBtn.svg';
import './oneItem.css';
import Spinner from "../Spinner/Spinner";


const OneItem = (props) => {

    const oneItem = useSelector(state => state.oneItem);
    const err = useSelector(state => state.err);
    let Item =<Spinner/>;

    const screenSizeCheck = () => {
        if (window.screen.width > 768) {
            props.history.push('/');
        }
    };


    if (oneItem) {
        Item = <div className="oneItem">
            <img src={oneItem.picture} alt={oneItem.title}/>
            <div>
                <h3>{oneItem.title}</h3>
                <p>{oneItem.desc}</p>

            </div>
        </div>
    }

    window.addEventListener("resize", screenSizeCheck);

    return (
        <React.Fragment>

            {Item =  err ? <h3 className="errH">{err}</h3> :Item}
            <Link to='/' className="previous">
                <img src={img} alt="Go Back"/>
            </Link>
        </React.Fragment>
    );
};


export default OneItem;
