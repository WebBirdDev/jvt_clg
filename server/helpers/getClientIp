function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded ? forwarded.split(",")[0] : req.socket.remoteAddress;
  return ip === "::1" ? "127.0.0.1" : ip;
}

module.exports = getClientIp;
