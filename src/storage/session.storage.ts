import { ApplicationState } from "../store";

const stateVar = "editor-state#0.1";

export class SessionStorage {
  loadState(): ApplicationState {
    try {
      const serializedState = sessionStorage.getItem(stateVar);
      return JSON.parse(serializedState ? serializedState : "");
    } catch (e) {
      return {};
    }
  }

  saveState(state: ApplicationState) {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem(stateVar, serializedState);
    } catch (e) {}
  }
}
