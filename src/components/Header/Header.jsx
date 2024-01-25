import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div id="header">
      <img className="logo" src={logo} alt="logo" />
      <h1>Investment Planner</h1>
    </div>
  );
};

export default Header;
