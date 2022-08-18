// Run through the team list, add specifed cards based on roles, return all the html to the main template
function addCards(team){
    let engineers = '';
    let interns = '';
    let allCards = '';

    // Already have manager, so run through the rest of the team adding cards based on roles
    for (let i = 1; i < team.length; i++){
        if(team[i].role === "Engineer"){
            engineers += addEngineerCard(team[i]);
        } else if (team[i].role === "Intern"){
            interns += addInternCard(team[i]);
        } else{
            break;
        }
    }

    // Add the row html and the list of cards if we have people in that role
    if(engineers.length !== 0){
        allCards += `<!-- Engineer Row -->\n<div class="row justify-content-center text-white border-bottom">\n${engineers}</div>\n`;
    }
    if(interns.length !== 0){
        allCards += `<!-- Intern Row -->\n<div class="row justify-content-center text-white">\n${interns}</div>\n`;
    }
    return allCards;
}

// Add html for an intern card
function addInternCard(intern){
    return `<div class="col-xl-4 col-lg-5 col-md-7">
    <div class="card shadow m-2">
      <div class="card-header bg-primary py-2 px-3">
        <h4 class="my-1">${intern.name}</h4>
        <h5 class="my-1"><img src="../Assets/images/internW.png" height="25em" width="25em"></img>  ${intern.role}</h5>
      </div>
      <ul class="list-group list-group-flush bg-light py-4 px-3">
        <li class="list-group-item border text-dark py-2 px-3">ID: ${intern.id}</li>
        <li class="list-group-item border text-dark py-2 px-3">
            Email: <a href="mailto:${intern.email}">${intern.email}</a>
        </li>
        <li class="list-group-item border text-dark py-2 px-3">School: ${intern.school}</li>
      </ul>
    </div>
  </div>\n`;

}

// Add html for an engineer card
function addEngineerCard(engineer){
    return `<div class="col-xl-4 col-lg-5 col-md-7">
    <div class="card shadow m-2">
      <div class="card-header bg-primary py-2 px-3">
        <h4 class="my-1">${engineer.name}</h4>
        <h5 class="my-1"><img src="../Assets/images/engineerW.png" height="25em" width="25em"></img>  ${engineer.role}</h5>
      </div>
      <ul class="list-group list-group-flush bg-light py-4 px-3">
        <li class="list-group-item border text-dark py-2 px-3">ID: ${engineer.id}</li>
        <li class="list-group-item border text-dark py-2 px-3">
            Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
        </li>
        <li class="list-group-item border text-dark py-2 px-3">
            Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
        </li>
      </ul>
    </div>
  </div>\n`;
}

// Main html default content
function generateHTML(team){
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <title>Team</title>
      </head>
      <body>
        <!-- Header -->
        <header class="text-center bg-danger text-white font-weight-bolder p-3">
          <h1>My Team</h1>
        </header>
        <div class="container w-xs-75 p-5">
          <!-- Manager Row -->
          <div class="row justify-content-center text-white border-bottom">
            <div class="col-xl-4 col-lg-5 col-md-7">
              <div class="card shadow m-2">
                <div class="card-header bg-primary py-2 px-3">
                  <h4 class="my-1">${team[0].name}</h4>
                  <h5 class="my-1"><img src="../Assets/images/managerW.png" height="25em" width="25em"></img>  ${team[0].role}</h5>
                </div>
                <ul class="list-group list-group-flush bg-light py-4 px-3">
                  <li class="list-group-item border text-dark py-2 px-3">
                    ID: ${team[0].id}
                  </li>
                  <li class="list-group-item border text-dark py-2 px-3">
                    Email: <a href="mailto:${team[0].email}">${team[0].email}</a>
                  </li>
                  <li class="list-group-item border text-dark py-2 px-3">
                    Office number: ${team[0].officeNumber}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          ${addCards(team)}</div>
      </body>
    </html>`;
}

module.exports = generateHTML;