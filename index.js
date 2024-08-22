const dataJson =
  '[{"name": "Anton", "birthDate": "2002-01-14", "groupId": 944}, {"name": "Egor", "birthDate": "2001-01-14", "groupId":942}, {"name": "Igor", "birthDate": "2001-03-01", "groupId": 942}]';

function getStudentsGroup(dataJson) {
  let result = {};
  JSON.parse(dataJson).forEach((item) => {
    if (result[item.groupId] === undefined) {
      result[item.groupId] = [];
    }
    item.birthDate = new Date(item.birthDate).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    result[item.groupId].push(item);
  });
  return result;
}
