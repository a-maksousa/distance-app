import { useForm } from "react-hook-form";
import SearchForm from "./form";

const LandingPage = () => {
  const { control, handleSubmit } = useForm();

  const handleSearch = (data) => {
    console.log(data);
  };

  return <SearchForm onSubmit={handleSubmit(handleSearch)} control={control} />;
};

export default LandingPage;
