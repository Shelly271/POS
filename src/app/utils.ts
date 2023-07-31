export  function Pin(value: string): boolean {
    if (value.length >= 4) {
        return true;
    } else {
        return false
    }
}
export  function Price(value:string):boolean {
    if (value.length === 0) {
        return false;
    } else {
        return true;
    }

}
