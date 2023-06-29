import {Checkbox, FormLabel, Stack} from '@chakra-ui/react'
import {FormControl} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import {  Center, Button } from '@chakra-ui/react'
import axios from "axios";

import { useState } from 'react'
export default function Form() {
	const initalform = 
	{
		name: "",
		ownerName: "",
		address: "",
		areaCode: "",
		rent: "",
		isBachelorAllowed: false,
		isMarriedAllowed: false,
	}
	const[submittedData,setdata] = useState(initalform)
	const handlename =(e) =>{
		setdata({
			...submittedData,
			name:e.target.value
		}
		)
	}
	const handleowner =(e) =>{
		setdata({
			...submittedData,
			ownerName:e.target.value
		}
		)
	}
	const handleadd =(e) =>{
		setdata({
			...submittedData,
			address:e.target.value
		}
		)
	}
	const handlearea =(e) =>{
		setdata({
			...submittedData,
			areaCode:e.target.value
		}
		)
	}
	const handlerent =(e) =>{
		setdata({
			...submittedData,
			rent:e.target.value
		}
		)
	}
	const handlebach =(e) =>{
		
		setdata({
			...submittedData,
			isBachelorAllowed:e.target.checked
		}
		)
	}
	const hadlemarried =(e) =>{
		setdata({
			...submittedData,
			isMarriedAllowed:e.target.checked
		}
		)
	}

	const handlesubmit =() =>{
		axios.post(`https://json-server-cqxs.onrender.com/houses`,{
			name: submittedData.name,
			ownerName:  submittedData.ownerName,
		address:submittedData.address,
		areaCode:submittedData.areaCode,
		rent:submittedData.rent,
		isBachelorAllowed: submittedData.isBachelorAllowed,
		isMarriedAllowed: submittedData.isMarriedAllowed,

		})
		setdata(initalform)
	}

	return (
		<div className="addHouseContainer">
			<form className="form">
				<FormControl>
					<Stack spacing={3}>
						<Input value={submittedData.name}
						 onChange={(e)=>handlename(e)}
							focusBorderColor={"lime"}
							className="name"
							placeholder="Name"
						/>
						<Input value={submittedData.ownerName} onChange={(e)=>handleowner(e)}
							focusBorderColor={"lime"}
							className="ownerName"
							placeholder="Owners name"
						/>
						<Input value={submittedData.address} onChange={(e)=>handleadd(e)}
							focusBorderColor={"lime"}
							className="address"
							placeholder="Address"
						/>
						<Input value={submittedData.areaCode} onChange={(e)=>handlearea(e)}
							focusBorderColor={"lime"}
							className="areaCode"
							placeholder="Area code"
						/>
						<Input value={submittedData.rent} onChange={(e)=>handlerent(e)}
							focusBorderColor={"lime"}
							className="rent"
							placeholder="Rent"
							type="number"
						/>
						<Checkbox onChange={(e)=>{hadlemarried(e)}} colorScheme={"green"} className="married">
							<FormLabel>Married Tenants Allowed</FormLabel>
						</Checkbox>
						<br />
						<Checkbox onChange={(e)=>{handlebach(e)}} colorScheme={"green"} className="bachelor">
							<FormLabel>Bachelor Tenants Allowed</FormLabel>
						</Checkbox>
						<br />
						<Button colorScheme={"green"} onClick={handlesubmit} className="submitBtn">
							Submit
						</Button>
					</Stack>
				</FormControl>
			</form>
		</div>
	);
}
