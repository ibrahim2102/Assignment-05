1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   
getElementById:
Selects only one element by its unique id.
getElementsByClassName:
Selects all elements with a given class name.
querySelector:
Selects the first element that matches a CSS selector like id, class, tag etc.
querySelectorAll:
Selects all elements that match a CSS selector.



2. How do you create and insert a new element into the DOM?


document.createElement() is used to create a new element into DOM.
appendChild puts the new element at the end of a parent element.



3. What is Event Bubbling and how does it work?


Event Bubbling is a way events move through the DOM when something is triggered (like a click).

When click (or trigger an event) on an element, that event first runs on the innermost target element.

Example: clicking a button inside a div. The button is the target.

After the event is handled on the target, it “bubbles up” to its parent element.

Then it continues to bubble up to higher ancestors (like <body> and <html>), until it reaches the document root.



4. What is Event Delegation in JavaScript? Why is it useful?


Event Delegation is a JavaScript technique where you attach a single event listener to a parent element, and that listener can handle events triggered by its child elements.
Instead of putting an event listener on every child, you “delegate” the responsibility to the parent.



5. What is the difference between preventDefault() and stopPropagation() methods?

 preventDefault() → Stops the default browser action (form submit, link navigation, right-click menu, etc.).
 stopPropagation() → Stops the event from bubbling up to parent elements.
