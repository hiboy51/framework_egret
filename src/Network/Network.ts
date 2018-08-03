/*
 * @Author: Kinnon.Z 
 * @Date: 2018-08-03 16:06:57 
 * @Last Modified by: Kinnon.Z
 * @Last Modified time: 2018-08-03 17:53:30
 */


class Network_Impl_Websocket implements INetwork {
    private _socket : egret.WebSocket;
    private _isConnect: boolean = false;

    constructor() {
        this._socket = new egret.WebSocket();
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onWS_ReceiveData, this);
        this._socket.addEventListener(egret.Event.CONNECT, this.onWS_Connect, this);
    }

    private onWS_ReceiveData(e: egret.Event) : void {
        let msg = this._socket.readUTF();
        this.receive(Message_Impl.get(msg));
    }

    private onWS_Connect(e: egret.Event) : void {
        this._isConnect = true;
    }

    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // implements INetwork
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public connect({url, port}) : void {
        this._socket.connect(url, port);
    }

    public receive(msg: Message_Impl) : void {
        msg.dispatch();
    }

    public send(msg: Message_Impl) : number {
        let code = 0;
        this._socket.writeUTF(msg.encode());
        return code;
    }
}