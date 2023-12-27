import Catalogue from "./Catalogue"
import Details from "./Details"

const Cart = () => {
    return (
        <>
            <div className="carro">
                <div className="catalogo">
                    <Catalogue/>
                </div>
                <div className="detalles">
                    <div className="tot">
                        <h1>Total</h1>
                    </div>
                    <div className="prod">
                        <Details/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart