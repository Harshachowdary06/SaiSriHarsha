  function toggleMenu() {
      document.querySelector('.menu').classList.toggle('active');
    }

    fetch("../components/navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
      });