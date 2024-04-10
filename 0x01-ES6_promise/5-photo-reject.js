function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulating processing the photo file (e.g., checking file format, size, etc.)
    // For simplicity, let's assume the file cannot be processed for any fileName
    reject(new Error(`${fileName} cannot be processed`));
  });
}
export default uploadPhoto;
