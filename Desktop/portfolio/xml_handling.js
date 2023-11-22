// JavaScript source code
// XML handling example
// Parsing XML
const xmlString = '<events><event><name>Web Development Workshop</name><date>2023-12-01</date></event></events>';
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
console.log(xmlDoc);

// Manipulating XML
const eventNameNode = xmlDoc.querySelector('event name');
eventNameNode.textContent = 'Advanced Web Development Workshop';
console.log(xmlDoc);
