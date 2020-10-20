import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      HomePage
    </div>
  )
}
export const CatDetail = () => {
  return (
    <div>
      CatDetail
    </div>
  )
}
const CatPage = () => {
  return (
    <div>
      CatPage
    </div>
  )
}

const BlogPage = () => {
  const blogData = [{
    blogTitle: "poop1",
    blogDescrip: "poop1 decrip",
    blogBody: "lore m1dsfc sdfsdfsd fsdf sdfsdfs df sdf sdfs fsdf ds fsdf sdf"
  }, {
    blogTitle: "poop2",
    blogDescrip: "poop2 decrip",
    blogBody: "lore m1dsfc sdfsdfsd fsdf sdfsdfs df sdf sdfs fsdf ds fsdf sdf"
  }, {
    blogTitle: "poop3",
    blogDescrip: "poop3 decrip",
    blogBody: "lore m1dsfc sdfsdfsd fsdf sdfsdfs df sdf sdfs fsdf ds fsdf sdf"
  }
  ];
  return (
    blogData.map((blogItem) => <li>{blogItem.blogTitle}</li>)
  );
}
const Nav = () => {
  return (
    <nav>
      <h1>

      </h1>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/cats'><li>Cats</li></Link>
        <Link to='/blog'><li>Blog</li></Link>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cats' component={CatPage} />
        <Route exact path='/cats/:id' component={CatDetail} />
        <Route exact path='/blog' component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;
