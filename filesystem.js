const fs=require("fs")
const path=require ("path")
const filePath=path.resolve("content","welcom.txt")
fs.writeFileSync(filePath,"Hello Node")
