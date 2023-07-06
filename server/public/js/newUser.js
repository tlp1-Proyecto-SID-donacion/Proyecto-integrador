const formNuevoUsuario = document.querySelector("#formNuevoUsuario");

formNuevoUsuario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombreCompleto = document.querySelector("#nombreCompleto").value;
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const response = await fetch("http://localhost:5000/api/NuevoUsuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombreCompleto,
      username,
      email,
      password,
    }),
  });

  const respToJson = await response.json();

  if (response.status !== 201 && response.status !== 200) {
    return [];
  }

  //   Swal.fire({
  //     icon: "success",
  //     title: "Usuario creado",
  //     text: respToJson.message,
  //   });

  console.log(respToJson.message);

  formNuevoUsuario.reset();
});
