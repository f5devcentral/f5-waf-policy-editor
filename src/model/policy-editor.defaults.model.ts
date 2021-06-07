export const defaultGeneralSettings = () => ({
  policy: {
    name: "policy_name",
    template: {
      name: "POLICY_TEMPLATE_NGINX_BASE",
    },
    applicationLanguage: "utf-8",
    enforcementMode: "blocking",
  },
});

export const defaultBlockingSettings = (name: string) => ({
  name: name,
  alarm: true,
  block: false,
});

export const defaultMethods = () => ({
  name: "",
});

export const defaultUrls = (order: number) => ({
  name: "",
  type: "explicit",
  method: "*",
  protocol: "http",
  attackSignaturesCheck: true,
  metacharsOnUrlCheck: true,
  wildcardOrder: order,
});
