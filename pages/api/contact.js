// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { name, email, subject, message } = req.body;
  // console.log(req.body);
  res.status(200).json(req.body);
}
