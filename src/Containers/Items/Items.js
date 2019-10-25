import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../Components/Spinner/Spinner";
import {connect} from "react-redux";
import * as actionCreators from "../../Store/actionCreators";
import Item from "./Item/Item";
import './Items.css';

class Items extends React.Component {

    state = {
        itemClass: "hidden",
    };


    componentDidMount() {

        if (this.props.items.length > 1 === false) {
            this.props.getInitialItems();
        }

    }


    itemClickedHandler = id => {

        if (window.screen.width <= 768) {
            this.props.history.push('/Item')
        }
        this.setState({itemClass: "oneCard"});
        this.props.getOneItem(id);
    };

    render() {

        let item = <Spinner/> || this.props.err;
        let allItems = <Spinner/> || this.props.err;
        let loader = <Spinner/>;
        if (this.props.oneItem.id) {
            item = (
                <Item
                    desc={this.props.oneItem.desc}
                    title={this.props.oneItem.title}
                    thumb={this.props.oneItem.picture}
                />
            )
        }


        if (this.props.items[0]) {

            allItems = this.props.items.map((i, index) => (
                <Item
                    key={index}
                    class="card"
                    thumb={i.thumb}
                    title={i.title}
                    clicked={() => this.itemClickedHandler(i.id)}
                />
            ))
        }

        const style = {
            allItems: {
                color: "red",
                marginLeft: "60px"
            },
            oneItem: {
                color: "red",
            },


        };
        if (this.props.err) {
            item = <h1 style={style.oneItem}>{this.props.err}</h1>
            allItems = <h1 style={style.allItems}>{this.props.err}</h1>
            loader = null;
        }


        return (
            <div>
                <div id="scrollableDiv" className="cards">
                    <h1>Latest Items</h1>
                    <InfiniteScroll
                        dataLength={this.props.items.length}
                        next={() => this.props.getMoreItems(this.props.items.slice(-1)[0].id)}
                        hasMore={true}
                        loader={loader}
                        scrollableTarget="scrollableDiv"
                    >
                        {allItems}
                    </InfiniteScroll>
                </div>

                <div className={this.state.itemClass}>
                    {item}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        items: state.items,
        oneItem: state.oneItem,
        err: state.err
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getInitialItems: () => dispatch(actionCreators.getInitialItems()),
        getMoreItems: (offset) => dispatch(actionCreators.getMoreItems(offset)),
        getOneItem: (id) => dispatch(actionCreators.getOneItem(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);