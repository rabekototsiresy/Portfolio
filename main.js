const test = (string)=>{

        let strREv = ""

        for(let i=string.length;i>=0;i--){
                if(string[i] == undefined){
                        
                }else{
                        strREv +=  string[i] 
                }
        }

        return strREv
        
}

console.log(test('madagascar'))