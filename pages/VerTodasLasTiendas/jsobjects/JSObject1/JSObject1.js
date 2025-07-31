export default {
  usuarios: [
  {
    "activo": true,
    "cedula": "28088865",
    "ciudad": "Maracaibo",
    "codigo_usuario": "CAP865",
    "correo": "andreaaedg@gmail.com",
    "estado": "Zulia",
    "foto": "",
    "nombre": "Andrea Dominguez",
    "rol": "captador",
    "telefono": "04146520895",
    "contraseña": "28088865"
  },
  {
    "activo": true,
    "cedula": "26200046",
    "ciudad": "Maracaibo",
    "codigo_usuario": "CAP046",
    "correo": "estefanypulgarm@gmail.com",
    "estado": "Zulia",
    "foto": "",
    "nombre": "Estefany Pulgar",
    "rol": "captador",
    "telefono": "04126881622",
    "contraseña": "26200046"
  },
  {
    "activo": true,
    "cedula": "21488686",
    "ciudad": "Maracaibo",
    "codigo_usuario": "CAP686",
    "correo": "sofimontiel@hotmail.com",
    "estado": "Zulia",
    "foto": "",
    "nombre": "Sofia Montiel",
    "rol": "captador",
    "telefono": "04122856447",
    "contraseña": "21488686"
  },
  {
    "activo": true,
    "cedula": "27969786",
    "ciudad": "Maracaibo",
    "codigo_usuario": "CAP786",
    "correo": "andyherdz17@gmail.com",
    "estado": "Zulia",
    "foto": "",
    "nombre": "Andrea Hernández",
    "rol": "captador",
    "telefono": "04246979484",
    "contraseña": "27969786"
  },
  {
    "activo": true,
    "cedula": "27236087",
    "ciudad": "Maracaibo",
    "codigo_usuario": "CAP087",
    "correo": "lauraamv22@gmail.com",
    "estado": "Zulia",
    "foto": "",
    "nombre": "Maria Villalobos",
    "rol": "captador",
    "telefono": "04122986426",
    "contraseña": "27236087"
  },
  {
    "activo": true,
    "cedula": "30985254",
    "ciudad": "Maracaibo",
    "codigo_usuario": "CAP254",
    "correo": "carlospehdz@gmail.com",
    "estado": "Zulia",
    "foto": "",
    "nombre": "Carlos Perozo",
    "rol": "captador",
    "telefono": "04246480186",
    "contraseña": "30985254"
  },
  {
    "activo": true,
    "cedula": "26353105",
    "ciudad": "Maracaibo",
    "codigo_usuario": "CAP-ANGEL",  // <- este lo forzaste a mano, puedes cambiarlo aquí
    "correo": "angeldavidmonzant@gmail.com",
    "estado": "Zulia",
    "foto": "",
    "nombre": "Ángel Monzant",
    "rol": "captador",
    "telefono": "04127508045",
    "contraseña": "26353105"
  },
  {
    "activo": true,
    "cedula": "23737960",
    "ciudad": "Maracaibo",
    "codigo_usuario": "CAP960",
    "correo": "dickmaryelena@gmail.com",
    "estado": "Zulia",
    "foto": "",
    "nombre": "Dickmary Urdaneta",
    "rol": "captador",
    "telefono": "04149635603",
    "contraseña": "23737960"
  }

  ],

  async crearTodos() {
    for (let usuario of this.usuarios) {
      await CrearUsuario.run(usuario);
    }
    showAlert("¡Carga masiva terminada!");
  }
}
