import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div id="Footer">
        <Link to="/">Home/Gray</Link>
        <Link to="/Blue">Blue</Link>
        <Link to="/Red">Red</Link>
      </div>
    </>
  );
}
export default Footer;
