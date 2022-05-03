import React from "react";

const Note = () => {
  document.title = "Note - weeink";
  return (
    <div className="container">
      <h3>Rate Limits</h3>
      <p>
        The number of request is limited to 1 requests per second, per IP
        address.
      </p>

      <h3>Errors</h3>
      <p>
        All unsuccessful API calls return an error message along with an{" "}
        <b>error_code</b>. See the table below to learn more about the meaning
        of each <b>error_code</b>:
      </p>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th>error_code</th>
            <th>Error</th>
          </tr>
          <tr>
            <td>1</td>
            <td>No URL specified ("url" parameter is empty)</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Invalid URL submitted</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Rate limit reached. Wait a second and try again</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              IP-Address has been blocked because of violating our{" "}
              <a href="https://shrtco.de/tos" target="_blank" rel="noopener noreferrer">terms of service</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <b>shrtcode</b> code (slug) already taken/in use
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Unknown error</td>
          </tr>
          <tr>
            <td>7</td>
            <td>No code specified ("code" parameter is empty)</td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              Invalid code submitted (code not found/there is no such
              short-link)
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Missing required parameters</td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              Trying to shorten a disallowed Link.{" "}
              <a href="https://shrtco.de/disallowed" target="_blank" rel="noopener noreferrer">
                More information on disallowed links
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Contact</h3>
      <p>
       You can write to <b>shrtco.de</b> for feature request or to extend functionality
       or to report usage abuse if it violates TOS,click <a href="https://shrtco.de/abuse">here</a>.
       For any query related to this website or other concerns contact the developer at <code>jayantur13@gmail.com</code>
      </p>
    </div>
  );
};

export default Note;
