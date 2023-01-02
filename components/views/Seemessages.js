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

  <span>
      <label for="filterBeach"> View message by beach:</label> 
      <select id="filterBeach" name="filterBeach">
      <option value="">Select a Beach</option>
      <option value="MCBH">MCBH</option>
      <option value="bellows">Bellows</option>
      <option value="hickam">hickam</option>
      <option value="barbers">Barbers Point</option>
      <option value="pokai">Pokai Bay</option>
      </select>
      <label for="filterDate">Date:</label> 
      <select id="filterDate" name="filterBeach">
      <option value="">Select a Date</option>
      <option value="hours">Last 24 hours </option>
      <option value="week">Last 7 days </option>
      <option value="month">Last Month</option>
      <option value="six">last six months</option>
      <option value="year"> Last Year</option>
      </select>
</span>
<div id='output'>
</div>
   </div>
`;

