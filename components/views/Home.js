import html from "html-literal";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Icon } from "leaflet";

export default state => html`
  <section id="jumbotron">
  <header id="welcome">
          <div id="title">
            <h1>Welcome to Ocean Hazard Checker</h1>
          </div>
          <div>
            <h3>
              Please use links below to find real time conditions of beaches
              located on military bases in Hawaii
            </h5>
          </div>
        </header>    <!-- <a href="index.html">"Call to Action" "Button"</a> -->

    <div>
      ${state.baseInfo.map(
        (el, idx) =>
          `<div id=${idx}>${el.desc} <button onclick="deleteTask()"> more info </button> </div>`
      )}
    </div>
    <div>
    The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </div>
  </section>
`;
