const express=require('express')
const app=express()
const cors = require('cors');
const wazirxRoutes=require('./routes/wazirx_routes')
const errorMiddleware=require('./middlewares/error_midd')

app.use(cors());
app.use(express.json());

app.use('/',wazirxRoutes)
app.use(errorMiddleware)

app.listen(5000,() => {
    console.log("🚀 --------- server is running on 5000 ---------- 🚀")
})