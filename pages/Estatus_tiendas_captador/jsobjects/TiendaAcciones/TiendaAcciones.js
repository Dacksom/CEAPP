export default {
  async guardarComentarioEmbajadorYCerrar() {
    const id = appsmith.store.tiendaSeleccionada._ref.id;
    const comentarioNuevo = Input1.text;
    const comentarioOriginal = appsmith.store.tiendaSeleccionada.comentario_admin || "";
    const estadoActual = appsmith.store.tiendaSeleccionada.estado_actual;

    // Si el comentario cambió (aunque sea un espacio), guarda
    if (comentarioNuevo !== comentarioOriginal) {
      await Update_Tienda.run({
        id: id,
        comentario: comentarioNuevo,
        nuevo_estado: estadoActual
      });
      showAlert("Comentario guardado correctamente.", "success");
    }
    closeModal("ModalDetalleTienda");
  }
}
