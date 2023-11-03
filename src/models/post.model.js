const selectAllPosts = () => {
    return db.query('select * from posts')
}

const selectPostById = (postId) => {
    return db.query('select * from posts where id = ?', [postId]);
}

const insertPost = ({titulo, descripcion, fecha_creacion, categoria, autores_id}) => {

    return db.query('insert into posts (titulo, descripcion, fecha_creacion, categoria, autores_id) values (?,?,?,?,?)', 
    [titulo, descripcion, fecha_creacion, categoria, autores_id]
    )
}

const selectPostsByAuthorId = (autorId) => {
    return db.query('select * from posts where autores_id = ?', [autorId]);
}

module.exports = {selectAllPosts, selectPostById, insertPost, selectPostsByAuthorId}; 

