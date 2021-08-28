import RadioButtons from "../utility/RadioButtons";

function Buttonfunctionality(props) {
  function NumOfButtons(props) {
    const numOfButtons = Math.ceil(props / 4);
    let arr = [];
    for (let i = 0; i < numOfButtons; i++) {
      arr.push(<button id={i}>{i + 1}</button>);
    }
    return arr;
  }

  return (
    <div>
      {/* <div>{NumOfButtons(props.buttons)}</div> */}
      <div>Henlo</div>
      <RadioButtons />
    </div>
  );
}

export default Buttonfunctionality;
