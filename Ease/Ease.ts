class EaseUtils {

    constructor() {
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // LINER

    public static linear(time:number, begin:number, change:number, duration:number):number {
        return change * time / duration + begin;
    }
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  SINE

    public static sineIn(time:number, begin:number, change:number, duration:number):number {
        return -change * Math.cos(time / duration * (Math.PI / 2)) + change + begin;
    }

    public static sineOut(time:number, begin:number, change:number, duration:number):number {
        return change * Math.sin(time / duration * (Math.PI / 2)) + begin;
    }

    public static sineInOut(time:number, begin:number, change:number, duration:number):number {
        return -change / 2 * (Math.cos(Math.PI * time / duration) - 1) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  QUAD

    public static quadIn(time:number, begin:number, change:number, duration:number):number {
        return change * (time /= duration) * time + begin;
    }

    public static quadOut(time:number, begin:number, change:number, duration:number):number {
        return -change * (time /= duration) * (time - 2) + begin;
    }

    public static quadInOut(time:number, begin:number, change:number, duration:number):number {
        if ((time /= duration / 2) < 1) return change / 2 * time * time + begin;
        return -change / 2 * ((--time) * (time - 2) - 1) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  CUBIC

    public static cubicIn(time:number, begin:number, chnage:number, duration:number):number {
        return chnage * (time /= duration) * time * time + begin;
    }

    public static cubicOut(time:number, begin:number, change:number, duration:number):number {
        return change * ((time = time / duration - 1) * time * time + 1) + begin;
    }

    public static cubicInOut(time:number, begin:number, change:number, duration:number):number {
        return ((time /= duration / 2) < 1) ? change / 2 * time * time * time + begin : change / 2 * ((time -= 2) * time * time + 2) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  QUART

    public static quartIn(time:number, begin:number, change:number, duration:number):number {
        return change * (time /= duration) * time * time * time + begin;
    }

    public static quartOut(time:number, begin:number, change:number, duration:number):number {
        return -change * ((time = time / duration - 1) * time * time * time - 1) + begin;
    }

    public static quartInOut(time:number, begin:number, change:number, duration:number):number {
        if ((time /= duration / 2) < 1) return change / 2 * time * time * time * time + begin;
        return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  QUINT

    public static quintIn(time:number, begin:number, change:number, duration:number):number {
        return change * (time /= duration) * time * time * time * time + begin;
    }

    public static quintOut(time:number, begin:number, change:number, duration:number):number {
        return change * ((time = time / duration - 1) * time * time * time * time + 1) + begin;
    }

    public static quintInOut(time:number, begin:number, change:number, duration:number):number {
        if ((time /= duration / 2) < 1) return change / 2 * time * time * time * time * time + begin;
        return change / 2 * ((time -= 2) * time * time * time * time + 2) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  EXPO

    public static expoIn(time:number, begin:number, change:number, duration:number):number {
        return time == 0 ? begin : change * Math.pow(2, 10 * (time / duration - 1)) + begin;
    }

    public static expoOut(time:number, begin:number, change:number, duration:number):number {
        return time == duration ? begin + change : change * (1 - Math.pow(2, -10 * time / duration)) + begin;
    }

    public static expoInOut(time:number, begin:number, change:number, duration:number):number {
        if (time == 0) return begin;
        if (time == duration) return begin + change;
        if ((time /= duration / 2.0) < 1.0) return change / 2 * Math.pow(2, 10 * (time - 1)) + begin;
        return change / 2 * (2 - Math.pow(2, -10 * --time)) + begin;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  CIRC

    public static circIn(time:number, begin:number, change:number, duration:number):number {
        return -change * (Math.sqrt(1 - (time /= duration) * time) - 1) + begin;
    }

    public static circOut(time:number, begin:number, change:number, duration:number):number {
        return change * Math.sqrt(1 - (time = time / duration - 1) * time) + begin;
    }

    public static circInOut(time:number, begin:number, change:number, duration:number):number {
        if ((time /= duration / 2) < 1) return -change / 2 * (Math.sqrt(1 - time * time) - 1) + begin;
        return change / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + begin;
    }

}

export = EaseUtils
