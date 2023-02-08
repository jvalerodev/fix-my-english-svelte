import axios from 'axios';

type ResponseApi = {
  text: string;
};

const EnglishService = {
  fixIt: async (input: string) => {
    const res = await axios.post('/api/fix-english', { text: input });
    const { text }: ResponseApi = res.data;

    return text;
  }
};

export default EnglishService;
