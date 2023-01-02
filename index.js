import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
// import { doc } from "prettier";
// console.log(store);
import axios from "axios";
import dotenv from "dotenv";
import moment from 'moment';
moment().format();


const startDate = moment.utc('2022-12-08T12:23:34Z');
console.log('startdate', startDate.format())

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  console.log('state', state)
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("messageButton").classList.toggle("hidden--mobile");
  });

  //filter beach messages
//   let beachVar = document.querySelector("#filterBeach");
//   let outputVar = document.querySelector("#output");

//   console.log("beachVar", beachVar);
//   beachVar.addEventListener("change", function() {
//     console.log(beachVar.options[beachVar.selectedIndex].value);
//     const selected = beachVar.options[beachVar.selectedIndex].value;
//     console.log("selected", selected);

//     const tester = state.messages.filter((el) => el.beach === selected);
//     console.log("tester", tester);

//     if (tester.length > 0) {
//       outputVar.innerHTML = tester
//         .map((el) => `<div> ${el.message} </div>`)
//         .join("");
//     } else {
//       outputVar.innerHTML = `  <div> No messages <div>
// `;
//     }
//   });
  if (state.view === "Message") {
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();

      // const inputList = event.target.value

      const message = document.getElementById("beachMessage");
      const beachChoice = document.getElementById("beachChoice");

      console.log("mesage", message.value);
      console.log("beachChoice", beachChoice.value);

      // console.log("Input Element List", inputList);

      const messages = [];

      const requestData = {
        beachChoice: beachChoice.value,
        message: message.value,
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.MESSAGE_API_URL}/message`, requestData)
        .then((response) => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          // store.Seemessages.message.push(response.data);
          console.log("res from axios", response);
          router.navigate("/");
        })
        .catch((error) => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        Promise.all(
          store.Home.baseInfo.map(async (item) => {
            try {
              const {
                data: { wind },
              } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${item.lat}&lon=${item.long}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
              );

              return wind;
            } catch (err) {
              return err;
            }
          })
        )
          .then((response) => {
            console.log("response", response);

            const windConvertFunc = (el) => {
              console.log(el);
              if (el < 45 && el > 315) {
                return "North";
              } else if (el > 46 && el < 135) {
                return "East";
              } else if (el > 136 && el < 220) {
                return "South";
              } else {
                return "West";
              }
            };

            const newArr = response.map((obj) => {
              if (obj.deg) {
                return { ...obj, deg: windConvertFunc(obj.deg) };
              }

              return obj;
            });

            store.Home.weather = newArr;

            done();
          })
          .catch((err) => console.log(err));
        break;
      // New Case for Pizza View
      case "Seemessages":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.MESSAGE_API_URL}/messages`)
          .then((response) => {
            // Storing retrieved data in state
            store.Seemessages.messages = response.data;
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
});

router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      render(store[view]);
    },
  })
  .resolve();
