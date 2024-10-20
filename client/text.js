/*
secret -----------------
require("crypto").randomBytes(64).toString("hex")
token ------------------
const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
expiresIn: "1h",});
  res cookie ------------------
res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSide: "none",
        })
        .send({ success: true });
cors ----------
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
login site 
{withCredentials: true}
*/
/**
 * send cookie 
 * axios.get(url, {withCredentials: true})
 * use cookie middleware
 * server -----
 * console.log("token", req.cookies.token);
 * 
 * */ 
