export default function (URLstring) {
        let stringSeperatedOnDash = URLstring.split("/", 3)
        return stringSeperatedOnDash[2]
    
}