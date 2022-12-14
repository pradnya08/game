import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Leaderboard from "./pages/Leaderboard";
import HowToPlay from "./pages/HowToPlay";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<HowToPlay />} />
					<Route path='/profile' element={<PrivateRoute />}>
						<Route path='/profile' element={<Profile />} />
					</Route>
					<Route path='/leaderboard' element={<PrivateRoute />}>
						<Route path='/leaderboard' element={<Leaderboard />} />
					</Route>
					<Route path='/game' element={<PrivateRoute />}>
						<Route path='/game' element={<Home />} />
					</Route>
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
			</Router>
			<ToastContainer
				position='bottom-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</>
	);
}

export default App;
