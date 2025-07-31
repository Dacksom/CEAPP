export default {
  async actualizarTodos() {
    const usuarios = [
      {
        nombre: "Sofia Montiel",
        _ref: {
          id: "0XG1KeTozJ6zcW7Ex1LW"
        },
        contraseña: "Sofia234*"
      },
      {
        nombre: "Ángel Monzant",
        _ref: {
          id: "4EfpUFnyfJo4ei9sAJF1"
        },
        contraseña: "Angel345*"
      },
      {
        nombre: "Andrea Dominguez",
        _ref: {
          id: "AzfgK3pgLRqHwLwQ5ti0"
        },
        contraseña: "Andrea456*"
      },
      {
        nombre: "Carlos Perozo",
        _ref: {
          id: "EOKpAeOzgsjy92abttFD"
        },
        contraseña: "Carlos789*"
      },
      {
        nombre: "Estefany Pulgar",
        _ref: {
          id: "IFv2ff2Tr2MPmG55N6wW"
        },
        contraseña: "Estefany234*"
      },
      {
        nombre: "Dickmary Urdaneta",
        _ref: {
          id: "RfNDh1wkyGpcvDX5voNR"
        },
        contraseña: "Dickmary123*"
      },
      {
        nombre: "Maria Villalobos",
        _ref: {
          id: "VZwyJJGYzwbrlp7Z9Hhd"
        },
        contraseña: "Maria123*"
      },
      {
        nombre: "Andrea Hernández",
        _ref: {
          id: "nPnHcWAcc5lmAtl51STu"
        },
        contraseña: "Andrea123*"
      }
    ];

    for (const usuario of usuarios) {
      const idLimpio = (usuario._ref.id || "").trim();
      const nuevaPass = usuario.contraseña;

      console.log(
        `📦 Actualizando usuario: ${usuario.nombre}`,
        `ID (limpio): "${idLimpio}"`,
        `Longitud: ${idLimpio.length}`
      );

      try {
        await UpdateUsuarioPassword.run({
          id: idLimpio,
          password: nuevaPass
        });
        console.log(`✅ Contraseña actualizada para ${usuario.nombre}`);
      } catch (error) {
        console.error(`❌ Error actualizando a ${usuario.nombre}:`, error);
      }
    }

    showAlert("Actualización masiva completada", "success");
  }
};
