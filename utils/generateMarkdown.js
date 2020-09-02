// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.description}
  # ${data.installation}
  # ${data.usage}
  # ${data.contributors}
  # ${data.tests}
  # ${data.license}
  # ${data.question}
  # ${data.questions}
`;
}

module.exports = generateMarkdown;
