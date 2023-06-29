import React, { useEffect, useReducer, useState } from "react";
import {  Center, Button,Stack ,Input, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spinner, CloseButton} from '@chakra-ui/react'
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import axios from "axios";
export default function Dashboard() {
	// TODO: Remove below const and instead import them from chakra UI
	
const [userdata,dispatch] = useReducer(reducer,initialState);
const[sortby,setsortby] = useState("");
const[query,setquery] = useState("");
const[button1,setbutton1] = useState(true)
const[button2,setbutton2] = useState(false)

const handlechange = (e)=>{
setquery(e.target.value);
}
 const fetchdata = () =>{
	dispatch({type:"GET_HOUSE_DETAILS_REQUEST"})
	axios.get(`https://json-server-cqxs.onrender.com/houses`,{
		params:{
			q:query,
			_sort:"rent",
			_order:sortby

		}
	}).then((res)=>{
		dispatch({type:"GET_HOUSE_DETAILS_SUCCESS",paylod:res.data})
	}).catch((err)=>{
		dispatch({type:"GET_HOUSE_DETAILS_FAILURE"})
	})
}
const handledelete = (id) =>{
	try {
		axios.delete(`https://json-server-cqxs.onrender.com/houses/${id}`).then(()=>fetchdata())
	} catch (error) {
		
	}
}
useEffect(()=>{
	fetchdata()
},[query,sortby])
	return (
		<div>
			<Stack spacing={5}>
				<div className="sortingButtons">
				<Button mx={1} onClick={()=>{setsortby("asc"); setbutton2(!button2);setbutton1(!button1)} } colorScheme={button1?"red":"gray"} className="sortByRentAsc">Sort by Asc</Button>
					<Button onClick={()=>{setsortby("desc"); setbutton1(!button1);setbutton2(!button2)}} colorScheme={button2?"red":"gray"} className="sortByRentDesc" >
						Sort by Desc
					</Button>
				</div>

				<Center>
					<Input
					value={query}
						width="300px"
						focusBorderColor={"lime"}
						className="searchAddress"
						placeholder="Search Data"
						onChange={(e)=>{handlechange(e)}}
					/>
				</Center>
				{
					userdata.isLoading?(<Spinner m="auto" />):
				
				<Center>
					<TableContainer>
						<Table
							variant="striped"
							p={3}
							className="table"
							colorScheme={"cyan"}
						>
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Owner's Name</Th>
									<Th>Address</Th>
									<Th>Area Code</Th>
									<Th>Rent</Th>
									<Th>Bachelor Tenants Allowed</Th>
									<Th>Married Tenants Allowed</Th>
									<Th>Delete</Th>
								</Tr>
							</Thead>
							
							{
								
								userdata.data?.map((ele,i)=>{
									return(
										<Tbody key={i}> 
											<Tr className="houseDetails">
												<Td className="name">{ele.name}</Td>
												<Td className="ownersName">{ele.ownerName}</Td>
												<Td className="address">{ele.address}</Td>
												<Td className="areaCode">{ele.areaCode}</Td>
												<Td className="rent">{ele.rent}</Td>
												<Td className="isBachelorAllowed">{ele.isBachelorAllowed?"Yes":"NO"}</Td>
												<Td className="isMarriedAllowed">{ele.isMarriedAllowed?"Yes":"NO"}</Td>
												<Td onClick={()=>handledelete(ele.id)} className="delete"><CloseButton /></Td>
											</Tr>
										</Tbody>
									)
								})
							}
							
						</Table>
					</TableContainer>
				</Center>
}
			</Stack>
		</div>
	);
}
