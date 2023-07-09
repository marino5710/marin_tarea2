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
    <h1>Comando de Informática y Tecnología</h1>
  </header>

  <div class="container my-5 container-form">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="mb-4">Registro de Oficiales</h2>
        <form>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre">
          </div>
          <div class="mb-3">
            <label for="apellido" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="apellido" placeholder="Ingrese su apellido">
          </div>
          <div class="mb-3">
            <label for="edad" class="form-label">Edad</label>
            <input type="number" class="form-control" id="edad" placeholder="Ingrese su edad">
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  </div>

  <footer class="footer text-center">
    <p>Comando de Informática y Tecnología - Todos los derechos reservados &copy; 2023</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
