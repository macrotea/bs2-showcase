/* Nano Templates (Tomasz Mazur, Jacek Becela) */

/*
 * 用法 : nano("<option value='{id}'>{name}</option>",{id:1001,name:'tea'})
 */

function nano(template, data) {
  return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
    var keys = key.split("."), v = data[keys.shift()];
    for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
    return (typeof v !== "undefined" && v !== null) ? v : "";
  });
}
