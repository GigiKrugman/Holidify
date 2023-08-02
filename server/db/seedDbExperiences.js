require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const Experience = require("../models/Experience");

const data = [
  {
    name: "Safari South Africa",
    description: "Discover the wildness of South Africa",
    location: "South Africa",
    price: 1200,
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1577971132997-c10be9372519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FmYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    ],
    duration: 12,
  },
  {
    name: "Big Apple tour",
    description: "deep dive in the big apple",
    location: "United States",
    price: 700,
    images: [
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    ],
    duration: 6,
  },
  {
    name: "Japan all around",
    description: "Suggestive experiences in the suggestive Japan",
    location: "Japan",
    price: 700,
    images: [
      "https://plus.unsplash.com/premium_photo-1673698463059-c022fb3a32ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    ],
    duration: 6,
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
    return Experience.insertMany(data);
  })
  .then(() => {
    console.log("Data has been inserted");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log("Oh no, error");
    console.log(error);
  });
