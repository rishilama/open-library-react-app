import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import List from "./pages/List";
import { SidebarVisibilityContextProvider } from "./store/SidebarVisibilityContext";
import UserContextProvider from "./store/userContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";



function App() {
  return (
    <div className="page">
      <UserContextProvider>
      <Router>
        <SidebarVisibilityContextProvider>
          <Header />
          <Backdrop />
          <Sidebar />
        </SidebarVisibilityContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/book" exact component={Detail} />
          <Route path="/book/:id" exact component={Detail} />
          <Route path="/list" component={List} />
          <Route path="/create" component={Create} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
      <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
