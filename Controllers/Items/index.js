    const pool = require('../../Config');
    const queries = require('../../Queries/Items');
    const UserQueries = require('../../Queries/Users');
    const AssetLink = require('../../Data/Links');
    const jwt = require('jsonwebtoken');
    module.exports.addToWatchList = async (req, resp) => {
        try{
            const {asset_name, asset_id} = req.body;
            const asset_info = AssetLink.links[asset_id];
            const token = req.cookies.jwt;
            if(!token){
                return resp.status(401).json({message: 'Unauthorized'});
            }
            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            const user_id = decodedToken.id;
            let result = await pool.query(UserQueries.searchById, [user_id]);
            const username = result.rows[0].username;//result.rows[0] = user's object
            result = await pool.query(queries.searchData, [asset_id, username]);
            if(result.rows.length === 0){
                result = await pool.query(queries.insertData, [username, asset_id, asset_name, asset_info]);
                console.log(result.rows[0]);
                return resp.status(201).json({message: 'Added to watchlist'});
            }else{
                return resp.status(400).json({message: 'Already added to watchlist'});
            }
        }catch(err){
            console.error(err);
            resp.status(500).json({message: 'Internal Server Error'});
        }
    }