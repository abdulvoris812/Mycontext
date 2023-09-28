import React from "react";
// import Dars5 from "./Dars/dars5/dars5";
// import Props from "./Dars/dars5/props"
// import Amaliy from "./Dars/amaliy/amaliy"
// import { Route, Routes } from "react-router-dom";
// import SinglePage from "./Dars/dars11/SinglePage";
import Mode, { AS } from "./context/context";
import "./App.css";
import { BoxLoading } from "react-loadingg";

const App = () => {
	// let name = "polonchi pistonchi"
	return (
		<React.Fragment>
			{/* <Dars5 name={name} num={20} />
			<Props name={name} num={30} /> */}
			{/* <Routes>
				<Route index element = {<Dars11/>}/>
				<Route path="/news/:id" element = {<SinglePage/>}/>
			</Routes> */}
			{/* <Amaliy/> */}
			<Mode>
				<AS.Consumer>
					{(value) => {
						return (
							<React.Fragment>
								<div
									className={value.theme ? "home home-light" : "home home-dark"}
								>
									{value.load ?<div className='loading'>
										<BoxLoading />
									</div>
									:
									<div>
									<h1>Hello world</h1>
									<button
										className={value.theme ? "btn btn-dark" : "btn btn-llight"}
										onClick={value.handleTheme}
									>
										Change Theme
									</button>
									</div>
									}
								</div>
							</React.Fragment>
						);
					}}
				</AS.Consumer>
			</Mode>
		</React.Fragment>
	);
};

export default App;
