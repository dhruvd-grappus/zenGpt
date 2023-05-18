export default async function sendPrompt({ prompts, setCode }) {
  console.log(prompts);
  const OPENAI_API_KEY = "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";
  const promptConfig =
  " in react , use inline css, delete export & import statements, Only respond with code as plain text without code block syntax or explanation around it";
  const messages = [...prompts,promptConfig].map((p) => ({
    role: "user",
    content: p
  }));
  console.log(messages);
  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: messages,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      try {
        const code = data.choices[0].message.content;
        setCode(code);
      } catch (error) {
        alert(error);
      }
    })
    .catch((err) => {
      alert(err);
    });
}
