import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';
/*
  Just by importing the CSS file in this component,
  it is automatically applied to the final HTML code.
*/
/*
  Note: all CSS styles written in this component's CSS file will be applied to the
  whole project. (eg: if CSS is applied to the header tag in this component,
  it will affect all header tags in the entire project).
*/

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}