const template = (data) => {
  return 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SAMPLE TEAM PROFILE</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>
  <body>
    <header>
      <h1 class="title">MY TEAM</h1>
    </header>
    <div class="container">
      <section>
        <div class="manager-card">
          <div class="top-card">
            <h2 class="name">ALEX JONES</h2>
            <h3 class="job-title">Manager</h3>
          </div>
          <div class="info-container">
            <div class="info-content">ID: 012</div>
            <div class="info-content">
              <a href="mailto:alicebryer123@gmail.com"
                >EMAIL: alicebryer123@gmail.com</a
              >
            </div>
            <div class="info-content">OFFICE NUMBER: 01922 447237</div>
          </div>
        </div>
      </section>
      <section>
        <div class="engineer-card">
          <div class="engineer-top-card">
            <h2 class="name">DAVE SMITH</h2>
            <h3 class="job-title">Engineer</h3>
          </div>
          <div class="info-container">
            <div class="info-content">ID: 019</div>
            <div class="info-content">
              <a href="mailto:dave@gmail.com">EMAIL: dave@gmail.com</a>
            </div>
            <div class="info-content">
              <a href="https://github.com/">Github Profile</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="intern-card">
          <div class="intern-top-card">
            <h2 class="name">MOLLY BAKER</h2>
            <h3 class="job-title">Intern</h3>
          </div>
          <div class="info-container">
            <div class="info-content">ID: 023</div>
            <div class="info-content">
              <a href="mailto:molly@gmail.com">EMAIL: molly@gmail.com</a>
            </div>
            <div class="info-content">School: Shire Oak Academy</div>
          </div>
        </div>
      </section>
    </div>
  </body>
</html>
