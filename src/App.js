import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeLogin from './pages/EmployeeLogin';
import About from './pages/About';
import Contact from './pages/Contact';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeList from './components/designedpages/EmployeeList';
import AddEmployee from './components/designedpages/AddEmployee';
import AddStakeholder from './components/designedpages/AddStakeholder';
import StakeholderList from './components/designedpages/StakeholderList';
import AddNews from './components/designedpages/AddNews';
import NewsFeed from './components/designedpages/NewsFeed';
import AddComment from './components/designedpages/AddComment';
import ProjectList from './components/designedpages/ProjectList';
import UploadImgFile from './components/designedpages/UploadImgFile';
import PdfLoader from './components/designedpages/PdfLoader';
import ImageLoader from './components/designedpages/ImageLoader';
import ProjectDetails from './components/designedpages/ProjectDetails';
// import CurrentProjectListPage from './components/designedpages/CurrentProjectListPage';
// import ShowNews from './components/designedpages/ShowNews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<EmployeeLogin/>}/>
        <Route path="/aboutUs" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/employeedashboard" element={<EmployeeDashboard/>}/>
        <Route path="/myprofile" element={<EmployeeProfile/>}/>
        <Route path="/emp-list" element={<EmployeeList/>}/>
        <Route path="/add-emp" element={<AddEmployee/>}/>
        <Route path="/add-stakeholder" element={<AddStakeholder/>}/>
        <Route path="/stakeholder-list" element={<StakeholderList/>}/>
        {/* ************NEWS*********** */}
        <Route path="/add-news" element={<AddNews/>}/>
        <Route path="/news-feed" element={<NewsFeed/>}/>
        <Route path="/add-comment" element={<AddComment/>}/>
        {/* **********PROJECT********** */}
        <Route path="/project-list" element={<ProjectList/>}/>
        <Route path="/project-details" element={<ProjectDetails/>}/>
        <Route path="/upload-image" element={<UploadImgFile/>}/>
        <Route path="/image-loader" element={<ImageLoader/>}/>
        <Route path="/pdf-loader" element={<PdfLoader/>}/>
        {/* <Route path="/show-news" element={<ShowNews/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
