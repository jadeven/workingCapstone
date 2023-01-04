import html from "html-literal";

export default () => html`
  <div id="leaveMessage">
    <form id="leaveMessage" method="POST" action="">
      <div>
        <label for="beachChoice">Beach</label>
        <select id="beachChoice" name="beachChoice">
          <option value="">Select a beach</option>
          <option value="kaneohe">Kaneohe Marine Corps Base</option>
          <option value="bellows">Bellows</option>
          <option value="hickam"> Hickam</option>
          <option value="barbers">Barbers</option>
          <option value="pokai">Pokai</option>
        </select>
      </div>
      <div>
        <label for="beachMessage">Message:</label>
        <textarea
          type="input"
          name="beachMessage"
          id="beachMessage"
          placeholder="Leave message"
          required
        >
        </textarea>
      </div>
      <input type="submit" name="submit" value="Submit Message" />
    </form>
  </div id='allMessages'>
    
  </div>
`;
