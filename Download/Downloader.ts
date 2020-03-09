
export default class FileDownloader {

  static downloadTextFile(filename: string, content: string): void {
    let mimeType = 'text/plain';
    let bom = new Uint8Array([0xEF, 0xBB, 0xBF]); // 文字化け対策
    let blob = new Blob([bom, content], {type: mimeType});

    FileDownloader.downloadBlob(filename, blob);
  }

  private static downloadBlob(filename: string, blob: Blob): void {
    if (window.navigator.msSaveBlob) {
      // for IE
      window.navigator.msSaveBlob(blob, filename)
    }
    else if (window.URL && window.URL.createObjectURL) {
      // for Firefox and Chrome and Safari
      let a = document.createElement('a');
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
}

