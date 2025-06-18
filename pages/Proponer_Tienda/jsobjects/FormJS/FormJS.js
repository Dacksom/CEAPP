export default {
  async registrar() {
    /* 1. Validación – RIF ya NO es obligatorio */
    if (
      !InputNombreTienda.text.trim()           ||
      !InputPersonaContacto.text.trim()        ||
      !InputTelefono.text.trim()               ||
      !InputEstado.text.trim()                 ||
      !InputCiudad.text.trim()                 ||
      !InputDireccion.text.trim()              ||
      !InputIG.text.trim()                     ||
      !SelectCategoria.selectedOptionValue     ||
      !InputNotas.text.trim()                  ||
      !InputImagenes.files.length
    ) {
      showAlert(
        "Por favor, completa todos los campos (el RIF ahora es opcional), selecciona la categoría y sube al menos una imagen.",
        "warning"
      );
      return;
    }

    /* 2. Subir imágenes */
    const imagenes = await UpImage.subir();

    /* 3. Crear documento en Firestore */
    await Create_Tienda.run({
      nombre          : InputNombreTienda.text.trim(),
      rif             : InputRIF.text.trim(),      // si está vacío se guarda ""
      persona_contacto: InputPersonaContacto.text.trim(),
      telefono        : InputTelefono.text.trim(),
      instagram       : InputIG.text.trim(),
      estado          : InputEstado.text.trim(),
      ciudad          : InputCiudad.text.trim(),
      direccion       : InputDireccion.text.trim(),
      categoria       : SelectCategoria.selectedOptionValue,
      notas           : InputNotas.text.trim(),
      imagenes        : imagenes,
      captador_id     : appsmith.store.usuario.codigo_usuario,
      estado_actual   : "pendiente_revision",
      fecha_creacion  : moment().format("DD-MM-YYYY"),
      bonificaciones  : { 1: 15, 10: 10, 25: 10, 50: 10 }
    });

    /* 4. Éxito + limpiar formulario */
    showAlert("Tienda registrada con éxito", "success");

    InputNombreTienda.setValue("");
    InputRIF.setValue("");
    InputPersonaContacto.setValue("");
    InputTelefono.setValue("");
    InputEstado.setValue("");
    InputCiudad.setValue("");
    InputDireccion.setValue("");
    InputIG.setValue("");
    SelectCategoria.setSelectedOption(undefined);
    InputNotas.setValue("");
    resetWidget("InputImagenes");

    /* 5. Ir a la lista */
    navigateTo("Mis_Tiendas");
  }
}
