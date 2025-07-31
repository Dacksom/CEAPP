export default {
  async registrar() {
    /* 1. Validación – RIF ya NO es obligatorio */
    if (
      !InputNombreTienda.text.trim()           ||
      !InputPersonaContacto.text.trim()        ||
      !InputTelefono.text.trim()               ||
      !InputDireccion.text.trim()              ||
      !InputIG.text.trim()                     ||
      !SelectCategoria.selectedOptionValue     ||
      !InputNotas.text.trim()                  ||
      InputImagenes.files.length === 0
    ) {
      showAlert(
        "Por favor, completa todos los campos (el RIF ahora es opcional), selecciona la categoría y sube al menos una imagen.",
        "warning"
      );
      return;
    }

    /* 2. Subir imágenes */
    const imagenes = await UpImage.subir();

    /* 3. Crear documento en Firestore con estado/ciudad del store */
    await Create_Tienda.run({
      nombre          : InputNombreTienda.text.trim(),
      rif             : InputRIF.text.trim(),      // opcional
      persona_contacto: InputPersonaContacto.text.trim(),
      telefono        : InputTelefono.text.trim(),
      instagram       : InputIG.text.trim(),
      // Aquí ya no lees del input, tomas del usuario logueado:
      estado          : appsmith.store.usuario.estado,
      ciudad          : appsmith.store.usuario.ciudad,
      direccion       : InputDireccion.text.trim(),
      categoria       : SelectCategoria.selectedOptionValue,
      notas           : InputNotas.text.trim(),
      imagenes        : imagenes,
      captador_id     : appsmith.store.usuario.codigo_usuario,
      estado_actual   : "pendiente_revision",
      fecha_creacion  : moment().format("DD-MM-YYYY"),
      bonificaciones  : { 1:15, 10:10, 25:10, 50:10 }
    });

    /* 4. Éxito + limpiar formulario (no hace falta limpiar estado/ciudad) */
    showAlert("Tienda registrada con éxito", "success");

    InputNombreTienda.setValue("");
    InputRIF.setValue("");
    InputPersonaContacto.setValue("");
    InputTelefono.setValue("");
    InputDireccion.setValue("");
    InputIG.setValue("");
    SelectCategoria.setSelectedOption(undefined);
    InputNotas.setValue("");
    resetWidget("InputImagenes");

    /* 5. Ir a la lista */
    navigateTo("Mis_Tiendas");
  }
}
