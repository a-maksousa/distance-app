import { createSearchParams, useNavigate } from "react-router-dom";
import SearchForm from "./form";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleSearch = (data) => {
    navigate({ pathname: "/search", search: `?${createSearchParams(data)}` });
  };

  return <SearchForm onSubmit={handleSearch} />;
};

export default LandingPage;
