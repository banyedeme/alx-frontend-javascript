function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const typedArray = new Int8Array(buffer);
  typedArray[position] = value;

  return buffer;
}
module.exports = { createInt8TypedArray };
