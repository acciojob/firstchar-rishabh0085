function firstChar(text) {
  // Trim the input string to remove leading and trailing spaces
  const trimmedText = text.trim();
  
  // Check if the trimmed string is empty
  if (trimmedText === '') {
    return '';
  }
  
  // Return the first character of the trimmed string
  return trimmedText.charAt(0);
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
