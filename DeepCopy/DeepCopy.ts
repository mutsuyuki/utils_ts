export namespace CopyTool {
    export function deepCopy<T>(source: T): T {
        return JSON.parse(JSON.stringify(source));
    }
}
