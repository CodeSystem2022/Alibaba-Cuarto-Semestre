import pg from "pg";

const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "PERN",
    password: "240484",
    port: 5432,
});


pool.on("connect", () => {
    console.log("conectado a la base de datos");
});

export { pool };