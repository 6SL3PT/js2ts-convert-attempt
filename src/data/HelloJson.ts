type HelloJson = {
    message: string
}

const helloJson: HelloJson = {
    message:  'Hello JSON'
}

export class exportedHJson{
    getData(){
        return helloJson;
    }
}