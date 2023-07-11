require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const Accomodation = require("../models/Accomodation");

const data = [
  {
    name: "The cozy place",
    description: "A warm and cozy town house situated down town",
    location: "Miami",
    price: 100,
    images: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1591247378418-c77f1532d2f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zaWRlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    ],
    capacity: 10,
    amenities: ["WiFi", "Parking", "Kitchen"],
  },
  {
    name: "Canda's finest",
    description: "A typical upscale Canadian house",
    location: "Montreal",
    price: 150,
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zaWRlJTIwaG95c2UlMjB0b3JvbnRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zaWRlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    ],
    capacity: 4,
    amenities: ["WiFi", "Parking", "Kitchen"],
  },
  {
    name: "The Fisherman's house",
    description: "A warm and cozy town house situated down town",
    location: "San Francisco",
    price: 170,
    images: [
      "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      "https://plus.unsplash.com/premium_photo-1684349306485-c2a1fd67002c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    ],
    capacity: 4,
    amenities: ["WiFi", "Parking", "Kitchen"],
  },
  {
    name: "The attic",
    description: "A warm and cozy town house situated down town",
    location: "Milan",
    price: 100,
    images: [
      "https://images.unsplash.com/photo-1664261421791-c25c5760f577?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yaydzJTIwYXR0aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
    ],
    capacity: 4,
    amenities: ["WiFi", "Parking", "Kitchen"],
  },
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connection Open");
    console.log("About to insert data...");
    return Accomodation.insertMany(data);
  })
  .then(() => {
    console.log("Data has been inserted");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log("Oh no, error");
    console.log(error);
  });
