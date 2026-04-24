// aic — AI Console: call any LLM from the browser console
// Usage: await q("pergunta", "senha")
export default async function q(prompt, key, model) {
  const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
    body: JSON.stringify({
      model: model || "anthropic/claude-3.5-haiku",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 2000,
    }),
  });
  const j = await r.json();
  if (j.error) throw new Error(j.error.message);
  const t = j.choices[0].message.content;
  console.log(t);
  return t;
}
