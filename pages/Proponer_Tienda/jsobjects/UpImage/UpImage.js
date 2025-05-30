export default {
  async subir() {
    const archivos = InputImagenes.files;
    const bucket = "rapishops-25.firebasestorage.app"; // Asegúrate de usar el bucket correcto
    const carpeta = "Tiendas";
    const uploadedUrls = [];

    for (const file of archivos) {
      // Quitar el encabezado "data:image/png;base64,..." y obtener solo la parte base64
      const base64 = file.data.split(",")[1];
      const mimeType = file.type;
      
      // Genera un nombre único anteponiendo la fecha/hora actual al nombre original
      const uniqueName = new Date().getTime() + "_" + file.name;
      const nombre = encodeURIComponent(uniqueName);

      const url = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${carpeta}%2F${nombre}?uploadType=media`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": mimeType
        },
        body: Uint8Array.from(atob(base64), c => c.charCodeAt(0))
      });

      if (!response.ok) {
        throw new Error("Error subiendo imagen: " + file.name);
      }

      // Construir la URL de descarga usando el nombre único
      const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${carpeta}%2F${nombre}?alt=media`;
      uploadedUrls.push(downloadUrl);
    }

    showAlert("¡Imágenes subidas con éxito!", "success");
    return uploadedUrls;
  }
};
