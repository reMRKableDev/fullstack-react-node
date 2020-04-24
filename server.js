const app = require("./app");
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`I've got ears on port: ${port}`));
