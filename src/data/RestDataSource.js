import Axios from "axios"
import { RestUrls } from "./Urls"

export class RestDataSource{
    constructor(err_handler) {
        this.error_handler = err_handler || (() => {});
    }
    GetData = (dataType)=>this.SendRequest("get",RestUrls[dataType]);
    SendRequest=(method,url)=>Axios.request({method,url});
}