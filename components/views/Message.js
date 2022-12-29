import html from "html-literal";

export default () => html`
  <div id="leaveMessage">
    <form id="leaveMessage" method="POST" action="">
      <div>
        <label for="beachChoice">Beach</label>
        <select id="beachChoice" name="beachChoice">
          <option value="">Select a beach</option>
          <option value="MCBH">Kaneohe Marine Corps Base</option>
          <option value="Bellows">Bellows</option>
          <option value="Hickam"> Hickam</option>
          <option value="Barbers">Barbers</option>
          <option value="Pokai">Pokai</option>
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
  </div>
`;
