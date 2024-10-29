import PropTypes from 'prop-types';
import { LuClock } from "react-icons/lu" ;
import { FaFireFlameCurved } from "react-icons/fa6";

const Card = ({card,handleWantToCook}) => {
    const {recipe_name,recipe_img,short_description,ingredients,preparing_time,calories} = card ;
    return (
        <div className='p-6 border rounded-xl space-y-3 shadow-xl'>
            {/* <h1>card: {recipe_name}</h1> */}

<img className='h-[200px] rounded-xl w-full object-cover' src={recipe_img} alt="" />
<h1 className='font-bold text-xl'>{recipe_name}</h1>
<p className='text-sm text-gray-500 pb-4 border-b'>{short_description}</p>
<h1 className='font-semibold text-xl text-gray-800'>Ingredients: {ingredients.length}</h1>
<ul className='border-b pb-4'>
    {
        ingredients.map((ingred,idx) => <li className='list-disc list-inside text-gray-500' key={idx}>{ingred}</li> )
    }
</ul>

<div className='flex justify-between items-center'>
    <div className=' flex gap-2 text-gray-500 justify-center items-center'>
    <LuClock className=' text-2xl'></LuClock>
    {preparing_time} min
    </div>
    <div className=' flex gap-2 text-gray-500 justify-center items-center'>
<FaFireFlameCurved></FaFireFlameCurved>
{calories} cal
    </div>
</div>

<button onClick={() => handleWantToCook(card)} className='btn bg-green-400 py-3 px-5 font-bold mt-5 rounded-3xl'>Want to Cook</button>

        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object ,
        handleWantToCook: PropTypes.func
  };

export default Card;