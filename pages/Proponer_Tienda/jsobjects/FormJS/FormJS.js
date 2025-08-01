export default {
  async registrar() {
    /* 1. Validación – RIF ya NO es obligatorio y ya NO se exige imágenes */
    if (
      !InputNombreTienda.text.trim()        ||
      !InputPersonaContacto.text.trim()     ||
      !InputTelefono.text.trim()            ||
      !InputDireccion.text.trim()           ||
      !InputIG.text.trim()                  ||
      !SelectCategoria.selectedOptionValue  ||
      !InputNotas.text.trim()
    ) {
      showAlert(
        "Por favor, completa todos los campos (el RIF ahora es opcional).",
        "warning"
      );
      return;
    }

    /* 2. Subir imágenes solo si hay archivos seleccionados */
    let imagenes = [];
    if (InputImagenes.files.length > 0) {
      imagenes = await UpImage.subir();
    }

    /* 3. Crear documento en Firestore con estado/ciudad del store */
    await Create_Tienda.run({
      nombre          : InputNombreTienda.text.trim(),
      rif             : InputRIF.text.trim(),      // opcional
      persona_contacto: InputPersonaContacto.text.trim(),
      telefono        : InputTelefono.text.trim(),
      instagram       : InputIG.text.trim(),
      estado          : appsmith.store.usuario.estado,
      ciudad          : appsmith.store.usuario.ciudad,
      direccion       : InputDireccion.text.trim(),
      categoria       : SelectCategoria.selectedOptionValue,
      notas           : InputNotas.text.trim(),
      imagenes        : imagenes,                  // ahora opcional
      captador_id     : appsmith.store.usuario.codigo_usuario,
      estado_actual   : "pendiente_revision",
      fecha_creacion  : moment().format("DD-MM-YYYY"),
      bonificaciones  : { 1:15, 10:10, 25:10, 50:10 }
    });

    /* 4. Éxito + limpiar formulario */
    showAlert("Tienda registrada con éxito", "success");

    InputNombreTienda.setValue("");
    InputRIF.setValue("");
    InputPersonaContacto.setValue("");
    InputTelefono.setValue("");
    InputDireccion.setValue("");
    InputIG.setValue("");
    SelectCategoria.setSelectedOption(undefined);
    InputNotas.setValue("");
    // Si quieres, sigue reseteando el widget de imágenes:
    resetWidget("InputImagenes");

    /* 5. Ir a la lista */
    navigateTo("Mis_Tiendas");
  }
}
