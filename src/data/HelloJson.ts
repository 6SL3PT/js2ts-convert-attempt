type HelloJson = {
    message: String
}

const helloJson: HelloJson = {
    message:  'Hello JSON'
}

export class exportedHJson{
    getData(){
        return helloJson;
    }
}