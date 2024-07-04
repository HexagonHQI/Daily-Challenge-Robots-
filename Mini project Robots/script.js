const robots = [
    {
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      image: "https://robohash.org/Leanne_Graham.png",
    },
    {
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      image: "https://robohash.org/Ervin_Howell.png",
    },
    {
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      image: "https://robohash.org/Clementine_Bauch.png",
    },
    //... add more robots here
  ];
  
  const robotCardsContainer = document.getElementById("robotCardsContainer");
  const searchInput = document.getElementById("searchInput");
  
  function displayRobots() {
    robotCardsContainer.innerHTML = ""; // Clear existing cards
  
    robots.forEach((robot) => {
      const robotCard = document.createElement("div");
      robotCard.classList.add("robot-card");
      robotCard.innerHTML = `
        <img src="${robot.image}" alt="${robot.name} image">
        <h3>${robot.name}</h3>
        <p>${robot.email}</p>
      `;
      robotCardsContainer.appendChild(robotCard);
    });
  }
  
  function filterRobots() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRobots = robots.filter(
      (robot) => robot.name.toLowerCase().includes(searchTerm)
    );
    displayRobots(filteredRobots);
  }
  
  searchInput.addEventListener("input", filterRobots);
  
  // Initial display of all robots
  displayRobots();