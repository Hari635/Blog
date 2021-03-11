import axios from "axios";
import { EventEmitter } from "react-native";
export default axios.create({
    baseURL:'https://cec742ccec93.ngrok.io/'
})
// C:\rn-starter\jsonserver>npm run db
// in another command prom Enter
// C:\rn-starter\jsonserver>npm run tunnel