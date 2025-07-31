export default {
  generarPassword(nombre) {
    if (!nombre) return "Cambio123*";
    const base = nombre.trim().split(" ")[0].replace(/[^a-zA-Z]/g, "");
    const rnd  = Math.floor(100 + Math.random() * 900);
    return `${base}${rnd}*`;
  },

  async actualizarTodos() {
    const usuarios = [
      { nombre: "Sofia Montiel",    _ref: { path: "CEUSERS/0XG1KeTozJ6zcW7Ex1LW" } },
      { nombre: "Ángel Monzant",    _ref: { path: "CEUSERS/4EfpUFnyfJo4ei9sAJF1" } },
      { nombre: "Andrea Dominguez", _ref: { path: "CEUSERS/AzfgK3pgLRqHwLwQ5ti0" } },
      { nombre: "Carlos Perozo",    _ref: { path: "CEUSERS/EOKpAeOzgsjy92abttFD" } },
      { nombre: "Estefany Pulgar",  _ref: { path: "CEUSERS/IFv2ff2Tr2MPmG55N6wW" } },
      { nombre: "Dickmary Urdaneta",_ref: { path: "CEUSERS/RfNDh1wkyGpcvDX5voNR" } },
      { nombre: "Maria Villalobos", _ref: { path: "CEUSERS/VZwyJJGYzwbrlp7Z9Hhd" } },
      { nombre: "Andrea Hernández", _ref: { path: "CEUSERS/nPnHcWAcc5lmAtl51STu" } }
    ];

    for (const u of usuarios) {
      const path = (u._ref.path || "").trim();
      const pwd  = this.generarPassword(u.nombre);

      console.log(`➡️  Update → ${path}  |  Nueva contraseña: ${pwd}`);

      try {
        await UpdateUsuarioPassword.run({
          path: path,          // ← exactamente la clave que el query espera
          password: pwd
        });
        console.log(`✅  Actualizado: ${u.nombre}`);
      } catch (e) {
        console.error(`❌  Falló: ${u.nombre}`, e);
      }
    }

    showAlert("Actualización masiva terminada", "success");
  }
}
