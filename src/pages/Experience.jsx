export default function Experience() {
  const handleInputChange = (event) => {
    const input = event.target;
    const asterisk = input.nextElementSibling;
    if (input.value === "") {
      asterisk.style.display = "block";
    } else {
      asterisk.style.display = "none";
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        style={{
          color: "black",
        }}
        placeholder="Name"
        onChange={handleInputChange}
      />
      <span
        style={{
          display: "block",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      >
        *
      </span>
    </div>
  );
}
