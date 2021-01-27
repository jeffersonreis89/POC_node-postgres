const db = require('./_database')

async  function select(){
    await db.connect();
    result = await db.query(`SELECT * FROM USUARIOS`);

    console.log(result.rows);
    await db.end();
}

select();