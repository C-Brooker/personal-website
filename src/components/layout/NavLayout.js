import AboutMeNav from "./AboutMeNav";

function NavLayout(props) {
  return (
    <div>
      <AboutMeNav />
      <main>{props.children}</main>
    </div>
  );
}

export default NavLayout;
