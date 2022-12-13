import Prock from "../assets/img/PROCK.png";
import Pokai from "../assets/img/Pokai.png";
import Bellows from "../assets/img/Bellows.png";
import WhitePlains from "../assets/img/WhitePlains.png";
import HickamRunway from "../assets/img/HickamRunway.png";

export default {
  header: " Page",
  view: "Home",
  weather: {},
  baseInfo: [
    {
      lat: 21.4639,
      long: -157.7667,
      desc: "Kaneohe Marine Corps Base",
      beachInfo:
        "The Kaneohe Marine Corps Base has a beach known as Pyramid Rock. The beach can have rough waves throughout the year as a result of the east trade winds. However the waves are the best during the winter months when the winds blow offshore and large north swells wrap into the sandbar. ",
      photo: Prock
    },
    {
      lat: 21.3688,
      long: -157.7107,
      desc: "Bellows Air Force Base Beach",
      beachInfo:
        " Bellows Air Force Base has a beach called Bellows Beach. While the waves are almost always small, strong trade winds and hurricanes in the summer can cause rough and choppy surf with strong currents. The bottom is completely sand and the waves break very close to the shore",
      photo: Bellows
    },
    {
      lat: 21.317,
      long: -157.951,
      desc: "Hickam Air Force Base",
      beachInfo:
        "Hickam Air Force Base has a beach known as Hickam Runway. The wave breaks along a shallow reef that is far out in the bay. People often paddle out or walk along the adjacent runway before jumping off the rocks and paddling the remaining distance. The wave is flat during the winter and breaks only on large south swells",
      photo: HickamRunway
    },
    {
      lat: 21.4467,
      long: -158.1901,
      desc: "Pokai Bay Army Rec Center",
      beachInfo:
        "Pokai Base is a small beach which receives XL Northwest swells during the winter and South/West swells during the summer. Conditions are really good throughout the year as the winds almost always blow offshore",
      photo: Pokai
    },
    {
      lat: 21.3035,
      long: -158.0452,
      desc: "Barbers Point Coast Guard Base",
      beachInfo:
        "Barbers Point Base has a beach known as White Plains which offers windy and soft surf most of the year. However, during the summer the south swells can make for great longboarding waves if you are ok with a long paddle. ",
      photo: WhitePlains
    }
  ],
  myFunction: ident => {
    console.log(ident);
    return;
  }
};
