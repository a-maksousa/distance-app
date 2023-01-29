import Banner from "Components/Banner";
import { createSearchParams, useNavigate } from "react-router-dom";
import SearchForm from "./form";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleSearch = (data) => {
    navigate({ pathname: "/search", search: `?${createSearchParams(data)}` });
  };

  return (
    <>
      <Banner src="/img/banner.jpg" />
      <SearchForm onSubmit={handleSearch} />
    </>
  );
};

export default LandingPage;
