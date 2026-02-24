Answers to Questions
===========================================================================
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
==> getElementById()
* Selects one element
* Uses id
* Returns a single element (or null)
* Fast

==> getElementsByClassName
* Selects elements by class
* Returns HTMLCollection
* Live collection
* Multiple elements
* Can’t use CSS selectors
* Slower compared to ID

==> querySelector
* Uses CSS selector
* Returns first matching element (Single Element)
* Very flexible
* Can select by id, class, tag, attribute

==> querySelectorAll
* Uses CSS selector
* Returns NodeList
* Static (does NOT auto-update)
* Not live collection

==> 
===========================================================================

2. How do you create and insert a new element into the DOM?
const heading = document.createElement("h2");
heading.innerText = "Hi Mehedi Hasan";
document.body.appendChild(heading);

===========================================================================

3. What is Event Bubbling? And how does it work?
Event bubbling is a fundamental mechanism in the 'DOM' where an event triggered on a specific element "bubbles up" through its parent and ancestor elements until it reaches the root.

==> How It Works
* Capturing Phase: The event travels down from the Window object to the target element.
* Target Phase: The event reaches the actual element that was clicked.
* Bubbling Phase: The event travels back up from the target element through all its parents (e.g., button → div → body → html → window).

===========================================================================

4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique where you attach a single event listener to a parent element to manage events for all of its children, rather than attaching individual listeners to every child. 

==> Why It Is Useful
* Improved Performance
* Handles Dynamic Content
* Simplified Code
* Lower Risk of Memory Leaks

===========================================================================

5. What is the difference between preventDefault() and stopPropagation() methods?
==> preventDefault()
* Browser behaviors like a link navigating to a new URL or a form refreshing the page on submission. 
* It does not stop the event from bubbling up to parent elements.
* Validating form data before it's sent to a server to prevent a page reload.

==> stopPropagation()
* The event from reaching parent or ancestor elements, which prevents their event handlers from firing.
* It does not stop the browser's default behavior (e.g., a link will still navigate).
* Clicking a "Delete" button inside a clickable "Card" component where you don't want the card's click event to trigger when you're just trying to delete it.
