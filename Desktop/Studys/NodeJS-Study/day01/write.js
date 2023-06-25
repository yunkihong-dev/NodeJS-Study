const fs= require('fs')
const text = '치킨엔 칭따오';

fs.writeFile('./test1.txt', text,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("파일이 정상적으로 저장되었습니다.")
} )

try{
    fs.writeFileSync('./test2.txt', text)
    console.log("파일이 정상적으로 저장되었습니다")
}catch(err){
    console.log(err)
}