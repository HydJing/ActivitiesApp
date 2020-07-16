import { RootStore } from './rootStore';
import { observable, computed, action } from 'mobx';

export class CommonStore {
  
    rootStore: RootStore;

  
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable token: string | null = null;
  @observable appLoaded = false;

  @action setToken = (token: string | null) => {
      window.localStorage.setItem('jwt', token);
      this.token = token;
  }

  @action setAppLoaded = () => {
    this.appLoaded = true;
}
}
