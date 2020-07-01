const env = process.env;

export const nodeEnv = env.NODE_ENV || 'Development'
export const logStars = function(massage){
    console.log('****************')
    console.log(massage)
    console.log('****************')
}
export default{
    port: env.PORT || 8080
}