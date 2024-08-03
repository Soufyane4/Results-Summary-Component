fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (components) {
    let placeholder = document.querySelector(".summary-components");
    let out = "";
    components.forEach((component, index) => {
      out += `
        <div class="component component-${index}" id="component-${component.id}">
            <div><img src="${component.icon}"/></div>
            <div class="category">${component.category}</div>
            <div class="score">${component.score} <span>/ 100</span></div>
        </div>`;
    });

    placeholder.innerHTML = out;
  });




