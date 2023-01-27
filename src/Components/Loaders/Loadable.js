import { Suspense } from "react";
import ViewLoader from "./ViewLoader";

// project imports

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable =
  (Component, Loader = ViewLoader) =>
  (props) =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
