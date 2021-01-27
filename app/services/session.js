import Service from '@ember/service';

export default class SessionService extends Service {
  get clientKey() {
    return localStorage.clientKey;
  }

  set clientKey(value) {
    localStorage.clientKey = value;
  }

  async store(value) {
    let res = await fetch(
      `https://scuffd.games/.netlify/functions/github-auth?code=${value}`,
      {
        mode: 'cors',
      }
    );

    let data = await res.json();

    this.clientKey = data.access_token;
  }
}
