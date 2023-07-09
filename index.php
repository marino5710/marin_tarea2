<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <title>Registro de Oficiales</title>
  <style>
    .header {
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding: 20px;
    }

    .footer {
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding: 20px;
    }

    .container-form {
      background-color: #f2f2f2;
      padding: 20px;
      border-radius: 10px;
    }
  </style>
</head>
<body>

  <header class="header text-center">
    <h1 class="text-danger fw-bold" id="titulo1">Comando de Informática y Tecnología</h1>
  </header>

  <div class="container my-5 container-form">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 id="titulo2"class="mb-4">Registro de Oficiales</h2>
        <form>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input id="input1"type="text" class="form-control" value="texto 1" placeholder="Ingrese su nombre">
          </div>
          <div class="mb-3">
            <label for="apellido" class="form-label">Apellido</label>
            <input id="input2" type="text" class="form-control" value="texto 2" placeholder="Ingrese su apellido">
          </div>
          <div class="mb-3">
            <label for="edad" class="form-label">Edad</label>
            <input id="input3" type="number" class="form-control" value="texto 3" placeholder="Ingrese su edad">
          </div>
          <div class="mb-3">
            <label for="enlace" class="form-label">Enlaces</label>
            <a id="enlaceG" href="https://wwww.google.com">Ir a google</a>
            <a id="enlaceF" href="https://wwww.facebook.com">Ir a facebook</a>
            <a id="enlaceM" href="http://wwww.marin.com">Ir a mi pagina</a>

          </div>
          <button id="boton1" type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
    <div id= "parrafos" class="col-md-6">
      <p id="parrafo2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore minus adipisci cupiditate consectetur atque natus harum cumque facilis alias ipsam commodi, labore quo voluptatem odio impedit. Optio, accusamus facere!</p>
      <p id="parrafo3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore minus adipisci cupiditate consectetur atque natus harum cumque facilis alias ipsam commodi, labore quo voluptatem odio impedit. Optio, accusamus facere!</p>
      <p id="parrafo4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore minus adipisci cupiditate consectetur atque natus harum cumque facilis alias ipsam commodi, labore quo voluptatem odio impedit. Optio, accusamus facere!</p>
      <p id="parrafo5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore minus adipisci cupiditate consectetur atque natus harum cumque facilis alias ipsam commodi, labore quo voluptatem odio impedit. Optio, accusamus facere!</p>
    </div>
  </div>

  <footer class="footer text-center">
    <p class="text-danger "id="parrafo1">Comando de Informática y Tecnología - Todos los derechos reservados &copy; 2023</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
