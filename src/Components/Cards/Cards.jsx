import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleWantToCook}) => {

let [cards,setCards] = useState([]) ;

 useEffect( () => {
    fetch('recipes.json')
    .then( res => res.json() )
    .then( data => setCards(data) )
 } , [] )

    return (
        <div className="md:w-3/5">
            {/* <h1 className="font-bold">Cards:{cards.length}</h1> */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{
    cards.map(card => <Card
        key={card.recipe_id}
        card={card}
        handleWantToCook={handleWantToCook}
    ></Card>)
}
</div>

        </div>
    );
};

Cards.propTypes = {
    handleWantToCook: PropTypes.func
  };


export default Cards;