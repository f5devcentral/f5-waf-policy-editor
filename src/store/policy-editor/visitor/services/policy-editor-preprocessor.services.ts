import { Policy } from "../../../../model/policy-schema/policy";

export class PolicyEditorPreprocessorServices {
  constructor(private body: string) {}

  preprocess(): string {
    try {
      const parsed = JSON.parse(this.body);
      const policy = parsed.policy as Policy;

      if (policy?.urls) {
        policy.urls = policy.urls.sort(
          (l, r) => (l.wildcardOrder ?? 0) - (r?.wildcardOrder ?? 0)
        );
      }

      return JSON.stringify({ policy }, null, 2);
    } catch (e) {
      return this.body;
    }
  }
}
