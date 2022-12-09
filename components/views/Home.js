import html from "html-literal";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Icon } from "leaflet";

export default state => html`
  <section id="jumbotron">
    <h1>Welcome to Ocean Checker fsdjlfsdlkjfls</h1>
    <!-- <a href="index.html">"Call to Action" "Button"</a> -->

    <div class="hidden--mobile nav-links">
      ${state.baseInfo.map(
        (el, idx) =>
          `<div id=${idx}>${el.desc} <button onclick="deleteTask()"> more info </button> </div>`
      )}
    </div>
  </section>
`;
