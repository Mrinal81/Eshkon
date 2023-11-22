import Search from '../components/Search'
const Homepage = ({onSearch}) => {
    return (
      <div>
        <h1 className="title-heading">
          <h3>Click  On Post to see Blogs and <br />Click on each Blog to see Full Description <br /> Blog.</h3>
          <Search onSearch={onSearch}/>
        </h1>
      </div>
    );
  };
  
  export default Homepage;