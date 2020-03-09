function RGBtoHex(rgb:number[]):number {
    if (rgb.length < 3)
        return 0x000000;

    var color = (1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2];
    return color;
}

function HextoRGB(hex:number):number[] {

    var red:number = (hex & 0xFF0000) >> 16;
    var green:number = (hex & 0x00FF00) >> 8;
    var blue:number = (hex & 0x0000FF);
    return [red, green, blue];
}

function hexToCSS(hex:number):string
{
    return '#' + hex.toString(16);
}
