export default {
  /**
   * Busca un usuario por su codigo_usuario y retorna su _ref.id
   */
  async getIdPorCodigo(codigo_usuario) {
    const result = await GetUserByCodigo.run({ codigo_usuario });
    if (!result || result.length === 0) {
      showAlert(`No se encontró usuario con código ${codigo_usuario}`, "error");
      return null;
    }
    return result[0]._ref.id;
  },

  /**
   * Actualiza la contraseña de un usuario dado su codigo_usuario
   */
  async actualizarPorCodigoUsuario(codigo_usuario, nuevaPassword) {
    const id = await this.getIdPorCodigo(codigo_usuario);
    if (!id) return;
    await UpdateUsuarioPassword.run({
      id: id,
      password: nuevaPassword
    });
    showAlert(`✅ Contraseña actualizada para ${codigo_usuario}`, "success");
  },

  /**
   * Lote: recibe array de objetos { codigo_usuario, nuevaPassword }
   * y actualiza uno a uno
   */
  async actualizarTodos(usuarios) {
    for (const u of usuarios) {
      console.log(`📝 Procesando ${u.codigo_usuario} → ${u.nuevaPassword}`);
      await this.actualizarPorCodigoUsuario(u.codigo_usuario, u.nuevaPassword);
    }
    showAlert("🔄 Actualización masiva completada", "success");
  }
};
