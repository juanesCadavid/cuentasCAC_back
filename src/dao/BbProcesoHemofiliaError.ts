import pool from '../database'

class DBProcesohemofiliaerror{ 
    public static  guardar(hemofiliaerror) {
        try {
             pool.query('insert into bd_proceso_hemofilia_error set ?', hemofiliaerror, function(err, result, fields) {
                if (err) throw err;             
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

}


export default DBProcesohemofiliaerror;