export interface MitigationAnomaly {
  action: string;
  name: string;
  scoreThreshold: number;
}

export interface MitigationBrowser {
  action: string;
  name: string;
  maxVersion: number;
  minVersion: number;
}
