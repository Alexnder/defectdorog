export default class storage {
  static getDefects(callback) {
    fetch('http://localhost:3000/defects')
      .then((response) => response.json())
      .then(data => callback(data))
      .catch((e) => console.error('storage:getDefects', e));
  }
  static setDefects(defects, callback) {
    fetch('http://localhost:3000/defects', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(defects)
    })
      .then((response) => response.json())
      .then(data => callback(data))
      .catch((e) => console.error('storage:setDefects', e));
  }
}