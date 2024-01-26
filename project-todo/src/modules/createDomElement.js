export function createDOMElement(tag, text, attributes) {
    const element = document.createElement(tag);
    if (text) {
        element.textContent = text;
    }
    if (attributes) {
        for (const attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }
    return element;
}