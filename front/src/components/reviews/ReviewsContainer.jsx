import React from "react";
import { connect } from "react-redux";
import Reviews from "./Reviews";
import { addReview } from "../../action-creator/Reviews"
import { fetchProduct } from "../../action-creator/Products"


class ReviewsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            stars: 0,
        };
        this.contentChange = this.contentChange.bind(this)
        this.starsChange = this.starsChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.productId)
    }

    contentChange(evt) {
        const value = evt.target.value;
        this.setState({ content: value });
    }
    starsChange(evt) {
        const value = evt.target.value;
        this.setState({ stars: Number(value) });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addReview(this.state.content, this.state.stars, this.props.userId, this.props.productId);
    }

    render() {
        return (
            <Reviews
                contentChange={this.contentChange}
                starsChange={this.starsChange}
                handleSubmit={this.handleSubmit}
                userId={this.props.userId}
                productId={this.props.productId}
                reviews={this.props.reviews}
                product={this.props.product}
                content={this.state.content}
                stars={this.state.stars}
            />
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        userId: state.user.loginUser.id,
        productId: ownProps.match.params.id,
        reviews: state.reviews.reviews,
        product: state.products.product,
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        addReview: (content, stars, userId, productId) => {
            dispatch(addReview(content, stars, userId, productId)).then(() => {
                ownProps.history.push(`/product/${ownProps.match.params.id}`);
            });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
