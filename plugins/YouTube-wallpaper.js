import{wallpaper}from'@bochilteam/scraper';let handler=async(_0x243d5a,{conn:_0x4be732,text:_0x25dccd,usedPrefix:_0x5086d5,command:_0x4d0937})=>{if(!_0x25dccd)throw'*[❗𝐈𝐍𝐅𝐎❗]EXAMPLE\x20USE\x20THE\x20COMMAND\x20'+(_0x5086d5+_0x4d0937)+'\x20Minecraft*';const _0x4ea8fb=await(/2/['test'](_0x4d0937)?wallpaperv2:wallpaper)(_0x25dccd),_0x6d991f=_0x4ea8fb[Math['floor'](Math['random']()*_0x4ea8fb['length'])];_0x4be732['sendFile'](_0x243d5a['chat'],_0x6d991f,'error.jpg','*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾\x20𝙳𝙴\x20'+_0x25dccd+'*\x0a\x0a\x0a*RESULT\x20OF\x20'+_0x25dccd+'*',_0x243d5a);};handler['help']=['','2']['map'](_0x48fb17=>'wallpaper'+_0x48fb17+'\x20<query>'),handler['tags']=['downloader'],handler['command']=/^(wallpaper2?)$/i,handler['premium']=!![],handler['register']=!![];export default handler;