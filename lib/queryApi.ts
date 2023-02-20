import openai from "./chatgpt";

const query= async (prompt:string,chatId:string,model:string) => {
    const res = await openai.createCompletion({
        model: model,
        prompt: prompt,
        max_tokens: 1000,
        temperature: 0.9,
        top_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0,
        best_of: 1,
        n: 1,
        stream: false,
    }).then(res=> res.data.choices[0].text)
    .catch (err => `Sorry, I'm having trouble understanding you. Please try again later. (Error: ${err.message})`);
    return res;
       
};

export default query;
