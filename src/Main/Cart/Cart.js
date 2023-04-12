import "./Cart.css";

function Cart(props) {
    return (
        <div>
            <article >
                <div className="style">

                <span className="image">
                    <img src="#" alt=""  />

                </span>
                <a href="generic.html">
                    <h2>{props.title}</h2>
                    <div className="content">
                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                    </div>
                </a>
                </div>
            </article>
        </div>
    )
};

export default Cart;