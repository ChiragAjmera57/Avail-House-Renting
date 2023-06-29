import { useState } from "react";
import "./App.css";
import { Stack, Center, Button } from '@chakra-ui/react'
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";

function App() {
	// TODO: Remove below const and instead import them from chakra
	const [dataState,setDataState] = useState(false)
	const togglestate = () =>{
		dataState?setDataState(false):setDataState(true)
	}
	return (
		
		
		<Stack spacing={5} p={5} className="App">
			<Center>
				<Button colorScheme={"messenger"} onClick={togglestate} width="150px" className="toggleForm">
					{
						dataState?"View Dashboard":"Add New Data"
					}
				</Button>
			</Center>
			{
				dataState?(<Form />):(<Dashboard />)
			}
		</Stack>
		
		
		
	);
}

export default App;
