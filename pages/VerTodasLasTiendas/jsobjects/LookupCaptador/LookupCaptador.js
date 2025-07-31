export default {
  // Devuelve solo el primer nombre, o "Desconocido"
  obtenerNombre: (codigo) => {
    const captadores = Get_Captadores.data || [];
    const captador = captadores.find(c => c.codigo_usuario === codigo);
    return captador ? captador.nombre : "Desconocido";
  },

  // Devuelve nombre completo o el código si no lo encuentra
  obtenerNombreCompleto: (codigo) => {
    const captadores = Get_Captadores.data || [];
    const captador = captadores.find(c => c.codigo_usuario === codigo);
    return captador
      ? `${captador.nombre} ${captador.apellido || ""}`.trim()
      : codigo || "Desconocido";
  }
}
