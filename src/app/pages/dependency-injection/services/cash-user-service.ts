import {Injectable} from "../dependecy-libs/inject-function";

const USERS_CASH_MAP = new Map<number, any>();

@Injectable()
export class CashUserService {
    constructor() {
    }

    set(key: number, value: any): void {
      USERS_CASH_MAP.set(key, value);
    }

    get(key: number): any {
      return USERS_CASH_MAP.get(key);
    }
}
