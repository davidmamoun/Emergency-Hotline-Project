<!-- Anser All Question -->

1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById → selects a single element by its ID.

getElementsByClassName → selects multiple elements by class name and returns a live HTMLCollection.

querySelector → selects the first element that matches a CSS selector.

querySelectorAll → selects all elements that match a CSS selector and returns a static NodeList.

2. Creating and inserting a new element into the DOM

Use document.createElement() to create an element.

Add content or attributes.

Insert it into the DOM using methods like appendChild(), prepend(), or insertBefore().

3. Event Bubbling

The process where an event starts from the target element and then propagates upward through its ancestors (parent → grandparent → document).

4. Event Delegation

A technique where a single event listener is attached to a parent element to handle events for its child elements.

It is useful because it reduces the number of event listeners and works with dynamically added elements.

5. Difference between preventDefault() and stopPropagation()

preventDefault() → prevents the default browser behavior for an event.

stopPropagation() → prevents the event from propagating (bubbling or capturing) further in the DOM tree.
