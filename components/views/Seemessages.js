import html from "html-literal";

// const testArr = [
//    { beach: "pokai", message: "fsf sd fdsjl dfs fsa", date: "Dec" },
//    { beach: "pokai", message: "tester 2", date: "Oct" },
//    { beach: "MCBH", message: "tester 23", date: "Dec" },
//    { beach: "barbers", message: "tester 232", date: "Nov" },
//    { beach: "pokai", message: "tester 2", date: "Oct" },
//    { beach: "pokai", message: "tester 2", date: "Oct" },
 
//    { beach: "MCBH", message: "tester 342", date: "Dec" }
//  ];

export default state => html`
  </div id='allMessages'>

  <div>
      <label for="filterBeach"> View message by beach:</label> 
      <select id="filterBeach" name="filterBeach">
      <option value="">Select a Beach</option>
      <option value="MCBH">MCBH</option>
      <option value="bellows">Bellows</option>
      <option value="hickam">hickam</option>
      <option value="barbers">Barbers Point</option>
      <option value="pokai">Pokai Bay</option>
      </select>
</div>
<div id='output'>
</div>
   </div>
`;


// let beachVar = document.querySelector("#filterBeach");
// let outputVar = document.querySelector("#output");

// console.log('beachVar', beachVar)
// beachVar.addEventListener("change", function () {
//   console.log(beachVar.options[beachVar.selectedIndex].value);
//   // outputVar.innerHTML = beachVar.options[beachVar.selectedIndex].value
//   const selected = beachVar.options[beachVar.selectedIndex].value;
//   console.log("selected", selected);

//   const tester = testArr.filter((el) => el.beach === selected);
//   console.log("tester", tester);

//   if (tester.length > 0) {
//     outputVar.innerHTML = tester
//       .map((el) => `<div> ${el.message} </div>`)
//       .join("");
//   } else {
//     outputVar.innerHTML = `  <div> No messages <div>
// `;
//   }
// });