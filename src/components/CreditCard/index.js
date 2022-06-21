export function CreditCard(props) {
  return (
    <ul>
      <li>{props.type};</li>
      <li>{props.number.slice(-4)};</li>
      <li>{props.expirationMonth};</li>
      <li>{props.expirationYear};</li>
      <li>{props.bank};</li>
      <li>{props.owner};</li>
    </ul>
  );
}
