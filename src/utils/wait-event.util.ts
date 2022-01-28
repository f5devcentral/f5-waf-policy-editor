export class WaitEventUtil {
  private readonly _promise;
  private _resolve: any;
  private _isReleased = false;

  constructor() {
    this._promise = new Promise((resolve) => {
      this._resolve = resolve;
    });
  }

  waitEvent() {
    return this._promise;
  }

  releaseEvent() {
    this._isReleased = true;
    if (this._resolve) {
      this._resolve();
    }
  }

  isReleased(): boolean {
    return this._isReleased;
  }
}
