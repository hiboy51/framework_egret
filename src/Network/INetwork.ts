/*
 * @Author: Kinnon.Z 
 * @Date: 2018-08-03 16:33:05 
 * @Last Modified by: Kinnon.Z
 * @Last Modified time: 2018-08-03 17:51:50
 */
interface IProtocol {
    id: string | number;
    body?: any;
}

interface IMsg {
    encode: () => ArrayBuffer | string;
    decode: (data: ArrayBuffer | string) => IProtocol;
    dispatch?: Function;
}

interface INetwork {
    connect?: (args: any) => void;
    disconnect?: Function;
    heartbeats?: (succ: Function, fail: Function) => void;
    receive: (msg: IMsg) => void;
    send: (msg: IMsg) => number;
}