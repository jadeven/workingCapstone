import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <header id="welcome">
      <div id="title">
        <h1>Welcome to Ocean Hazard Checker</h1>
      </div>
      <div>
        <h3>
          Please use links below to find real time conditions of beaches located
          on military bases in Hawaii
        </h3>
      </div>
    </header>
  </section>
  <!-- <a href="index.html">"Call to Action" "Button"</a> -->

  <div id="beach">
    ${state.baseInfo.map(
      (el, idx) =>
        `<div id= 'beachCollections'>
        <h3 id='beachDesc'>${el.desc}</h3>
        <div id='beachInfo'>${el.beachInfo}</div>
       <div id='picDiv'>
       <img  src=${el.photo} id ='image'>
       <button id='link'> Leave a message</button>
       </div>
        <hr></div>`
    )}
    <div id="weather">
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </div>
  </div>
  <hr />
`;
