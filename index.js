import express from "express";

const server = express();



server.get("/books", (req, res) => {
  return res.json(data);
});

server.get("/books/:id", (req, res)=>{
  const { id } = req.params

 const book = data.find(book => book.id === Number(id))  
 return res.json(book)
})

server.listen(3000
  
);
