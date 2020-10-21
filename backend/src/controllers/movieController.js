const axios = require('axios');

const key = "4b4cbc93";

module.exports = {
    async Show(req, res) {
       // return res.json({ ok: true });
        const { searchMovie } = req.body;

        // console.log(req.query);
        // console.log(req.body);

        const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=${key}`;

        

        const response = await axios.get(url);
        
        // console.log(url);

        //const { year, poster } = response.data;

        console.log(response.data.Search);

        return res.json(response.data);
    }
};