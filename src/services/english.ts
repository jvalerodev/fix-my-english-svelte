import axios from 'axios';

type ResponseApi = {
  text: string;
};

const EnglishService = {
  fixIt: async (input: string) => {
    try {
      const res = await axios.post('/api/fix-english', { text: input });
      const { text }: ResponseApi = res.data;

      return text;
    } catch (error) {
      console.log(error);
    }
  }
};

export default EnglishService;
