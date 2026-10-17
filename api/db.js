// เก็บข้อมูลกลางของแอปเช็คชื่อ (Vercel Function + Upstash Redis)
const U = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const T = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const KEY = 'checkin-db';

async function redis(cmd) {
  const x = await fetch(U, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + T },
    body: JSON.stringify(cmd)
  });
  const j = await x.json();
  if (j.error) throw new Error(j.error);
  return j.result;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  try {
    if (!U || !T) return res.status(500).json({ error: 'missing Upstash env' });
    if (req.method === 'GET') {
      const v = await redis(['GET', KEY]);
      return res.status(200).json(v ? JSON.parse(v) : { rev: 0, db: null });
    }
    if (req.method === 'POST') {
      const b = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (!b || b.code !== (process.env.ADMIN_CODE || '5555')) return res.status(403).json({ error: 'bad code' });
      if (!b.db || !Array.isArray(b.db.workers) || !b.db.att) return res.status(400).json({ error: 'bad data' });
      const rev = Date.now();
      await redis(['SET', KEY, JSON.stringify({ rev, db: b.db })]);
      return res.status(200).json({ rev });
    }
    res.status(405).end();
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) });
  }
};
