export default {
  header: "My Home Page",
  view: "Home",
  weather: {},
  baseInfo: [
    {
      id: 1,
      lat: 21.4639,
      long: -157.7667,
      desc: "Kaneohe Marine Base",
      beachInfo:
        "The Kaneohe Marine Corps Base has a beac known as Pyramid Rock. The Wave is consistenly good throughtout the year .. "
      // photo: Prock
    },
    {
      id: 2,
      lat: 21.3688,
      long: -157.7107,
      desc: "Bellows Field Beach",
      beachInfo:
        " Bellows Base has a beac known as Pyramid Rock. The Wave is consistenly good throughtout the year .. "
      // photo: Bellows
    },
    {
      id: 3,
      lat: 21.317,
      long: -157.951,
      desc: "Hickam Air Force Base",
      beachInfo:
        "Hickam Base has a beac known as Pyramid Rock. The Wave is consistenly good throughtout the year .. "
      // photo: HickamRunway
    },
    {
      id: 4,
      lat: 21.4467,
      long: -158.1901,
      desc: "Pokai Bay Army Rec Center",
      beachInfo:
        "Pokai Base has a beac known as Pyramid Rock. The Wave is consistenly good throughtout the year .. "
      // photo: Pokai
    },
    {
      id: 5,
      lat: 21.3035,
      long: -158.0452,
      desc: "Barbers Point Coast Guard Base",
      beachInfo:
        "Barbers Base has a beac known as Pyramid Rock. The Wave is consistenly good throughtout the year .. "
      // photo: WhitePlains
    }
  ],
  myFunction: ident => {
    console.log(ident);
    return;
  }
};
