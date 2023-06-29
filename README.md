### Use of Chakra UI is compulsory in this Assignment

## React Tenant Dashboard

#### Problem Statement

Create the following application with the boilerplate code provided.

## Submission Instructions [Please note]

## Maximum Marks - 18

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Checks for the initial store state - 1 mark
 ✅ check the reducer function for GET_HOUSE_DETAILS_REQUEST state - 1 mark
 ✅ checks reducer function for GET_HOUSE_DETAILS_SUCCESS - 2 marks
 ✅ checks reducer function for GET_HOUSE_DETAILS_FAILURE - 1 mark
 ✅ should make GET request and render initial houses data  - 2 marks
 ✅ should sort the data in ascending order by rent - 1 mark
 ✅ should sort the data in descending order by rent - 1 mark
 ✅ should fetch the search results according to the search query param- 2 marks
 ✅ should fetch the search results according to the search query param and sort the search results - 2 marks
 ✅ should make DELETE request successfully - 2 marks
 ✅ Should make a POST request to add details and update the dom successfully - 2 marks
```

## Installation

- Use node version V16.16.0
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Make sure that the json-server is up and running at port `8080`
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server URL where ever you use `http://localhost:8080`

### Not following the above instructions will lead your test cases to fail

## Problem

**_Note_**: Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to fetch data on this website.

## Understanding Component Structure

- Components
  - Dashboard/ Dashboard.jsx
  - Dashboard/initialState.js
  - Dashboard/ reducer.js
  - Form/ Form.jsx
- App

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json]
  - Initial House Details should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and don't create new data. Changing data might result in giving you zero marks`

## Features to build

Create a react application for finding houses on rent, the user should be able to visit all the details in tabular format. The user should be able to sort the results by rent. The user should be able to search by any keyword, sorting should happen on searched results also. (sorting and searching should work together).

### App.js

- This component should have the toggle button
- The button text should toggle between `View Dashboard` and `View Form`.
- By default, the text should be `View Form` and the component rendered should be `Dashboard`
- On clicking `View Form` the text on the button should be changed and the `Form ` component should be visible.

### Dashboard.jsx
- use Axios to make the API request
- On load make a GET request to the `/houses` endpoint and display all the details of houses in tabular format (use Chakra UI)
- manage the state of the data fetched from the API and fetch call status (Request, success,failure) in the reducer. (use useReducer hook)
- search query and sort states can be handled by useState Hook.
- the initialState should be 

  ```
  const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  };


  The above initialState is already mentioned in the initialState.js file in the boilerplate.
  ```

- reducer.js file is provided in the boilerplate, complete the reducer function and import to Dashboard
- Maintain the Request, success, and failure status API using the following action types
  - "GET_HOUSE_DETAILS_REQUEST"
  - "GET_HOUSE_DETAILS_SUCCESS"
  - "GET_HOUSE_DETAILS_FAILURE"

#### Make sure to use the above action types as it is (no spelling mistakes or case change)
- dispatch `GET_HOUSE_DETAILS_REQUEST` when the API request is made.
- dispatch `GET_HOUSE_DETAILS_SUCCESS` along with the payload when the API call is successful.
- dispatch `GET_HOUSE_DETAILS_FAILURE` when the API call is failure/unsuccessful.

- Update the reducer state(status of isLoading,data and isError)  as well, with the appropriate data in case of REQUEST, SUCCESS, or FAILURE of GET request.

- After a successful GET request, map through the data present in the reducer.

- Every house has the following information:

```
Name
Owners name
Address
Area code
rent
isBachelorAllowed
isMarriedAllowed
```

- Whenever the isLoading is true; Spinner component from Chakra UI should be displayed else the data in tabular format should be displayed. Please note that search bar should be visible all the time .
- There should be two buttons `Sort by Asc` and `Sort by Desc` in Dashboard to sort the results by `rent`

### Dashboard (on landing the dashboard GET `/houses` (no other query params))
![](https://i.imgur.com/dnXSnBV.png)

#### Sort By descending (on clicking the Sort by Desc button (_sort and _order query parms should be there))

![](https://i.imgur.com/asiK7A9.png)

- On clicking the sort button make an API request send the respective query params and display the results
- Logic for sorting ascending and descending by rent should be handled by the json server itself (and not on frontend) (Reference: `https://github.com/typicode/json-server`)

#### Sort By ascending  (on clicking the Sort by Asc button (_sort and _order query params should be there))

![](https://i.imgur.com/qMdBP6l.png)

- The user should be able to do a keyword search from the data of the house. Use query params to achieve this When the user types anything in the input tag to search- show only the filtered results in the table

- make an API call to this endpoint `/houses?q=<search-keyword>`

#### Search by keyword patna  (on changing the search keyword  (q query parms should be there))

![](https://i.imgur.com/RLgFtB9.png)

- Ensure that sorting and filtering by search query work together

#### Sort the search results   (search and sort together (q,_sort and _order query parms should be there))

![](https://i.imgur.com/9ysLK59.png)

- Each entry should have a Delete button
- On clicking the delete button make a DELETE request to `/houses/<id>`
- render the updated list to the dom. (deleted house entry should be removed from the page as well)

### Form.jsx

- There is a toggle form button, clicking which a form should be rendered which will take input from the user for adding a house with the data points mentioned above

- make a POST request to the `/houses` end point with the fields mentioned in the boilerplate.
- The initial form data should have the following keys

  ```
  {
  	name: "",
  	ownerName: "",
  	address: "",
  	areaCode: "",
  	rent: "",
  	isBachelorAllowed: false,
  	isMarriedAllowed: false,
  }
  ```
  - the id will be generated by json-server (you don't require to add it)
  - no need to use useReducer for Form.
  - once the post is done , clicking on View Dashboard will take the user to Dashboard and the recently added data should be visible in the table.
  ![](https://i.imgur.com/H7N5fKF.png)
 
## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
