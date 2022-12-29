import html from "html-literal";

export default state => html`
  ${console.log("state", state)}
  <section id="jumbotron">
    <header id="welcome">
      <div id="title">
        <h1>Welcome to Ocean Hazard Checker</h1>
      </div>
      <div>
        <h3>
          Please use links below to find real time conditions of beaches located
          on military bases in Hawaii or please leave a message about the beach. 
        </h3>
        <div><a href="/message" title="message"
       data-navigo>Leave a message</a></div>

      </div>
    </header>
  </section>

  <div id="beach">
    ${state.baseInfo.map(
      (el, idx) =>
        `<div id= 'beachCollections'>
        <h3 id='beachDesc'>${el.desc}</h3>
        <div id='beachInfo'>${el.beachInfo}</div>
       <div id='picDiv'>
       <img  src=${el.photo} id ='image'>
       <div>
        Today the wind is coming from the ${state.weather[idx].deg}
        and is blowing ${state.weather[idx].speed} mph.
      </div>
       </div>

        <hr></div>`
    )}
  </div>
  <hr />
`;
