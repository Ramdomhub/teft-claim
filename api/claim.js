export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      type: "action",
      icon: "https://placehold.co/200x200",
      title: "TEFT Claim",
      description: "Claim 1 TEFT for free.",
      label: "Claim TEFT"
    });
  }

  if (req.method === "POST") {
    const { account } = req.body;

    return res.status(200).json({
      transaction: "PLACEHOLDER",
      message: "Claim your TEFT"
    });
  }
}
