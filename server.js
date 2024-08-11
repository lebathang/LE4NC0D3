 import express from "express";
 const app = express()
 app.set('view engine','ejs')
 app.get('/home',(req,res)=>{
    res.render('index.ejs')
 })
 app.get('/login',(req,res)=>{
    res.render('login.ejs')
 })
 app.get('/signup',(req,res)=>{
   res.render('signup.ejs')
})
 app.get('/about',(req,res)=>{
   res.render('about.ejs')
})
app.get('/home',(req,res)=>{
   res.render('index.ejs')
})
app.get('/lession',(req,res)=>{
   res.render('lession.ejs')
})

app.get('/responsive-web-design',(req,res)=>{
   res.render('responsive-web-design.ejs')
})

app.get('/javascript-algorithms-and-data-structures',(req,res)=>{
   res.render('javascript-algorithms-and-data-structures.ejs')
})

app.get('/front-end-development-libraries',(req,res)=>{
   res.render('front-end-development-libraries.ejs')
})
app.get('/data-visualization',(req,res)=>{
   res.render('data-visualization.ejs')
})
app.get('/relational-database',(req,res)=>{
   res.render('relational-database.ejs')
})
app.get('/back-end-development-and-apis',(req,res)=>{
   res.render('back-end-development-and-apis.ejs')
})
app.get('/quality-assurance',(req,res)=>{
   res.render('quality-assurance.ejs')
})
app.get('/scientific-computing-with-python',(req,res)=>{
   res.render('scientific-computing-with-python.ejs')
})
app.get('/data-analysis-with-python',(req,res)=>{
   res.render('data-analysis-with-python.ejs')
})
app.get('/information-security',(req,res)=>{
   res.render('information-security.ejs')
})
app.get('/machine-learning-with-python',(req,res)=>{
   res.render('machine-learning-with-python.ejs')
})
app.get('/foundational-c-sharp-with-microsoft',(req,res)=>{
   res.render('foundational-c-sharp-with-microsoft.ejs')
})
app.get('/coding-interview-prep',(req,res)=>{
   res.render('coding-interview-prep.ejs')
})
app.get('/project-euler',(req,res)=>{
   res.render('project-euler.ejs')
})
app.get('/rosetta-code',(req,res)=>{
   res.render('rosetta-code.ejs')
})
app.get('/password_reset',(req,res)=>{
   res.render('password_reset.ejs')
})
app.get('/network-computer',(req,res)=>{
   res.render('network-computer.ejs')
})


// const users = [
//    { id : 1, name : 'John'},
//    { id : 2, name : 'Doe'},
//    { id : 3, name : 'Smith'},
//    { id : 4, name : 'Alex'},
//    { id : 5, name : 'Tom'},
//    { id : 6, name : 'Jerry'},
//    { id : 7, name : 'Sam'},
//    { id : 8, name : 'Max'},
//    { id : 9, name : 'Jhonny'},
//    { id : 10, name : 'Micheal'},
//    { id : 11, name : 'Jhonny'},
//    { id : 12, name : 'Micheal'},
//    { id : 13, name : 'Jhonny'},
//    { id : 14, name : 'Micheal'},
//    { id : 15, name : 'Jhonny'},
//    { id : 16, name : 'Micheal'},
//    { id : 17, name : 'Jhonny'},
//    { id : 18, name : 'Micheal'},
//    { id : 19, name : 'Jhonny'},
//    { id : 20, name : 'Micheal'},
//    { id : 21, name : 'Jhonny'},
//    { id : 22, name : 'Micheal'},
//    { id : 23, name : 'Jhonny'},
//    { id : 24, name : 'Micheal'},
//    { id : 25, name : 'Jhonny'},
//    { id : 26, name : 'Micheal'},
//    { id : 27, name : 'Jhonny'},
//    { id : 28, name : 'Micheal'},
//    { id : 29, name : 'Jhonny'},
//    { id : 30, name : 'Micheal'},
//    { id : 31, name : 'Jhonny'},
//    { id : 32, name : 'Micheal'},
//    { id : 33, name : 'Jhonny'},
//    { id : 34, name : 'Micheal'},
//    { id : 35, name : 'Jhonny'},
//    { id : 36, name : 'Micheal'},
//    { id : 37, name : 'Jhonny'},
//    { id : 38, name : 'Micheal'},
//    { id : 39, name : 'Jhonny'},
// ];

// app.get('/users',(req,res)=>{
//    res.json(users);
// });

// app.get('/users',(req,res)=>{
//    const page = req.query.page;
//    const limit = req.query.limit;
//    const startIndex = (page - 1) * limit;
//    const endIndex = page * limit;
//    const results = users.slice(startIndex,endIndex);
//    res.json(user);
// });

// const results = {};

// if (endIndex < users.length) {
//    results.next = {
//       page : page + 1,
//       limit : limit
//    }
// }
// if (startIndex > 0) {
//    results.previous = {
//       page : page - 1,
//       limit : limit
//    }
// }
// results.results = users.slice(startIndex,endIndex);
// res.json(results);

// app.get('/posts',(req,res)=>{
//    res.json(res.paginatedResults);
// });
// app.get("/users",(req,res)=>{
//    res.json(res.paginatedResults);
// });


app.get('/auth',(req,res)=>{
   res.render('test.ejs')
})











app.get('/nav',(req,res)=>{
   res.render('navigation.ejs')
})
 app.use(express.static('./frontend'))
 app.listen(3000, ()=>{
    console.log("Love you");
 })
  