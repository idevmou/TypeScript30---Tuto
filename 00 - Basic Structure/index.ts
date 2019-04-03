const message: HTMLElement = document.getElementById("message");

message.innerHTML = hello("Son");

function hello(word: string = "world"): string {
  return `Hello ${word}! `;
}
