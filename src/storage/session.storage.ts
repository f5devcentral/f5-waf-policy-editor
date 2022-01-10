import { ApplicationState, DefaultApplicationState } from "../store";

const stateVar = "waffler-state#0.1-Beta";

export class SessionStorage {
  loadState(): ApplicationState {
    try {
      const serializedState = sessionStorage.getItem(stateVar);
      return JSON.parse(serializedState ? serializedState : "");
    } catch (e) {
      return DefaultApplicationState();
    }
  }

  saveState(state: ApplicationState) {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem(stateVar, serializedState);
    } catch (e) {}
  }
}
