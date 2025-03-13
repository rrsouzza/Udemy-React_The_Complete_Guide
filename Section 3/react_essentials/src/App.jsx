import { useState } from "react";
// ↳ functions that start with "use" are called React Hooks
// ↳ React Hooks must not be called outside of React component functions
// ↳ React Hooks must not be called in nested code statements (e.g, inside of if-statements)

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  // ↳ useState() always returns exactly two elements.
  // ↳ The first element is the current state value
  // ↳ The second element is a function we can use to tell React to re-execute the component in which the useState() was called. We can use it to change something in the UI, for example.
  // ↳ State updates lead to new state values. Meaning, whenever the second element (update function) is called, the new state can be accessed through the first element (current state).
  // ↳ The argument passed to the useState() function will be the initial value for this state.

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  // ↳ This function is declared here and then passed to the TabButton component.
  /* ↳
    This way, we can listen to the onClick function inside the TabButton component,
    but since the button's actions should change the HTML code in the App component,
    we can declare the listening function here, and then change the HTML from here whenever
    the button is clicked.
  */

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}

            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* ↳ This would be a more intelligent way of outputting data from an array */}
            {/* ↳ In case someday that array (the origin of the data) were to change, thus having more or less items, this way we can make sure the UI wouldn't break because of it */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton onSelect={handleSelect}>Components</TabButton> */}
            {/* ↳ The example above is the standard way of assigning a function to a component's event */}
            {/* ↳ The function should be passed without () because it should only be run when the event happens. */}
            {/* ↳ If it where to be passed with (), the function would be called once the code was "read". */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            {/* ↳ By calling an anonymous arrow function first, we can call our own function (handleSelect) and pass arguments to it */}
            {/* ↳ This way, the arrow function will be "read" once the code is compiled, but it won't be executed once it does. It will only be executed once the event happens. */}

            {/* <TabButton onSelect={function() { handleSelect('components') }}>Components</TabButton> */}
            {/* ↳ Above is an example of an anonymous function. This also works, but an arrow function is more concise and easier to read. */}

            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>

          {/* {!selectedTopic ? <p>Please select a topic.</p> : null} */}
          {/* {!selectedTopic && <p>Please select a topic.</p>} */}
          {/* ↳ These are two examples of conditionally displaying some HTML content */}

          {/* {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null} */}
          {/* ↳ This is another example of how you could conditionally display some HTML content */}

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
