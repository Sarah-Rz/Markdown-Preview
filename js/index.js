
updatePreview = () => {
  let previewElement = document.getElementById("preview");
  let editorValue = document.getElementById("editor").value;
  let MarkedUpHTML = marked.parse(editorValue);
  previewElement.innerHTML = MarkedUpHTML;
}

setDefault = () => {
  let defaultText = `\
# Here is an example of H1
## Here ia an example of H2

[Here is an example of Link](https://github.com/).

<dl>
<dt>Definition list</dt>
<dd>Is something people use sometimes.</dd>

<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`Here is an example of inline Code\`

\`\`\`
exampleOf = () => {
return multiLineCodeBlock;
}
\`\`\`

- Here
- is
- an 
- example
- of
- list
- Items

> Here is an example of blockquote

![example of image](//upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/330px-Alan_Turing_Aged_16.jpg)

**Here is an example of Bolded Text**`;

  let editorField = document.getElementById("editor");
  let previewElement = document.getElementById("preview");
  editorField.value = defaultText;
  previewElement.innerHTML = marked.parse(defaultText);
}