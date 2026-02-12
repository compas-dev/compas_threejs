import { TranslationData } from "../generated/compas_pb/data/geometry";
import { Vector } from "./vector";
export class Translation {
    data;
    _translationVector;
    constructor(input) {
        let translationData;
        if ("bytes" in input) {
            translationData = bytesToTranslationData(input.bytes);
        }
        else {
            translationData = input.data;
        }
        if (!translationData.translationVector) {
            throw new Error("Invalid TranslationData: Missing required properties (vector or frame).");
        }
        this.data = translationData;
    }
    get bytes() {
        return translationDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get translationVector() {
        if (!this._translationVector) {
            this._translationVector = new Vector({
                data: this.data.translationVector,
            });
        }
        return this._translationVector;
    }
}
export function bytesToTranslationData(bytes) {
    return TranslationData.decode(bytes);
}
export function translationDataToBytes(data) {
    return TranslationData.encode(data).finish();
}
