// import ScrollSpy from "../components/src";
import ScrollSpy from "react-ui-scrollspy";



const Demo1 = () => {
    const onPress = (e) => {
        e.preventDefault();
        const target = window.document.getElementById(
          e.currentTarget.href.split("#")[1]
        );
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a onClick={(e) => onPress(e)} href="#orange">
          <div data-to-scrollspy-id="orange" className={"ss-item"}>
            orange
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#brown">
          <div data-to-scrollspy-id="brown" className={"ss-item"}>
            brown
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#blue">
          <div data-to-scrollspy-id="blue" className={"ss-item"}>
            blue
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#green">
          <div data-to-scrollspy-id="green" className={"ss-item"}>
            green
          </div>
        </a>
      </div>
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <div id="orange" backgroundColor={"orange"}>
          <h1>Orange</h1>
        </div>
        <div id="brown" backgroundColor={"brown"}>
          <h1>Brown</h1>
        </div>
        <div id="blue" backgroundColor={"blue"}>
          <h1>Blue</h1>
        </div>
        <div id="green" backgroundColor={"green"}>
          <h1>Green</h1>
        </div>
      </ScrollSpy>
    </>
  );
};

export default Demo1;