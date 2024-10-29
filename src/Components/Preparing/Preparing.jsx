import PropTypes from 'prop-types';


const Preparing = ({item,handleCooking}) => {
    const {recipe_name,preparing_time,calories,recipe_id} = item ;
    return (
 
                    <tr className="text-gray-700 font-semibold bg-gray-100 mb-2">
                       
                        <td className="px-1 py-5">{recipe_name}</td>
                        <td className="px-1">{preparing_time} min</td>
                        <td className="px-1">{calories} cal</td>
                        <td className="px-1"><button onClick={() => handleCooking(recipe_id,item)} className="btn text-black bg-green-400 py-1 px-3 font-semibold rounded-2xl my-1">Prepare</button></td>
                    </tr>

    );
};


Preparing.propTypes = {
    item: PropTypes.object ,
    handleCooking: PropTypes.func
  };


export default Preparing;