import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Checklist from './Components/Checklist/Checklist'
import Header from './Components/Header/Header'

function App() {

let [wantToCook,setWantToCook] = useState([])

let handleWantToCook = (item) => {
let newWantToCook = [...wantToCook,item];
setWantToCook(newWantToCook)
// console.log(wantToCook) ;
}


let [cooking,setCooking] = useState([])

let [time,setTime] = useState(0)
let [cal,setCal] = useState(0)

let handleCooking = (id,item) => {
  let totalTime = time + parseInt(item.preparing_time) ;
  setTime(totalTime) ;
  let totalCal = cal + parseInt(item.calories) ;
  setCal(totalCal) ;
//  console.log('cooking now',id ) ;
let newCooking = [...cooking,item] ;
setCooking(newCooking) ;
let remainingItem = wantToCook.filter(dish => dish.recipe_id !== id)
// console.log('remaining item',remainingItem)
setWantToCook(remainingItem)
// console.log('want to cook',wantToCook)
}


  return (
    <>
   <div className='max-w-7xl mx-auto'>
   <Header></Header>
<div className='md:flex mx-auto gap-6 mt-6'>
  <Cards
  handleWantToCook={handleWantToCook}
  ></Cards>
  <Checklist 
  cooking={cooking}
wantToCook={wantToCook}
handleCooking={handleCooking}
cal={cal}
time={time}
  ></Checklist>
</div>

   </div>
    </>
  )
}

export default App
