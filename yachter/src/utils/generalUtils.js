export const trimWords = (text, numWords, suffix = "...") => {
    const words = text.split(' ');
    const trimmedWords = words.slice(0, numWords);
    const trimmedText = trimmedWords.join(' ');

    // Add the suffix if there are more words in the original text
    if (words.length > numWords) {
        return trimmedText + suffix;
    }

    return trimmedText;
}

// Date.now()
export const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(isoDate).toLocaleDateString(undefined, options);
};

export const getElementsWithDisplayBlock = (selector = '*') => {
    let result = Array.from(document.querySelectorAll(`${selector}`)).filter(element => {
        const computedStyle = window.getComputedStyle(element);
        return computedStyle.getPropertyValue('display') !== 'block';
    });
    
    return result;
};