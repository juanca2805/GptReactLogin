import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Index2 from "./components/main";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			
			{user && <Route path="/Main" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/index2" exact element={<Index2 />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
