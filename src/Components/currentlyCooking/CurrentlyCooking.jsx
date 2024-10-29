import PropTypes from 'prop-types';

const CurrentlyCooking = ({item}) => {
    const {recipe_name,preparing_time,calories} = item ;
    return (
<tr className="text-gray-700 font-semibold bg-gray-100 mb-2">
                        <td className="px-1 py-5">{recipe_name}</td>
                        <td className="px-1">{preparing_time} min</td>
                        <td className="px-1">{calories} cal</td>
                    </tr>

    );
};

CurrentlyCooking.propTypes = {
    item: PropTypes.object ,
  };

export default CurrentlyCooking;