var http = require('http');
var server = http.createServer(function (request, response) {
    var url = request.url;
    console.log('request received for url: ' + url);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var output = '';
    if (url === '/india') { 
        output = '<h1>india</h1>';
        output += '<ul>';
        output += '<li>Rohit Sharma (c)</li>';
        output += '<li>Hardik Pandya (vc)</li>';
        output += '<li>Shubman Gill</li>';
        output += '<li>Virat Kohli</li>';
        output += '<li>KL Rahul</li>';
        output += '<li>Ravindra Jadeja</li>';
        output += '<li>Jasprit Bumrah</li>';
        output += '<li>Mohammed Siraj</li>';
        output += '<li>Kuldeep Yadav</li>';
        output += '<li>Mohammed Shami</li>';
        output += '<li>Ravichandran Ashwin</li>';
        output += '<li>Ishan Kishan</li>';
        output += '<li>Suryakumar Yadav</li>';
        output += '</ul>';
    }
    else if (url === '/england') {
        output = '<h1>England</h1>';
        output += '<ul>';
        output += '<li>Jos Buttler (c)</li>';
        output += '<li>Moeen Ali</li>';
        output += '<li>Gus Atkinson</li>';
        output += '<li>Jonny Bairstow</li>';
        output += '<li>Sam Curran</li>';
        output += '<li>Liam Livingstone</li>';
        output += '<li>Dawid Malan</li>';
        output += '<li>Adil Rashid</li>';
        output += '<li>Joe Root</li>';
        output += '<li>Harry Brook</li>';
        output += '<li>Ben Stokes</li>';
        output += '<li>Reece Topley</li>';
        output += '<li>David Willey</li>';
        output += '<li>Mark Wood</li>';
        output += '<li>Chris Woakes</li>';
        output += '</ul>';
    }
    else if (url === '/bangladesh') {
        output = '<h1>Bangladesh</h1>';
        output += '<ul>';
        output += '<li>Shakib Al Hasan (c)</li>';
        output += '<li>Litton Kumer Das</li>';
        output += '<li>Tanzid Hasan Tamim</li>';
        output += '<li>Najmul Hossain Shanto (vc)</li>';
        output += '<li>Tawhid Hridoy</li>';
        output += '<li>Mushfiqur Rahim</li>';
        output += '<li>Mahmudullah Riyad</li>';
        output += '<li>Mehidy Hasan Miraz</li>';
        output += '<li>Nasum Ahmed</li>';
        output += '<li>Shak Mahedi Hasan</li>';
        output += '<li>Taskin Ahmed</li>';
        output += '<li>Mustafizur Rahman</li>';
        output += '<li>Hasan Mahmud</li>';
        output += '<li>Shoriful Islam</li>';
        output += '<li>Tanzim Hasan Sakib</li>';
        output += '</ul>';
    }
    else if (url === '/afghanistan') {
        output = '<h1>Afghanistan</h1>';
        output += '<ul>';
        output += '<li>Hashmatullah Shahidi (c)</li>';
        output += '<li>Rahmanullah Gurbaz</li>';
        output += '<li>Ibrahim Zadran</li>';
        output += '<li>Riaz Hassan</li>';
        output += '<li>Rahmat Shah</li>';
        output += '<li>Najibullah Zadran</li>';
        output += '<li>Mohammad Nabi</li>';
        output += '<li>Ikram Alikhil</li>';
        output += '<li>Azmatullah Omarzai</li>';
        output += '<li>Rashid Khan</li>';
        output += '<li>Mujeeb ur Rahman</li>';
        output += '<li>Noor Ahmad</li>';
        output += '<li>Fazalhaq Farooqi</li>';
        output += '<li>Abdul Rahman</li>';
        output += '<li>Naveen ul Haq</li>';
        output += '</ul>';
    }
    else if (url === '/australia') {
        output = '<h1>Australia</h1>';
        output += '<ul>';
        output += '<li>Pat Cummins (c)</li>';
        output += '<li>Steve Smith</li>';
        output += '<li>Alex Carey</li>';
        output += '<li>Josh Inglis</li>';
        output += '<li>Sean Abbott</li>';
        output += '<li>Cameron Green</li>';
        output += '<li>Josh Hazlewood</li>';
        output += '<li>Travis Head</li>';
        output += '<li>Marnus Labuschagne</li>';
        output += '<li>Mitch Marsh</li>';
        output += '<li>Glenn Maxwell</li>';
        output += '<li>Marcus Stoinis</li>';
        output += '<li>David Warner</li>';
        output += '<li>Adam Zampa</li>';
        output += '<li>Mitchell Starc</li>';
        output += '</ul>';
    }
    else if (url === '/netherlands') {
        output = '<h1>Netherlands</h1>';
        output += '<ul>';
        output += '<li>Scott Edwards (c)</li>';
        output += '<li>Max O Dowd</li>';
        output += '<li>Bas de Leede</li>';
        output += '<li>Vikram Singh</li>';
        output += '<li>Teja Nidamanuru</li>';
        output += '<li>Paul van Meekeren</li>';
        output += '<li>Colin Ackermann</li>';
        output += '<li>Roelof van der Merwe</li>';
        output += '<li>Logan van Beek</li>';
        output += '<li>Aryan Dutt</li>';
        output += '<li>Ryan Klein</li>';
        output += '<li>Wesley Barresi</li>';
        output += '<li>Saqib Zulfiqar</li>';
        output += '<li>Shariz Ahmad</li>';
        output += '<li>Sybrand Engelbrecht</li>';
        output += '</ul>';
    }
    else if (url === '/new_zealand') {
        output = '<h1>New Zealand</h1>';
        output += '<ul>';
        output += '<li>Kane Williamson (c)</li>';
        output += '<li>Trent Boult</li>';
        output += '<li>Mark Chapman</li>';
        output += '<li>Devon Conway</li>';
        output += '<li>Lockie Ferguson</li>';
        output += '<li>Matt Henry</li>';
        output += '<li>Tom Latham</li>';
        output += '<li>Daryl Mitchell</li>';
        output += '<li>Glenn Phillips</li>';
        output += '<li>Rachin Ravindra</li>';
        output += '<li>Mitch Santner</li>';
        output += '<li>Ish Sodhi</li>';
        output += '<li>Tim Southee</li>';
        output += '<li>Will Young</li>';
        output += '</ul>';
    }
    else if (url === '/pakistan') {
        output = '<h1>Pakistan</h1>';
        output += '<ul>';
        output += '<li>Babar Azam (c)</li>';
        output += '<li>Shadab Khan</li>';
        output += '<li>Fakhar Zaman</li>';
        output += '<li>Imam-ul-Haq</li>';
        output += '<li>Abdullah Shafique</li>';
        output += '<li>Mohammad Rizwan</li>';
        output += '<li>Saud Shakeel</li>';
        output += '<li>Iftikhar Ahmed</li>';
        output += '<li>Salman Ali Agha</li>';
        output += '<li>Mohammad Nawaz</li>';
        output += '<li>Usama Mir</li>';
        output += '<li>Haris Rauf</li>';
        output += '<li>Hasan Ali</li>';
        output += '<li>Shaheen Afridi</li>';
        output += '<li>Mohammad Wasim</li>';
        output += '</ul>';
    }
    else if (url === '/south_africa') {
        output = '<h1>South Africa</h1>';
        output += '<ul>';
        output += '<li>Temba Bavuma (c)</li>';
        output += '<li>Gerald Coetzee</li>';
        output += '<li>Quinton de Kock</li>';
        output += '<li>Reeza Hendricks</li>';
        output += '<li>Marco Jansen</li>';
        output += '<li>Heinrich Klaasen</li>';
        output += '<li>Keshav Maharaj</li>';
        output += '<li>Aiden Markram</li>';
        output += '<li>David Miller</li>';
        output += '<li>Lungi Ngidi</li>';
        output += '<li>Andile Phehlukwayo</li>';
        output += '<li>Kagiso Rabada</li>';
        output += '<li>Tabraiz Shamsi</li>';
        output += '<li>Rassie van der Dussen</li>';
        output += '<li>Lizaad Williams</li>';
        output += '</ul>';
    }
    else if (url === '/sri_lanka') {
        output = '<h1>Sri Lanka</h1>';
        output += '<ul>';
        output += '<li>Kusal Mendis (c)</li>';
        output += '<li>Kusal Perera</li>';
        output += '<li>Pathum Nissanka</li>';
        output += '<li>Lahiru Kumara</li>';
        output += '<li>Dimuth Karunaratne</li>';
        output += '<li>Sadeera Samarawickrama</li>';
        output += '<li>Charith Asalanka</li>';
        output += '<li>Dhananjaya de Silva</li>';
        output += '<li>Maheesh Theekshana</li>';
        output += '<li>Dunith Wellalage</li>';
        output += '<li>Kasun Rajitha</li>';
        output += '<li>Matheesha Pathirana</li>';
        output += '<li>Dilshan Madushanka</li>';
        output += '<li>Dushan Hemantha</li>';
        output += '<li>Chamika Karunaratne</li>';
        output += '</ul>';
    }
    else {
        output = '<h1>404 Page Not Found</h1>';
    }
    response.write(output);
    response.end();
});
server.listen(5000);
console.log('server started on port 5000');