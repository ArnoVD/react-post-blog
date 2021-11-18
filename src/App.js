import Header from './Header';
import Nav from './Nav';
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import EditPost from './EditPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Switch } from 'react-router-dom';
import { DataProvider } from './context/DataContext'

function App() {
    return (
    <div className="App">
        {/*DataProviders provides all the props for every component*/}
        <Header title='React JS Blog'/>
        <DataProvider>
            <Nav />
            <Switch>
                {/*If the component has no props it can be defined as below*/}
                <Route exact path='/' component={Home} />
                <Route exact path='/post' component={NewPost} />
                <Route path='/edit/:id' component={EditPost} />
                <Route path='/post/:id' component={PostPage} />
                <Route path="/about" component={About} />
                <Route path="*" component={Missing} />
            </Switch>
        </DataProvider>
        <Footer />
    </div>
  );
}

export default App;
