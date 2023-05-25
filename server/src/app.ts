import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 5000;
app.use(cors())

let tasks = [
    { id: 1, titulo: "Aprender React", concluida: true },
    { id: 2, titulo: "Estudar NodeJS", concluida: false },
    { id: 3, titulo: "Praticar TypeScript", concluida: false }
];


app.get('/api/tasks', (req: Request, res: Response) => {
    res.json(tasks);
});
  

app.post('/api/tasks', (req: Request, res: Response) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
});


app.patch('/api/tasks/:id', (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
  
    tasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
  
    res.json(updatedTask);
});


app.delete('/api/tasks/:id', (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
  
    tasks = tasks.filter(task => task.id !== taskId);
  
    res.sendStatus(204);
});




app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});