const jwt = require('jsonwebtoken');
/**
 * Token的生成与校验
*/
/**
 * @param {String} data         加密数据
 * @param {Number} expiresIn    有效期（单位:s）
 */

module.exports = {

    //生成token
    secret: '2020-01-09:a79590eb9e2cb2ef372bbc55c34456d9',
    create (data, expiresIn = 7) {
        return jwt.sign({ data }, secret, {
            expiresIn: expiresIn * 60 * 60 * 24
        });
    },
    verify (token) {
        try {
            console.log('token校验：', jwt.verify(token, secret))
            return true;
        } catch (err) {
            return false;
        }
    }
}
