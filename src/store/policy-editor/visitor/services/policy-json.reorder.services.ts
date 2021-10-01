import { Policy } from "../../../../model/policy-schema/policy.definitions";
import move from "lodash-move";

export class PolicyJsonReorderServices {
  constructor(private currentJson: Policy) {}

  changeOrder(
    path: string,
    wildCardOrderValueName: string,
    sourceIndex: number,
    destinationIndex: number
  ): void {
    if (
      !this.currentJson ||
      !(this.currentJson as any)[path] ||
      !(this.currentJson as any)[path][sourceIndex]
    )
      return;

    (this.currentJson as any)[path] = move(
      (this.currentJson as any)[path],
      sourceIndex,
      destinationIndex
    );

    (this.currentJson as any)[path].forEach((x: any, index: number) => {
      x[wildCardOrderValueName] = index;
    });
  }
}
