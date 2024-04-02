import {Route, Switch} from 'react-router-dom'
/** import Switch */

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        {/** add header outside the Switch */}
        <Switch>
          <Route exact path="/" component={Home} />
          {/** specify the correct path about */}
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          {/** add : before path parameter */}
          <Route path="/blogs/:id" component={BlogItemDetails} />
          {/** add NotFound route at the last */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
