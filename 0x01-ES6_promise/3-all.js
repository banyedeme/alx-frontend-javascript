const { uploadPhoto, createUser } = require('./utils');

async function handleProfileSignup() {
  try {
    const [_photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
module.exports = handleProfileSignup;
