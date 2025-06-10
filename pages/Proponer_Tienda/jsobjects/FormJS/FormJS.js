export default {
  async registrar() {
    // 1. Validación
    if (
      !InputNombreTienda.text.trim() ||
			!InputIG.text.trim() ||
      !InputRIF.text.trim() ||
      !InputPersonaContacto.text.trim() ||
      !InputTelefono.text.trim() ||
      !InputEstado.text.trim() ||
      !InputCiudad.text.trim() ||
      !InputDireccion.text.trim() ||
      !InputImagenes.files.length
    ) {
      showAlert("Por favor, completa todos los campos y sube al menos una imagen.", "warning");
      return;
    }

    // 2. Subir imágenes
    const imagenes = await UpImage.subir();

    // 3. Crear documento en Firestore (CETiendas)
    await Create_Tienda.run({
      nombre: InputNombreTienda.text.trim(),
      rif: InputRIF.text.trim(),
      persona_contacto: InputPersonaContacto.text.trim(),
      telefono: InputTelefono.text.trim(),
			instagram: InputIG.text.trim(),
      estado: InputEstado.text.trim(),
      ciudad: InputCiudad.text.trim(),
      direccion: InputDireccion.text.trim(),
      imagenes: imagenes,
      captador_id: appsmith.store.usuario.codigo_usuario,
      estado_actual: "pendiente_revision",
      fecha_creacion: moment().format("DD-MM-YYYY"),
      bonificaciones: {
        1: 15,
        10: 10,
        25: 10,
        50: 10
      }
    });

   showAlert("Tienda registrada con éxito", "success");

			InputNombreTienda.setValue("");
			InputRIF.setValue("");
			InputPersonaContacto.setValue("");
			InputTelefono.setValue("");
			InputEstado.setValue("");
			InputCiudad.setValue("");
			InputDireccion.setValue("");
			resetWidget("InputImagenes");

navigateTo("Mis_Tiendas");

  }
}
