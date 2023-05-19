import env from "react-dotenv";
export const promptConfig =
  "use react , use inline css, Only respond with code as plain text without code block syntax or explanation around it";
export const noLambda="dont use lambda notation, use the function keyword"
export const noComponent="dont use Component, use function ()"
  export async function sendPrompt({ prompts, setCode }) {
  console.log(prompts);
  var e = env;
  console.log(e);
  const OPENAI_API_KEY = e.OPENAI_API_KEY;

  const messages = [...prompts, promptConfig,noLambda,noComponent].map((p) => ({
    role: "user",
    content: p,
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
    .then((response) => {
      if (response.status != 200) {
        alert("API:" + response.status);
        return;
      }
      return response.json();
    })
    .then((data) => {
      if (data == null) {
        return;
      }
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
