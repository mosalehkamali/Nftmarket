import "./Main.css";
import Discription from "./Discription/DIscription";
import Cart from "./Cart/Cart"

function Main() {
    return(
        <div className="main">
        <Discription />
        <section className="tiles">
        <Cart title = "biography" />
        <Cart title = "biography" />
        <Cart title = "biography" />
        <Cart title = "biography" />
        <Cart title = "biography" />
        <Cart title = "biography" />
        <Cart title = "biography" />
        <Cart title = "biography" />
        <Cart title = "biography" />
        </section>
        </div>
    )
};

export default Main;