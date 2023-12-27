import CardNachos from "./CardNachos"
import CardChocolates from "./CardChocolate"
import CardGummy from "./CardGummy"

const CardsSnacks = () => {
    return (
        <>
            <div className="cardssnacks">
                <CardNachos/>    
                <CardChocolates/>
                <CardGummy/>
            </div>
        </>
    )
}

export default CardsSnacks