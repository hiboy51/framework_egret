/*
 * @Author: Kinnon.Z 
 * @Date: 2018-08-03 16:53:23 
 * @Last Modified by: Kinnon.Z
 * @Last Modified time: 2018-08-03 17:18:37
 */

class Protocol implements IProtocol {
    public static build(id: string, body?: any) : Protocol {
        let p = new Protocol(id);
        for (let key in body) {
            p.body[key] = body[key];
        }
        return p;
    }

    public readonly id: string;
    public body: any = {};
    
    constructor(id: string) {
        this.id = id;
    }

    public option(key: string, value: any) : Protocol {
        this.body[key] = value;
        return this;    
    }

    public serialize() : string {
        let id = this.id;
        let body = this.body
        return JSON.stringify({id, body});
    }
}
