import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Book } from '../models/livro';

const router = Router();
let books : Book[] = [];

router.post("/books", (req: Request, res: Response) => {
    const { title, author, publishedYear } = req.body;
    
    if (!title || !author || !publishedYear){
        return res.status(400).json({ message: "Dados inválidos" });
    };

    const bookExistente = books.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (bookExistente) {
        return res.status(400).json({ error: 'Livro já está cadastrado.' });
    }
    
    const novoLivro : Book = { id:uuidv4(), title, author, publishedYear };
    
    books.push(novoLivro);
    res.status(201).json(novoLivro);
})

router.get("/books", (req: Request, res: Response) => {
    const { title } = req.query;
    const filtradoLivro = title ? books.filter(book => book.title.includes(title as string)): books
    res.json(filtradoLivro);
});

export default router;