export function BoxColor(props) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    >
      <h1>{`rgb(${props.r},${props.g},${props.b})`}</h1>
    </div>
  );
}
