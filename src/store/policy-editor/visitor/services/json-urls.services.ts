import { Policy } from "../../../../model/policy-schema/policy.definitions";
import move from "lodash-move";

export class JsonUrlsServices {
  constructor(private currentJson: Policy) {}

  changeOrder(sourceIndex: number, destinationIndex: number): void {
    if (!this.currentJson.urls || !this.currentJson?.urls[sourceIndex]) return;

    this.currentJson.urls = move(
      this.currentJson.urls,
      sourceIndex,
      destinationIndex
    );

    this.currentJson.urls?.forEach((x, index) => {
      x.wildcardOrder = index;
    });
  }
}
