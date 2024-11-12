const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="solotsuma@outlook.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/Tsumahhh/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://wa.me/+254743399594";
global.website=process.env.GURL || "https://wa.me/+254743399594" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© TsumaTech" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_39_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICA2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDMxLFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICA4MixcbiAgICAgICAgNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibHlZNW9tWTNlcEx6bFFqODVEeXlwdTdKVVVEYy9CQU40MnV4SGJHdU4xYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNVVEd0s0V1hSTy14dTJQMU9xXzdjd1wiLFxuICBcInBob25lSWRcIjogXCIxNDlhZGZlZS1mZjc5LTRhMTgtOTVkOC0yYTA5MDdkODJlMGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgOTIsXG4gICAgICAxOSxcbiAgICAgIDI0NyxcbiAgICAgIDMxLFxuICAgICAgNTMsXG4gICAgICA3OSxcbiAgICAgIDIyMSxcbiAgICAgIDIyMixcbiAgICAgIDI1MixcbiAgICAgIDE4MixcbiAgICAgIDE3OCxcbiAgICAgIDE5MixcbiAgICAgIDEyMSxcbiAgICAgIDEwMixcbiAgICAgIDE4MixcbiAgICAgIDExNyxcbiAgICAgIDE5MyxcbiAgICAgIDIwMixcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAyNDYsXG4gICAgICA4OSxcbiAgICAgIDIzOCxcbiAgICAgIDE3MyxcbiAgICAgIDc4LFxuICAgICAgMTQ5LFxuICAgICAgMTU0LFxuICAgICAgMjQzLFxuICAgICAgMTU5LFxuICAgICAgMTk1LFxuICAgICAgMjU1LFxuICAgICAgMTgzLFxuICAgICAgMzEsXG4gICAgICA0MCxcbiAgICAgIDExNSxcbiAgICAgIDE4LFxuICAgICAgODIsXG4gICAgICAyMDIsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLR0UrYkVDRU5qNXpya0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjA4ZnFxTlFYQXRyWkw1c2dySkNERUlyZm9UcVVnQWVFbENXLzFBVnlRU0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSCtJVWM5b3VnT2hWTlVpMU5CMTVUQVFON0RmY0FTTmI1WHc5TmQxMWpnMHRhM2NqUjk3bm5idWJCOXVTVnNFUDlwMUI5MXhlZWVzcng3WHR3clVkQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicUtHeExJYXVaVmxiV0NZeHdNMHExMC9xZndsdkZabWUrc0pxL2xuTDE3VEo4cnZjbXdzWW9QUFN4MCt4aTFVYUdqUGZtbkNYdTc4MXUyazl1RXdTZ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDMzOTk1OTQ6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMDU0NDk5MTg0NjU4Mzo4NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MzM5OTU5NDo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE0NDM5MzJcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Tsuma-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ TsumaTechTech ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • TSUMA ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Tsuma",
  packname: process.env.PACK_NAME || "TSUMA PACK",
  botname : process.env.BOT_NAME  || "Tsuma-MD",
  ownername:process.env.OWNER_NAME|| "TSUMA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "TSUMA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
