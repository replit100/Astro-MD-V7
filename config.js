const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'default' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'SI' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/38c052d313ccf14d80550.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? 'ᴀꜱᴛʀᴏ-ᴍᴅ ᴘᴜʙʟɪᴄ ꜱᴛᴀʙʟᴇ' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*ɢᴇɴᴀʀᴀᴛᴇᴅ ʙʏ ᴀꜱᴛʀᴏ-ᴍᴅ*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*#INBOX HAS BLOCK#*' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? 'REPLIT' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? 'ASTRO=lrIiSR5B#Ur37WLk8mis3jjVTIUtdaGcI5aQn85gwLhtW8amVX8U' : process.env.SESSION_ID
};
