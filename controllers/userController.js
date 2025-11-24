export const getMe = async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Not authenticated" });
  const { id, email, username, role } = req.user;
  res.json({ id, email, username, role });
};
