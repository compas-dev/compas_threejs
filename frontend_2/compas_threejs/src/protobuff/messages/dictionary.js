import { DictData } from "../generated/compas_pb/data/message";
export class Dictionary {
    data;
    constructor(input) {
        let dictData;
        if ("bytes" in input) {
            dictData = bytesToDictData(input.bytes);
        }
        else {
            dictData = input.data;
        }
        this.data = dictData;
    }
    get bytes() {
        return dictDataToBytes(this.data);
    }
    get asDict() {
        const result = {};
        for (const key in this.data.items) {
            if (Object.prototype.hasOwnProperty.call(this.data.items, key)) {
                result[key] = this.data.items[key];
            }
        }
        return result;
    }
}
export function bytesToDictData(bytes) {
    return DictData.decode(bytes);
}
export function dictDataToBytes(dict) {
    return DictData.encode(dict).finish();
}
