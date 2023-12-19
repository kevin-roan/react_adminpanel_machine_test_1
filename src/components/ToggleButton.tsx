import "../styles/components/togglebutton.scss";

function ToggleButton() {
  return (
    <div className="toggle_container">
      <div className="toggle_option">
        <h6>Montly</h6>
      </div>
      <div className="toggle_option">
        <h6>Annually</h6>
      </div>
    </div>
  );
}

export default ToggleButton;
