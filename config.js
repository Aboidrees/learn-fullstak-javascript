const env = process.env;

export const nodeEnv = env.NODE_ENV || 'Development'
export const logStars = function(massage){
    console.log('****************')
    console.log(massage)
    console.log('****************')
}
export default{
    port: env.PORT || 8080,
    host: env.HOST || '0.0.0.0',
    get serverUrl(){
        return `http://${this.host}:${this.port}`;
    }
}
