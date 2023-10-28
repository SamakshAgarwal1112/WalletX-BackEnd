const pool = require('../../Config');
const queries = require('../../Queries');
const bcrypt = require('bcrypt');
const handleSignUpError = (err) => {
    if(err.constraint === 'unique_users_email'){
        return {message: 'Email already exists'};
    }else if(err.message === 'Password length must be greater than 6'){
        return {message: 'Password length must be greater than 6'};
    }
    throw err;  //otherwise throw other unhandled errors.
}
module.exports.fetch = async(req, resp) => {
    try{
        let result = await pool.query(queries.fetch);
        resp.json(result.rows);
    }catch (err) {
        console.error(err);
        resp.status(500).json({ message: 'Internal Server Error' });
    };
};
module.exports.search = async(req, resp) => {
    try{
        const {username} = req.params;
        let result = await pool.query(queries.search, [username]);
        if(result.rows.length > 0){
            resp.json(result.rows);
        }else{
            return resp.status(404).json({message: 'User not found'});
        }
    }catch(err){
        console.error(err);
        resp.status(500).json({ message: 'Internal Server Error', error: err });
    }
};
module.exports.signUp = async (req, resp) => {
    try {
        const { username, email, password, watchlist_items } = req.body;

        // Check if the user already exists by username
        let result = await pool.query(queries.search, [username]);
        if (result.rows.length > 0) {
            return resp.status(401).json({ message: 'User already exists' });
        }
        // Check password length
        if (password.length < 6) {
            throw new Error('Password length must be greater than 6');
        }
        // Hash the password using bcrypt + salt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Insert the new user
        result = await pool.query(queries.signUp, [username, email, hashedPassword, watchlist_items]);
        resp.json({ message: 'User signed up successfully', result: result.rows });
    } catch (err) {
        const error = handleSignUpError(err);
        resp.status(500).json({ error: error.message });
    }
};