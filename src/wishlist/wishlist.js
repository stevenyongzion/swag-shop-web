import React, { Component } from 'react';
import './wishlist.css';
import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {

    constructor (props) {
        super(props);

        this.state = {
            wishList: [
                {
                    title: "Bologna Killer",
                    price: 23.99,
                    _id: "12312k3jk"
                },
                {
                    title: "Pipe Dream",
                    price: 123.99,
                    _id: "swf3323"
                },
                {
                    title: "Sayne Drummer",
                    price: 100,
                    _id: "xwds31243"
                }
            ]
        };

        // binding
        this.createWishList = this.createWishList.bind(this);
    }

    createWishList = () => {
        const list = this.state.wishList.map((product) =>
            <ProductCondensed product={product} key={product._id} />
        );

        return (list);
    }

    render () {
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>

            </div>
        );
    }
}

export default WishList;