export class PolicyEditorPreprocessorServices {
  constructor(private body: string) {}

  private sortByWildcardOrder(arr: any): any {
    if (!arr) return arr;
    return arr.sort(
      (l: any, r: any) => (l.wildcardOrder ?? 0) - (r?.wildcardOrder ?? 0)
    );
  }

  preprocess(): string {
    try {
      const parsed = JSON.parse(this.body);
      const policy = parsed.policy as any;

      Object.keys(policy).forEach((k) => {
        if (
          policy[k] !== undefined &&
          Array.isArray(policy[k]) &&
          policy[k].length > 0 &&
          policy[k][0].wildcardOrder !== undefined
        ) {
          policy[k] = this.sortByWildcardOrder(policy[k]);
        }
      });

      return JSON.stringify({ policy }, null, 2);
    } catch (e) {
      return this.body;
    }
  }
}
