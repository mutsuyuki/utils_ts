
export default class Timer {

  private waitingTime: number;
  private remainTime: number;
  private startTime: number;
  private lapTime: number;
  private lastLapTime: number;
  private onLap:Function;
  private onEnd:Function;

  private requestAnimationId:number = -1;

  public start(__milliSeconds: number, __lapTime: number = 1000, onLap:Function=null, onEnd:Function=null): void {
    this.waitingTime = __milliSeconds;
    this.remainTime = __milliSeconds;
    this.startTime = (new Date).getTime();
    this.lapTime = __lapTime;
    this.lastLapTime = this.startTime;
    this.onLap = this.onLap;
    this.onEnd = this.onEnd;
    this.loop();
  }

  public stop():void{
    cancelAnimationFrame(this.requestAnimationId);
  }

  public loop(): void {
    let currentTime: number = (new Date).getTime();

    let elapseFromLastLap: number = currentTime - this.lastLapTime;
    if (elapseFromLastLap >= this.lapTime) {
      this.lastLapTime = currentTime;
      this.onLap();
    }

    let elapseFromStart: number = currentTime - this.startTime;
    this.remainTime = this.waitingTime - elapseFromStart;
    if (elapseFromStart >= this.waitingTime) {
      this.onEnd();
      return;
    }

    this. requestAnimationId = requestAnimationFrame(() => this.loop());
  }

  public getRemainTime(): number {
    return this.remainTime;
  }
}

