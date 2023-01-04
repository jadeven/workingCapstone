import html from "html-literal";



export default state => html`
  </div id='allMessages'>

  <span>
      <label for="filterBeach"> View message by beach:</label> 
      <select id="filterBeach" name="filterBeach">
      <option value="">Select a Beach</option>
      <option value="kaneohe">Kaneohe Marine Corps Base</option>
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
   ${state.messages 
   .map( el => {
      return `<div>
      <div>
      ${el.time}
      </div>
      ${el.beachChoice}

      <div>
      ${el.message}
      <hr></hr>

      </div>
      </div>`
   }
   )
   }
</div>
   </div>
`;

