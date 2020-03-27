export default function (URLstring) {
        if(URLstring==undefined){
                return "unknown"
        }
        
        let stringSeperatedOnDash = URLstring.split("/", 3)
        return stringSeperatedOnDash[2]
    
}