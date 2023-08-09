import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000/api/guess' // server api endpoint
})

const startGame = async () => {
    try {
        const { data: { msg }} = await instance.post('/start');
        return msg;
    }  catch (error) {
        alert(`Error: ${error.message}. 500 Internl Server Error.`);
    }
}

const guess = async (number) => {
    try {
        const { data: { msg } } = await instance.get('/guess', { params: { number } });
        return msg;
    }  catch (error) {
        alert(`Error: ${error.response.data.msg}`);
    }
}

const restart = async () => {
    try {
        const { data: { msg }} = await instance.post('/restart');
        return msg;
    }  catch (error) {
        alert(`Error: ${error.message}. 500 Internl Server Error.`);
    }
};

export { startGame, guess, restart };