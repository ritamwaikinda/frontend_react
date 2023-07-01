import "./App.css";
import Title from "./components/Title/Title.js";
import Inputs from "./components/Inputs/Inputs";
import SectionHeader from "./components/Summary/SectionHeader/SectionHeader.js";
import Percentages from "./components/Percentages/Percentages";
import PeopleVerifier from "./components/PeopleVerifier/PeopleVerifier";
import Result from "./components/Result/Result";
import dollar from "./images/dollar.svg";
import person from "./images/person.svg";

function App() {
	return (
		<>
			<body>
				<Title />
				<div className='calculator'>
					<div className='inputs'>
						<Inputs
							classtwo='bill'
							component={<SectionHeader headerCopy='Bill' />}
							icon={dollar}
							iconClass='dollar'
						/>
						<Percentages />
						<Inputs
							classtwo='people'
							component={<PeopleVerifier />}
							icon={person}
							iconClass='person'
						/>
					</div>
					<Result />
				</div>
			</body>
			;
		</>
	);
}

export default App;
