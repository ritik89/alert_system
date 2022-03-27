const { createTeam } = require("../src/teams");


const test = () => {
  console.log("request is not created when team input is invalid");

  const createTeamRequest = {
    "developers": [{"name": "pam", "phone_number":"779889"},
     {"name": "krish", "phone_number": "22299222"}]
  };

  const response = createTeam(createTeamRequest);
  if(response === "Invalid Request params") {
    console.log("Test passed");
    return;
  }
  console.log("Test failed");
}



test();