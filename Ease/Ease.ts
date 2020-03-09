export namespace EaseTool {

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // LINER

    export function linear(time: number, begin: number, change: number, duration: number): number {
        return change * time / duration + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  SINE

    export function sineIn(time: number, begin: number, change: number, duration: number): number {
        return -change * Math.cos(time / duration * (Math.PI / 2)) + change + begin;
    }

    export function sineOut(time: number, begin: number, change: number, duration: number): number {
        return change * Math.sin(time / duration * (Math.PI / 2)) + begin;
    }

    export function sineInOut(time: number, begin: number, change: number, duration: number): number {
        return -change / 2 * (Math.cos(Math.PI * time / duration) - 1) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  QUAD

    export function quadIn(time: number, begin: number, change: number, duration: number): number {
        return change * (time /= duration) * time + begin;
    }

    export function quadOut(time: number, begin: number, change: number, duration: number): number {
        return -change * (time /= duration) * (time - 2) + begin;
    }

    export function quadInOut(time: number, begin: number, change: number, duration: number): number {
        if ((time /= duration / 2) < 1) return change / 2 * time * time + begin;
        return -change / 2 * ((--time) * (time - 2) - 1) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  CUBIC

    export function cubicIn(time: number, begin: number, chnage: number, duration: number): number {
        return chnage * (time /= duration) * time * time + begin;
    }

    export function cubicOut(time: number, begin: number, change: number, duration: number): number {
        return change * ((time = time / duration - 1) * time * time + 1) + begin;
    }

    export function cubicInOut(time: number, begin: number, change: number, duration: number): number {
        return ((time /= duration / 2) < 1) ? change / 2 * time * time * time + begin : change / 2 * ((time -= 2) * time * time + 2) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  QUART

    export function quartIn(time: number, begin: number, change: number, duration: number): number {
        return change * (time /= duration) * time * time * time + begin;
    }

    export function quartOut(time: number, begin: number, change: number, duration: number): number {
        return -change * ((time = time / duration - 1) * time * time * time - 1) + begin;
    }

    export function quartInOut(time: number, begin: number, change: number, duration: number): number {
        if ((time /= duration / 2) < 1) return change / 2 * time * time * time * time + begin;
        return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  QUINT

    export function quintIn(time: number, begin: number, change: number, duration: number): number {
        return change * (time /= duration) * time * time * time * time + begin;
    }

    export function quintOut(time: number, begin: number, change: number, duration: number): number {
        return change * ((time = time / duration - 1) * time * time * time * time + 1) + begin;
    }

    export function quintInOut(time: number, begin: number, change: number, duration: number): number {
        if ((time /= duration / 2) < 1) return change / 2 * time * time * time * time * time + begin;
        return change / 2 * ((time -= 2) * time * time * time * time + 2) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  EXPO

    export function expoIn(time: number, begin: number, change: number, duration: number): number {
        return time == 0 ? begin : change * Math.pow(2, 10 * (time / duration - 1)) + begin;
    }

    export function expoOut(time: number, begin: number, change: number, duration: number): number {
        return time == duration ? begin + change : change * (1 - Math.pow(2, -10 * time / duration)) + begin;
    }

    export function expoInOut(time: number, begin: number, change: number, duration: number): number {
        if (time == 0) return begin;
        if (time == duration) return begin + change;
        if ((time /= duration / 2.0) < 1.0) return change / 2 * Math.pow(2, 10 * (time - 1)) + begin;
        return change / 2 * (2 - Math.pow(2, -10 * --time)) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  CIRC

    export function circIn(time: number, begin: number, change: number, duration: number): number {
        return -change * (Math.sqrt(1 - (time /= duration) * time) - 1) + begin;
    }

    export function circOut(time: number, begin: number, change: number, duration: number): number {
        return change * Math.sqrt(1 - (time = time / duration - 1) * time) + begin;
    }

    export function circInOut(time: number, begin: number, change: number, duration: number): number {
        if ((time /= duration / 2) < 1) return -change / 2 * (Math.sqrt(1 - time * time) - 1) + begin;
        return change / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + begin;
    }

}

