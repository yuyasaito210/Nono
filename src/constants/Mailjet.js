const publicKey = "e07ff605b7266ba50ca82289887e7690";
const secretKey = "d47a84b804a896061aa2c95dd0fba9af";

const mailjet = require('node-mailjet')
  .connect(publicKey, secretKey)

export default mailjet;