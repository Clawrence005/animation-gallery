import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Nav from './components/Nav'
import './components/BlogPageDetail/style.css';

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

  // const pageFilter = blogData.filter(x => x === match.params.id)
  // console.log(pageFilter)
  return (
<<<<<<< HEAD
    <div className='blog-detail-wrapper'
    >
      {blogData.filter(person => person.blogTitle === match.params.id).map(filteredPerson => (
        <div key={filteredPerson.blogTitle}>
          <h2 className='blog-title'>{filteredPerson.blogTitle}</h2>
          <img src={filteredPerson.blogImage} alt={filteredPerson.blogTitle} className="blog-image" />
          <p>{filteredPerson.blogDescrip}</p>
          <div className="blog-body">
            <p>{filteredPerson.blogBody}</p>
          </div>
        </div>

=======
    <div blog-detail-wrapper>
      {blogData.filter(person => person.blogTitle === match.params.id).map(filteredPerson => (
        <div key={filteredPerson.blogTitle}>
          <h2>{filteredPerson.blogTitle}</h2>
          <img src={filteredPerson.blogImage} alt={filteredPerson.blogTitle} width="444px" />

          <p>{filteredPerson.blogDescrip}</p>
          <p>{filteredPerson.blogBody}</p>
        </div>
>>>>>>> 5ddc94a027a946248a05efb0dbad4dfb7fd787fd
      ))}

    </div>
  )
}
const blogData = [{
  blogTitle: "Dog",
  blogDescrip: "A dog is a 4 legged creature.",
  blogImage: "/assets/cat-image.jpg",
  blogBody: " Lorem Dog ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}, {
  blogTitle: "Ferret",
  blogDescrip: "A ferret is a cat snake.",
  blogImage: "/assets/cat-image.jpg",
  blogBody: "Ferret lorem m1dsfc sdfsdfsd fsdf sdfsdfs df sdf sdfs fsdf ds fsdf sdf ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat"
}, {
  blogTitle: "Plant",
  blogDescrip: "A plant is now a pet too!",
  blogImage: "/assets/cat-image.jpg",
  blogBody: "lore m1dsfc sdfsdfsd fsdf sdfsdfs df sdf sdfs fsdf ds fsdf sdf"
}, {
  blogTitle: "Cat",
  blogDescrip: "a cat has four legs too and makes weird sounds",
  blogImage: "/assets/cat-image.jpg",
  blogBody: "lore m1dsfc sdfsdfsd fsdf sdfsdfs df sdf sdfs fsdf ds fsdf sdfnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur s"
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

function App() {
  return (
    <Router>
      <Nav />
      < main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/cats' component={CatPage} />
          <Route exact path='/cats/:id' component={CatDetail} />
          <Route exact path='/blog' component={BlogPage} />
          <Route exact path='/blog/:id' component={BlogPageDetail} />
          <Route component={PageNotFound} />

        </Switch>
      </ main>
    </Router>

  );
}

export default App;
