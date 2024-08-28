
/**
 * Controls scrolling behavior of the document body.
 * @param {boolean} stopScroll - Boolean flag to determine whether scrolling should be stopped.
 */
export function stopScrolling(stopScroll: boolean) {
  // Get the body element
  let body = document.getElementsByTagName("body");

  // Check if scrolling should be stopped or allowed based on the value of stopScroll
  if (stopScroll === stopScroll) {
    // If stopScroll is true, set overflow to "hidden" to stop scrolling
    body[0].style.overflow = "hidden";
  } else {
    // If stopScroll is false, set overflow to "auto" to allow scrolling
    body[0].style.overflow = "auto";
  }
}



// ----------------------------------------||-----------------------------------------------



/**
 * Function to toggle the height of the sibling element based on the current state.
 * If the sibling element exists and is valid, it either sets its height to its scroll height
 * or removes the height style attribute to reset it.
 * Logs an error if the sibling element is not found or if an error occurs.
 * 
 * @param {Event} e - The event object triggering the function.
 */

export function sidebarAccordion(e: any) {
  try {
    // Get the sibling element
    let sibling = e.currentTarget.nextSibling;

    // Check if the sibling element exists and is valid
    if (sibling) {
      // Get the height of the sibling element
      let getHeight = sibling.scrollHeight;

      // Check if the style attribute is set
      if (!sibling.getAttribute("style")) {
        // Set the height of the sibling element
        sibling.style.height = `${getHeight}px`;
      } else {
        // Remove the style attribute to reset the height
        sibling.removeAttribute("style");
      }
    } else {
      // Show an error message if the sibling element is not found or invalid
      console.error("Sibling element not found or invalid.");
    }
  } catch (error) {
    // Log an error message if an exception occurs
    console.error("An error occurred:", error);
  }
}

// ----------------------------------------||-----------------------------------------------

/**
 * Rotates the last child element of the target element by the specified degree.
 * @param {any} e - The event object or target element.
 * @param {number} deg - The degree to rotate the element (in degrees).
 */

export function rotate(e: any, deg: number) {
  // Get the last child element of the target element
  let currentvalue = e.currentTarget.lastChild;

  // Check if the style attribute is not set
  if (!currentvalue.getAttribute("style")) {
    // Set the transform style to rotate by the specified degree
    currentvalue.style.transform = `rotate(${deg}deg)`;
  } else {
    // Remove the style attribute to reset the rotation
    currentvalue.removeAttribute("style");
  }
}

// ----------------------------------------||-----------------------------------------------


/**
 * Rotates the first child element of the target element by the specified degree.
 * @param {any} e - The event object or target element.
 * @param {number} deg - The degree to rotate the element (in degrees).
 */
export function firstrotate(e: any, deg: number) {
  // Get the first child element of the target element
  let currentvalue = e.currentTarget.firstChild;

  // Check if the style attribute is not set
  if (!currentvalue.getAttribute("style")) {
    // Set the transform style to rotate by the specified degree
    currentvalue.style.transform = `rotate(${deg}deg)`;
  } else {
    // Remove the style attribute to reset the rotation
    currentvalue.removeAttribute("style");
  }
}
