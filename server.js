const express = require('express')
const Database=require("better-sqlite3")
const db=new Database('./database.db',{verbose:console.log})
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get',(req,res)=>{
    const create_table_cats=
    `CREATE TABLE cats
     (
         id      INTEGER PRIMARY KEY AUTOINCREMENT,
         name    CHAR(50)           NOT NULL,
         age   INT
     );`

    db.exec(create_table_cats)
    res.send(db)
})

app.get('/add',(req,res)=>{
    //创建插入语句
    const insert = db.prepare('INSERT INTO cats (name, age) VALUES (@name, @age)');

    //插入一条记录
    insert.run({name:'Jack',age:2})

    //创建批量插入过程
    const insertMany = db.transaction((cats) => {
        for (const cat of cats) insert.run(cat);
    });

    //执行批量插入语句
    insertMany([
        {name: 'Joey', age: 2 },
        {name: 'Sally', age: 4 },
        {name: 'Junior', age: 1 },
    ]);

    console.log(insert)
    res.send(insert)
})

app.get('/view',(req,res)=>{
    const select_stmt=db.prepare('SELECT * FROM cats')
    var cats=select_stmt.all()
    console.log(cats)
    res.send(select_stmt)
})

app.get('/update',(req,res)=>{
    const updata_stmt = db.prepare('UPDATE cats SET name =@name ,age=@age WHERE id=@id')
    updata_stmt.run({id:1,name:"Tom",age:3})
    console.log(updata_stmt)
    res.send(updata_stmt)
})

app.get('/delete',(req,res)=>{
    const delete_stmt=db.prepare('DELETE FROM cats WHERE id = @id;')
    delete_stmt.run({id:3})
    console.log(delete_stmt)
    res.send(delete_stmt)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})