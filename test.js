require('http').get('http://localhost:8081', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    if (data.includes('Hello CICD')) {
      console.log(' Test case Passed');
      process.exit(0);
    } else {
      console.log('Test case Failed');
      process.exit(1);
    }
  });
}).on('error', () => {
  console.log('Test Failed');
  process.exit(1);
});
