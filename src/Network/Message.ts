/*
 * @Author: Kinnon.Z 
 * @Date: 2018-08-03 16:53:09 
 * @Last Modified by: Kinnon.Z
 * @Last Modified time: 2018-08-03 17:51:28
 */

class Message_Impl implements IMsg {
    public static get(data: string | Protocol = null) : Message_Impl {
        return new Message_Impl(data);
    }

    private host: string | Protocol;
    constructor(raw: string | Protocol) {
        this.host = raw;
    }

    public encode() : string {
        return (this.host as Protocol).serialize();
    }

    public decode(data?: string) : Protocol {
        data = data || this.host as string;
        if (!data) {
            return null;
        }
        try {
            let json = JSON.parse(data);
            let { id } = json;
            if (id === undefined) {
                return null;
            }
            let p = Protocol.build(id);
            for (let key in json) {
                p.option(key, json[key]);
            }
            return p;
        }
        catch (e) {
            return null;
        }
    }

    public dispatch() : void {
        
    }
}
