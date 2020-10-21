import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

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
//doesnt work yet because params isnt checking if something is at the route
const PageNotFound = () => {
  return (
    <div>
      <p>
        Page Not Found
  </p>
    </div>

  )
}

const BlogPageDetail = ({ match }) => {

  const pageFilter = blogData.filter(x => x === match.params.id)
  console.log(pageFilter)
  return (
    <div >
      {blogData.filter(person => person.blogTitle === match.params.id).map(filteredPerson => (
        <li key={filteredPerson.blogTitle}>
          <h2>{filteredPerson.blogTitle}</h2>
          <p>{filteredPerson.blogDescrip}</p>
          <p>{filteredPerson.blogBody}</p>
        </li>
      ))}

    </div>
  )
}
const blogData = [{
  blogTitle: "blogTitle1",
  blogDescrip: "blog decrip 1",
  blogBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}, {
  blogTitle: "blogTitle2",
  blogDescrip: "blog decrip2",
  blogBody: "lore m1dsfc sdfsdfsd fsdf sdfsdfs df sdf sdfs fsdf ds fsdf sdf"
}, {
  blogTitle: "blogTitle3",
  blogDescrip: "blog decrip3",
  blogBody: "lore m1dsfc sdfsdfsd fsdf sdfsdfs df sdf sdfs fsdf ds fsdf sdf"
}, {
  blogTitle: "blogTitle4",
  blogDescrip: "blog decrip4",
  blogBody: "lore m1dsfc sdfsdfsd fsdf sdfsdfs df sdf sdfs fsdf ds fsdf sdf"
}
];
const BlogPage = () => {
  return (
    blogData.map((blogItem) => <div key={blogItem.blogTitle}>
      <li>
        <p >{blogItem.blogTitle}</p>
        <p >{blogItem.blogDescrip}</p>
        <p >{blogItem.blogBody}</p>
      </li>
      <Link to={`/blog/${blogItem.blogTitle}`}>{blogItem.blogTitle}</Link>

    </div>
    )
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
        <Route exact path='/blog/:id' component={BlogPageDetail} />
        <Route component={PageNotFound} />

      </Switch>
    </Router>
  );
}

export default App;
