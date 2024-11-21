export const formatText = (text) => {
  const lines = text.split('\n');
  let formattedText = '';

  for (const line of lines) {
    let formattedLine = line;

    // Convert text enclosed in ** to bold
    formattedLine = formattedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    if (formattedLine.startsWith('**') && formattedLine.endsWith('**')) {
      formattedText += `<h1>${formattedLine.slice(2, -2)}</h1>`;
    } else if (formattedLine.startsWith('*')) {
      formattedText += `<li>${formattedLine.slice(1).trim()}</li>`;
    } else if (formattedLine.trim() !== '') {
      formattedText += `<p>${formattedLine}</p>`;
    }
  }

  return formattedText;
};