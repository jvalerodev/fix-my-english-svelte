import { json } from '@sveltejs/kit';
import cohere from 'cohere-ai';
import { PRIVATE_COHERE_API_KEY } from '$env/static/private';

type RequestBody = {
  text: string;
};

cohere.init(PRIVATE_COHERE_API_KEY, '2022-12-06');

export const POST = async ({ request }: { request: Request }) => {
  const { text }: RequestBody = await request.json();

  const res = await cohere.generate({
    model: 'xlarge',
    prompt: `This is a spell checker generator.
--
Incorrect sample: "I are good!"
Correct sample: "I am good!"
--
Incorrect sample: "I have 22 years old."
Correct sample: "I am 22 years old."
--
Incorrect sample: "I don't can know."
Correct sample: "I don't know."
--
Incorrect sample: "Do you know when your coming over?"
Correct sample: "Do you know when you're coming over?"
--
--
Incorrect sample: "Don't tell me that is raining!"
Correct sample: "Don't tell me that it's raining!"
--
Incorrect sample: "${text}"
Correct sample:`,
    max_tokens: 40,
    temperature: 0.3,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  });

  const { text: correctedText } = res.body.generations[0];
  const cleanText = correctedText.replace('--', '').replaceAll('"', '').trim();

  return json({ text: cleanText }, { status: 200 });
};
