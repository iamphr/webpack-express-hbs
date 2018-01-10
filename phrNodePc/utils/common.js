// 遍历文件夹
const fs = require('fs');
const readDirSync = (path) => {
  const arr = [];
  const pa = fs.readdirSync(path);
  pa.forEach((ele,index) => {
    const info = fs.statSync( `${path}/${ele}` )
    if(info.isDirectory()){
      console.log("dir: "+ele)
      arr.push(ele);
    }
  });
  return arr;
};

const common = {
  readDirSync,
};

module.exports = common;