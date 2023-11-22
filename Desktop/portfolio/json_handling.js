// JSON handling example
// JSON data sample
const jsonData = '{"events":[{"name":"Web Development Workshop","date":"2023-12-01"}]}';
const eventsData = JSON.parse(jsonData);
console.log(eventsData);

// Manipulating JSON
eventsData.events[0].name = 'Advanced Web Development Workshop';
const updatedJsonData = JSON.stringify(eventsData);
console.log(updatedJsonData);
