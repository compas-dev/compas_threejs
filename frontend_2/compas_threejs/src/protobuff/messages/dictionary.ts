import { DictData } from "../generated/compas_pb/data/message";

export class Dictionary {
  public readonly data: DictData;

  constructor(input: { bytes: Uint8Array } | { data: DictData }) {
    let dictData: DictData;
    if ("bytes" in input) {
      dictData = bytesToDictData(input.bytes);
    } else {
      dictData = input.data;
    }

    this.data = dictData;
  }

  get bytes(): Uint8Array {
    return dictDataToBytes(this.data);
  }

  get asDict(): { [key: string]: any } {
    const result: { [key: string]: any } = {};
    for (const key in this.data.items) {
      if (Object.prototype.hasOwnProperty.call(this.data.items, key)) {
        result[key] = this.data.items[key];
      }
    }
    return result;
  }
}
export function bytesToDictData(bytes: Uint8Array): DictData {
  return DictData.decode(bytes);
}

export function dictDataToBytes(dict: DictData): Uint8Array {
  return DictData.encode(dict).finish();
}
