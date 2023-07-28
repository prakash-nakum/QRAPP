

// ///file download code and propetr working cusseccfullty ,
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5000;

// const upload = require('./middleware/fileUploadMiddleware');

// app.use(cors({ origin: 'http://192.168.192.76:3000' }));

// app.post('/upload', upload.single('file'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded' });
//     }
//     const fileURL = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
//     res.json({ fileURL });
// });
// app.use('/uploads', express.static('uploads'));

// app.listen(port, () => {
//     console.log(`Server is running on http://192.168.192.76:${port}`);
// });






// const express = require('express');
// const bodyParser = require('body-parser');
// const { v4: uuidv4 } = require('uuid');
// const cors = require('cors');

// const app = express();
// const port = 8080;

// app.use(cors({
//     origin: 'http://192.168.192.76:3000',
// }));

// app.use(bodyParser.json());

// // Store the entered URLs with their UUID as keys
// const dynamicLinks = {};

// app.post('/generate-dynamic-link', (req, res) => {
//     const { urls } = req.body;

//     if (!urls) {
//         return res.status(400).json({ error: 'No URLs provided' });
//     }

//     const dynamicLinkId = uuidv4();
//     const dynamicLink = `http://192.168.192.76:8080/dynamic-link/${dynamicLinkId}`;

//     // Save the entered URLs with the dynamic link ID
//     dynamicLinks[dynamicLinkId] = urls.split(',');

//     res.json({ dynamicLink });
// });

// // Handle the dynamic link redirection
// app.get('/dynamic-link/:dynamicLinkId', (req, res) => {
//     const { dynamicLinkId } = req.params;

//     if (dynamicLinks[dynamicLinkId]) {
//         const urls = dynamicLinks[dynamicLinkId];

//         // Redirect to the entered URLs one by one
//         urls.forEach((url) => {
//             res.write(`<script>window.open("${url}");</script>`);
//         });
//         res.end();
//     } else {
//         res.status(404).send('Dynamic link not found.');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });





// // In your server-side code (e.g., app.js or index.js)
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const { nanoid } = require('nanoid'); // To generate unique IDs for dynamic links

// app.use(bodyParser.json());

// // Route to handle dynamic link generation
// app.post('/generateDynamicLink', (req, res) => {
//     const { urls } = req.body;

//     // Process the entered URLs as needed (e.g., store them in a database)

//     // Generate a new dynamic link using nanoid (or any other method you prefer)
//     const dynamicLink = `https://example.com/${nanoid()}`;

//     // Send the dynamic link back as a response
//     res.json({ dynamicLink });
// });

// // Start the server on a specified port (e.g., 5000)
// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });



