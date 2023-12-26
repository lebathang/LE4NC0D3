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
app.get('/password_reset',(req,res)=>{
   res.render('password_reset.ejs')
})


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
 