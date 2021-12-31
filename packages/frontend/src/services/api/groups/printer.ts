import { Api } from '../api';

export class Printer {
  constructor(private api: Api) {}

  async getPrinterList() {
    return this.api.sendRequest({
      url: '/printers/list',
      method: 'GET',
    });
  }

  async connect() {
    return this.api.sendRequest({
      url: '/printers/connect',
      method: 'POST',
    });
  }
}
