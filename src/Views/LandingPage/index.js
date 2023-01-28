import { useForm } from "react-hook-form";
import SearchForm from "./form";

const LandingPage = () => {
  const { control, handleSubmit, unregister } = useForm();

  const handleSearch = (data) => {
    console.log(data);
  };

  return <SearchForm onSubmit={handleSubmit(handleSearch)} control={control} unregister={unregister} />;
};

export default LandingPage;
