
export default class CanvasUtil {

  static CanvasToBlob(canvas:HTMLCanvasElement): Blob {
    let imageType = "image/png";
    let base64 = canvas.toDataURL(imageType);
    let tmp = base64.split(',');
    // base64データの文字列をデコード
    let data = atob(tmp[1]);
    let mime = tmp[0].split(':')[1].split(';')[0];
    let buf = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
      buf[i] = data.charCodeAt(i);
    }
    return new Blob([buf], {type: mime});
  }

}

