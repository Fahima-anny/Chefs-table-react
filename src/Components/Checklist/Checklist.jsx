
import Preparing from "../Preparing/Preparing";
import PropTypes from 'prop-types';
import CurrentlyCooking from "../currentlyCooking/CurrentlyCooking";



const Checklist = ({ cooking , wantToCook, handleCooking,time,cal}) => {



    return (
        <div className="border rounded-xl flex flex-col gap-6 py-4 md:w-2/5">
            <h1 className="text-center text-xl font-bold border-b py-3 px-4">Want to cook: {wantToCook.length}  </h1>

            <table className="w-full">
                <thead className="pb-3">
                    <tr>
                      
                        <th className="font-semibold text-gray-500 px-2">Name</th>
                        <th className="font-semibold text-gray-500 px-2">Time</th>
                        <th className="font-semibold text-gray-500 px-2">Calorie</th>
                     
                    </tr>
                        </thead>
               <tbody>
               {
                        wantToCook.map((item, idx) => <Preparing
                            handleCooking={handleCooking}
                            key={idx} item={item}
                        ></Preparing>)
                    }
               </tbody>
                
            </table>

            <h1 className="text-center text-xl font-bold border-b py-3">Currently Cooking: {cooking.length }</h1>

            <table className="w-full">
                <thead className="pb-3">
                    <tr>      
                        <th className="font-semibold text-gray-500 px-2">Name</th>
                        <th className="font-semibold text-gray-500 px-2">Time</th>
                        <th className="font-semibold text-gray-500 px-2">Calorie</th>
                    </tr>
                    </thead>
                   <tbody>
                   {
                 cooking.map((item,idx) => <CurrentlyCooking
                         key={idx} 
                         item={item}
                         ></CurrentlyCooking>)
            }
                   </tbody>
              
            </table>
     
<h1 className="text-center text-lg font-bold ">Total Time: {time} min</h1>
<h1 className="text-center text-lg font-bold ">Total Calorie: {cal} cal</h1>

        </div>
    );
};

Checklist.propTypes = {
    wantToCook: PropTypes.array,
    handleCooking: PropTypes.func,
    cooking: PropTypes.array,
    time: PropTypes.number,
    cal: PropTypes.number
};

export default Checklist;