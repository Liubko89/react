import { useSelector } from "react-redux";

const ReduxApp = () => {
  const myComponent = useSelector((state) => state.some.value);
  return <div></div>;
};

export default ReduxApp;
