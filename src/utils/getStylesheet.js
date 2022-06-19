export function getStylesheet (styles) {
    const stylesheet = document.createElement('style')
    stylesheet.innerHTML = styles.toString();
    return stylesheet
}