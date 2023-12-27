import CardSoda from "./CardSoda"
import CardWater from "./CardWater"
import CardFlavoredWater from "./CardFlavoredWater"

const CardsDrink = () => {
    return (
        <>
            <div className="cardsdrink">
                <CardSoda/>
                <CardWater/>
                <CardFlavoredWater/>
            </div>
        </>
    )
}

export default CardsDrink