export default class utils {
  static currentDate() {
    let now = new Date();
    let local = new Date(now);
    local.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  }
}