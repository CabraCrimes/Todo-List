import React, { useState } from "react";

const Home = () => {
const [isTodo, setTodo] = useState("")
const [isArrayTodo, setArrayTodo] = useState([])


	return(
		<div className="container vh-100 text-center">

		<h1 className="mt-5">My List Of Things Todo</h1>

		<input className="shadow p-3 mb-5 bg-body-tertiary rounded mt-3 w-50" type="text" 
			placeholder="Type here..."  
			value={isTodo} 
			onChange={e=> {setTodo(e.target.value) }}
			onKeyUp={e=> {
				if ( e.key === "Enter"){
				setArrayTodo([...isArrayTodo, isTodo]);
				setTodo("")}}}
			/>

			 {/* // When using map we creat a new array. The newisTodo is the new array element. */}
		<ul className={isArrayTodo.length === 0 ? "" : `list-group shadow p-3 bg-body-tertiary rounded`}>
			{isArrayTodo.map((newisTodo, index) => {
				return  <li className="list-group-item p-2 d-flex justify-content-center rounded" key={index}>{newisTodo}<i className=" position-absolute top-0 end-0 p-2 fa-solid fa-xmark" 
					onClick={() => setArrayTodo(isArrayTodo.filter((el, newIndex) => {
						return newIndex != index}))
				}>
					</i>
						</li>})}
				<p className="mt-2 mb-0">You have {isArrayTodo.length == 0 ? " no tasks. Add a task" : isArrayTodo.length + " tasks"}</p>
		</ul>
		</div>
	)
};

export default Home;
