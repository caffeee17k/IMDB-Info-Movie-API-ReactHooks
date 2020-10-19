const axios = require('axios');

const apikey = "4b4cbc93";

module.exports = {
    async Show(req, res) {
       // return res.json({ ok: true });
        const {  } = req.body;
        const response = await axios.get(`http://www.omdbapi.com/?apikey=`+apikey);
    }
};