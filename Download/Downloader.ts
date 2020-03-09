
export default class FileDownloader {

  static downloadTextFile(__filename: string, __content: string): void {
    let mimeType = 'text/plain';
    let bom = new Uint8Array([0xEF, 0xBB, 0xBF]); // 文字化け対策
    let blob = new Blob([bom, __content], {type: mimeType});

    FileDownloader.downloadBlob(__filename, blob);
  }

  private static downloadBlob(__filename: string, __blob: Blob): void {
    if (window.navigator.msSaveBlob) {
      // for IE
      window.navigator.msSaveBlob(__blob, __filename)
    }
    else if (window.URL && window.URL.createObjectURL) {
      // for Firefox and Chrome and Safari
      let a = document.createElement('a');
      a.download = __filename;
      a.href = window.URL.createObjectURL(__blob);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }


  static downloadCanvasImage(__filename, __canvas): void {
    let imageType = "image/png";
    let fileName = __filename;
    let base64 = __canvas.toDataURL(imageType);
    let tmp = base64.split(',');
    // base64データの文字列をデコード
    let data = atob(tmp[1]);
    let mime = tmp[0].split(':')[1].split(';')[0];
    let buf = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
      buf[i] = data.charCodeAt(i);
    }
    let blob = new Blob([buf], {type: mime});
    FileDownloader.downloadBlob(__filename, blob);
  }

}

