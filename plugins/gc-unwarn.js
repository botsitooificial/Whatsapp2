let handler = async (m, { conn, text, command, usedPrefix }) => {
let pp = './views/warn.jpg.png'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `[❗] tag a user or reply to a message\n\n example:\n${usedPrefix + command} @${global.suittag}`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return
if (user.warn == 0) throw '[❗] user has zero warnings'  
user.warn -= 1
await m.reply(`${user.warn == 1 ? `@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`} a warning was removed\n WARNINGS ${user.warn}/3*`, null, { mentions: [who]})}
handler.command = /^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
