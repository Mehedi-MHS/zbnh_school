async function imageResizer(file, type = "banner") {
  var info = {
    realSize: (file.size / 1000).toFixed(2) + " KB",
    resizedSize: 0,
    realWidth: 0,
    realHeight: 0,
    resizedWidth: 0,
    resizedHeight: 0,
    resizedData: null,
  };

  try {
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(file);
    });

    const img = new Image();
    img.src = dataUrl;

    await new Promise((resolve) => {
      img.onload = () => {
        info.realWidth = img.width;
        info.realHeight = img.height;
        if (type == "banner") {
          info.resizedWidth = 800;
          info.resizedHeight = 500;
        } else if (type == "square") {
          info.resizedWidth = 200;
          info.resizedHeight = 200;
        }
        resolve();
      };
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = info.resizedWidth;
    canvas.height = info.resizedHeight;

    ctx.drawImage(img, 0, 0, info.resizedWidth, info.resizedHeight);

    const resizedDataURL = canvas.toDataURL(file.type);
    info.resizedSize = (resizedDataURL.length / 1000).toFixed(2) + " KB";
    info.resizedData = resizedDataURL;
    return info;
  } catch (error) {
    console.error("Error in imageResizer:", error);
    throw error;
  }
}
export { imageResizer };
