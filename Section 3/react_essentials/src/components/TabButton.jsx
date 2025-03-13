export default function TabButton({ children, onSelect, isSelected }) {
  // function handleClick() {
  //   console.log('Hello World!');
  // }

  return (
  <li>
    {/* <button onClick={handleClick}> */}
    <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
    {/* ↳ Normally in HTML we'd use just CLASS to declare a class in the element */}
    {/* ↳ But in JSX, class turns into className */}
      {children}
    </button>
  </li>
  );
}