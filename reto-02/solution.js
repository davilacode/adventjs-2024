function createFrame(names) {
  let longString = [...names].sort(function (a, b) {
    return b.length - a.length;
  })[0].length;
  
  let mark = '*'.repeat(longString + 4)
  for(let name of names){
    mark +=`\n* ${name}${' '.repeat(longString - name.length)} *`
  }
  mark += '\n'
  mark += '*'.repeat(longString + 4)
  return mark
}