import Parser from "ua-parser-js";

export default function isMobile(req: any) {
    debugger;
    console.log("testing", req);
    let userAgent: any;
    if(req){
        userAgent = Parser(req.headers['user-agent'] || '');
    } else {
        userAgent = new Parser().getResult();
    }

    return userAgent?.device?.type === 'mobile';
}