const axios = require('axios');

const key = "4b4cbc93";

module.exports = {
    async Show(req, res) {
        // return res.json({ ok: true });
        const { getMovie } = req.query;

        // console.log(req.query);
        // console.log(req.body);

        const url = `http://www.omdbapi.com/?i=${getMovie}&apikey=${key}`;

        const response = await axios.get(url);

        //console.log(url);
        console.log(response.data);

        return res.json(response.data);
    }
};