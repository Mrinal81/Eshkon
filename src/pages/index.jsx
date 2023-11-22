import Search from '../components/Search'
const Homepage = ({onSearch}) => {
    return (
      <div>
        <h1 className="title-heading">
          <Search onSearch={onSearch}/>
        </h1>
      </div>
    );
  };
  
  export default Homepage;