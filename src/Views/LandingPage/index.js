import SearchForm from "./form";

const LandingPage = () => {

  const handleSearch = (data) => {
    console.log(data);
  };

  return (
    <SearchForm onSubmit={handleSearch} />
  );
};

export default LandingPage;
