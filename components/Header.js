import html from "html-literal";

export default state =>
  // console.log('header.sstate', header.state)
  html`
    <header>
      <h1>${state.header}</h1>
    </header>
  `;
