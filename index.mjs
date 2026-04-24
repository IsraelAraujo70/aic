// aic — AI Console: call any LLM from the browser console
// Usage: await q("pergunta", "israel##")
const P="https://aic-proxy.vercel.app/api/q";
export default async function q(prompt, pass, model) {
  const r = await fetch(P, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ p: prompt, k: pass, m: model }),
  });
  const j = await r.json();
  if (j.e) throw new Error(j.e);
  console.log(j.t);
  return j.t;
}
