import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './Landingpage';
import Signup from './Signup';
import Header from './Header';
import Footer from './Footer';
import Otp from './Otp';
import Entries from './Entries';
import Login from './Login';
import Welcome from './Welcome';
import Choices from './Choices';
import Ch from './Ch';
import Selected from './Selected';
import Done from './Done';
import Logged from './Logged';
import Home from './Home';
import MyAccountPage from './AccountSetting';
import Forgot from './Forget';
import Reset from './Reset';
import Onetime from './OneTime';
import Profile from './Profile';
import  Experient  from './Experient';
import PDFToTextConverter from './Pdfviewer';
import YourComponent from './Testing';
// import Upload from './Upload';
import Upload1 from './Upload1';
import Images from './Images';
import FilesViewer from './Filesviewer';
import AdminButton from './AdminButton';
import Explore from './Explore'
import Ram from './p';
import Mobileheader from './Mobileheader';
import { Userpage } from './Userpage';
import Pro from './Pro';
import { Myprofile } from './Myprofile';
import MyComponent from './MyComponent';
import Terms from './Term';
import Help from './Help';
import Privacy from './Privacy';
import Home1 from './Home1';

function App() {
  return (
  
     <Routes>
      <Route path="/" element={<Landingpage />} />
        <Route path="landing" element={<Landingpage />} />
        <Route path="Signup" element={<Signup />} />
		<Route path='Account' element={<MyAccountPage />}/>
        <Route path="Header" element={<Header />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="Otp" element={<Otp />} />
        <Route path="Entries" element={<Entries />} />
        <Route path="Login" element={<Login />} />
        <Route path="Welcome" element={<Welcome />} />
        <Route path="Choices" element={<Choices />} />
        <Route path="Ch" element={<Ch />} />
        <Route path="Selected" element={<Selected />} />
        <Route path="Done" element={<Done />} />
		  <Route path="Logged" element={<Logged />} />
		  <Route path='Home' element={<Home />} />
		  <Route path='Forget' element={<Forgot />} />
		  <Route path='Reset' element={<Reset />} />
		  <Route path='Onetime' element={<Onetime />} />
		  <Route path='exp' element={<Experient />} />
		  <Route path='pdf' element={<PDFToTextConverter/>} />
		  <Route path='profile' element={<Profile />} />
		  <Route path='upload' element={<Upload1 />} /> 
		  <Route path='images' element={<Images />} />
		  <Route path='explore' element={<Explore/>} />
		  <Route path='file-viewer' element={<FilesViewer />} />
		  <Route path='admin-button' element={<AdminButton />} />
		  <Route path='ram' element={<Ram/> } />
		  <Route path='Mobileheader' element={<Mobileheader />} />
		  <Route path='userPage' element={<Userpage />} /> 
		  <Route path='myprofile' element={<Myprofile/>} />
		  <Route path='Pro' element={<Pro />} /> 
		  <Route path='my' element={<MyComponent />} />
		  <Route path='Terms' element={<Terms />} />
		  <Route path='Help' element={<Help />} />
		  <Route path='Privacy' element={<Privacy/>} />
		  <Route path='home1' element={<Home1 />} />
		  <Route path='t' element={<YourComponent />} />
      </Routes>

  
  );
}

export default App;
