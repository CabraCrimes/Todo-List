import React, { useState } from "react";

const Home = () => {
const [isTodo, setTodo] = useState("")
const [isArrayTodo, setArrayTodo] = useState([])


	return(
		<div className="container text-center">

		<h1>My List Of Things Todo</h1>
			<input type="text" 
			placeholder="Type here"  
			value={isTodo} 
			onChange={e=> {setTodo(e.target.value) }}
			onKeyUp={e=> {
				if ( e.key === "Enter"){
				setArrayTodo([...isArrayTodo, isTodo]);
				setTodo("")}}}
			
			/>

			 {/* // When using map we creat a new array. The newisTodo is the new array element. */}
		<ul>
			{isArrayTodo.map((newisTodo, index) => {
				return <li key={index}>{newisTodo}<i className="fa-solid fa-xmark" 
					onClick={() => setArrayTodo(isArrayTodo.filter((el, newIndex) => {return newIndex != index}))
				
			}></i></li>})}
		</ul>

		</div>
	)
};

export default Home;
