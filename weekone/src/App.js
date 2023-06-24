import "./App.css";
import data from "./data.json";
import { memory, reaction, verbal, visual } from "./assets/images.js";
import Categories from "./components/Categories";

function App() {
	let stats = data;
	console.log(stats[0].icon, stats[1].icon);
	console.log(memory);

	{
		return (
			<>
				<div className='card'>
					<div className='leftPanel'>
						<div className='title leftCopy' id='leftTitle'>
							Your Result
						</div>
						<div className='circle'>
							<div className='result'>
								<div className='total leftCopy'>
									{Math.round(
										stats.reduce((a, b) => {
											return a + b["score"];
										}, 0) / stats.length
									)}
								</div>
								<div className='subTotal leftCopy'>of 100</div>
							</div>
						</div>
						<div className='announcement'>
							<div className='achievement leftCopy'>Great</div>
							<div className='summary leftCopy'>
								Your performance exceed 65% of the people conducting the test
								here!
							</div>
						</div>
					</div>

					<div className='rightPanel'>
						<div className='title rightCopy' id='rightTitle'>
							Summary
						</div>
						<Categories />
						<div className='button'>Continue</div>
					</div>
				</div>
			</>
		);
	}
}

export default App;
